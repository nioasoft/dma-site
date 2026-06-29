#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";

const DEFAULT_SITE = "https://www.dma247.net";
const DEFAULT_LIMIT = 60;
const USER_AGENTS = {
  googlebot: "Googlebot/2.1 (+http://www.google.com/bot.html)",
  gptbot: "GPTBot/1.0",
  perplexity: "PerplexityBot/1.0",
  claude: "ClaudeBot/1.0",
};

function parseArgs(argv) {
  const args = {
    site: DEFAULT_SITE,
    expectedSite: "",
    limit: DEFAULT_LIMIT,
    gsc: "",
    output: "reports/seo-geo-audit.md",
    json: "",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) continue;
    const [rawKey, rawValue] = arg.slice(2).split("=");
    const key = rawKey.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    const value = rawValue ?? argv[i + 1];
    if (rawValue === undefined) i += 1;
    if (key === "limit") {
      args.limit = Number(value) || DEFAULT_LIMIT;
    } else if (key in args) {
      args[key] = value;
    }
  }

  args.site = normalizeOrigin(args.site);
  args.expectedSite = normalizeOrigin(args.expectedSite || args.site);
  return args;
}

function normalizeOrigin(value) {
  const url = new URL(value);
  return url.origin;
}

function normalizeUrl(value) {
  const url = new URL(value);
  url.hash = "";
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
  }
  return url.href;
}

function sameNormalizedUrl(left, right) {
  return normalizeUrl(left) === normalizeUrl(right);
}

function htmlDecode(value = "") {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(value = "") {
  return htmlDecode(value.replace(/<[^>]+>/g, ""));
}

function parseAttributes(tag) {
  const attributes = {};
  const pattern = /([\w:-]+)\s*=\s*(["'])(.*?)\2/g;
  let match;
  while ((match = pattern.exec(tag)) !== null) {
    attributes[match[1].toLowerCase()] = htmlDecode(match[3]);
  }
  return attributes;
}

function extractPageData(html, pageUrl, siteOrigin) {
  const title = stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  const htmlAttrs = parseAttributes(html.match(/<html\b[^>]*>/i)?.[0] ?? "");
  const meta = {};
  const links = [];
  const jsonLd = [];
  const externalLinks = new Set();

  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = parseAttributes(match[0]);
    const key = attrs.name || attrs.property;
    if (key && attrs.content) meta[key.toLowerCase()] = attrs.content;
  }

  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const attrs = parseAttributes(match[0]);
    links.push(attrs);
  }

  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    const raw = htmlDecode(match[1]);
    try {
      jsonLd.push(JSON.parse(raw));
    } catch {
      jsonLd.push({ parseError: true, raw: raw.slice(0, 160) });
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*href=(["'])(.*?)\1/gi)) {
    try {
      const href = new URL(htmlDecode(match[2]), pageUrl);
      if (href.protocol.startsWith("http") && href.origin !== siteOrigin) {
        externalLinks.add(href.origin);
      }
    } catch {
      // Ignore malformed or framework-only hrefs.
    }
  }

  const canonical = links.find((link) => (link.rel || "").toLowerCase() === "canonical")?.href ?? "";
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  const bodyText = stripTags(html.replace(/<script[\s\S]*?<\/script>/gi, " "));
  const schemaTypes = jsonLd.flatMap(schemaTypesFromJsonLd);
  const jsonLdText = jsonLd.map((item) => JSON.stringify(item)).join("\n");

  return {
    title,
    description: meta.description ?? "",
    canonical,
    ogUrl: meta["og:url"] ?? "",
    ogImage: meta["og:image"] ?? "",
    robots: meta.robots ?? "",
    lang: htmlAttrs.lang ?? "",
    dir: htmlAttrs.dir ?? "",
    h1Count,
    jsonLd,
    jsonLdText,
    schemaTypes,
    externalLinkOrigins: [...externalLinks],
    wordCount: bodyText.split(/\s+/).filter(Boolean).length,
    numberSignals: [...bodyText.matchAll(/(\d+%|\d+\s*(?:Mbps|Gbps|TB|₪|ש"ח)|\d{4})/gi)].length,
  };
}

function schemaTypesFromJsonLd(value) {
  if (!value || typeof value !== "object") return [];
  if (Array.isArray(value)) return value.flatMap(schemaTypesFromJsonLd);
  const graphTypes = Array.isArray(value["@graph"]) ? value["@graph"].flatMap(schemaTypesFromJsonLd) : [];
  const type = value["@type"];
  return [...(Array.isArray(type) ? type : type ? [type] : []), ...graphTypes];
}

async function fetchWithRedirects(url, options = {}) {
  const maxRedirects = options.maxRedirects ?? 8;
  const method = options.method ?? "GET";
  const userAgent = options.userAgent ?? USER_AGENTS.googlebot;
  const chain = [];
  let currentUrl = url;

  for (let step = 0; step <= maxRedirects; step += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    let response;
    try {
      response = await fetch(currentUrl, {
        method,
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "user-agent": userAgent,
          accept: method === "HEAD" ? "*/*" : "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });
    } finally {
      clearTimeout(timeout);
    }

    const location = response.headers.get("location");
    chain.push({ url: currentUrl, status: response.status, location });

    if ([301, 302, 303, 307, 308].includes(response.status) && location) {
      currentUrl = new URL(location, currentUrl).href;
      continue;
    }

    const body = method === "HEAD" ? "" : await response.text();
    return {
      url,
      finalUrl: currentUrl,
      status: response.status,
      headers: response.headers,
      body,
      chain,
    };
  }

  throw new Error(`Too many redirects for ${url}`);
}

async function readTextIfExists(filePath) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return "";
    throw error;
  }
}

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

async function walkFiles(root, ignored = new Set([".git", ".next", "node_modules"])) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkFiles(fullPath, ignored));
    } else if (/\.(tsx?|jsx?|mjs|json|txt|md)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function addIssue(issues, severity, area, message, details = {}) {
  issues.push({ severity, area, message, ...details });
}

async function internalAudit(cwd, siteOrigin) {
  const issues = [];
  const files = await walkFiles(cwd);
  const hostPattern = /https:\/\/(?:www\.)?dma247\.net/g;
  const mismatchedHosts = [];

  for (const filePath of files) {
    const relativePath = path.relative(cwd, filePath);
    if (!relativePath.startsWith("src/") && !relativePath.startsWith("public/") && relativePath !== "vercel.json") {
      continue;
    }
    const text = await fs.readFile(filePath, "utf8");
    for (const match of text.matchAll(hostPattern)) {
      if (match[0] !== siteOrigin) {
        mismatchedHosts.push(`${relativePath}:${lineNumber(text, match.index)} -> ${match[0]}`);
      }
    }
  }

  if (mismatchedHosts.length > 0) {
    addIssue(issues, "high", "internal", `Hardcoded URL host does not match preferred host ${siteOrigin}.`, {
      evidence: mismatchedHosts.slice(0, 12),
      recommendation: "Centralize SITE_URL and use it for metadataBase, canonical URLs, OG URLs, sitemap, robots, and JSON-LD.",
    });
  }

  const robotsText = await readTextIfExists(path.join(cwd, "public/robots.txt"));
  if (/Disallow:\s*\/_next\/?/i.test(robotsText)) {
    addIssue(issues, "medium", "internal", "robots.txt blocks /_next/ assets.", {
      file: "public/robots.txt",
      recommendation: "Allow framework CSS/JS assets so Google can fully render pages; keep private routes blocked individually if needed.",
    });
  }

  const sitemapText = await readTextIfExists(path.join(cwd, "src/app/sitemap.ts"));
  if (sitemapText.includes("lastModified: new Date()")) {
    addIssue(issues, "medium", "internal", "Sitemap uses build time as lastModified for many pages.", {
      file: "src/app/sitemap.ts",
      recommendation: "Use stable source timestamps per page/content item to avoid noisy recrawl signals.",
    });
  }

  const servicePage = await readTextIfExists(path.join(cwd, "src/app/services/page.tsx"));
  const serviceIds = new Set([...servicePage.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]));
  const blogData = await readTextIfExists(path.join(cwd, "src/data/blogPosts.ts"));
  const brokenAnchors = [...blogData.matchAll(/url:\s*['"]([^'"]*#[^'"]+)['"]/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith("/services#") && !serviceIds.has(url.split("#")[1]));
  if (brokenAnchors.length > 0) {
    addIssue(issues, "medium", "internal", "Blog related-service links point to missing /services anchors.", {
      evidence: [...new Set(brokenAnchors)],
      recommendation: "Replace legacy anchor links with canonical service detail routes such as /services/security.",
    });
  }

  return issues;
}

async function getRobotsAndSitemap(fetchOrigin, expectedOrigin) {
  const robots = await fetchWithRedirects(`${fetchOrigin}/robots.txt`);
  const sitemapFromRobots = [...robots.body.matchAll(/^Sitemap:\s*(.+)$/gim)].map((match) => match[1].trim());
  const sitemapUrl = sitemapFromRobots[0] || `${expectedOrigin}/sitemap.xml`;
  const sitemapFetchUrl = new URL(sitemapUrl).origin === fetchOrigin
    ? sitemapUrl
    : new URL(new URL(sitemapUrl).pathname, fetchOrigin).href;
  const sitemap = await fetchWithRedirects(sitemapFetchUrl);
  const urls = [...sitemap.body.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => htmlDecode(match[1]));
  return { robots, sitemap, sitemapUrl, sitemapUrls: urls };
}

async function externalAudit(fetchOrigin, expectedOrigin, limit) {
  const issues = [];
  const pageSummaries = [];
  const { robots, sitemap, sitemapUrl, sitemapUrls } = await getRobotsAndSitemap(fetchOrigin, expectedOrigin);

  if (!robots.body.includes(`Sitemap: ${expectedOrigin}/sitemap.xml`)) {
    addIssue(issues, "high", "external", "robots.txt points crawlers to a sitemap on a different host.", {
      evidence: robots.body.split("\n").filter((line) => /^Sitemap:/i.test(line)),
      recommendation: `Set robots sitemap to ${expectedOrigin}/sitemap.xml.`,
    });
  }

  if (/Disallow:\s*\/_next\/?/i.test(robots.body)) {
    addIssue(issues, "medium", "external", "Live robots.txt blocks /_next/ assets.", {
      recommendation: "Remove this broad block or explicitly allow /_next/static/.",
    });
  }

  const sitemapWrongHost = sitemapUrls.filter((url) => new URL(url).origin !== expectedOrigin);
  if (sitemapWrongHost.length > 0) {
    addIssue(issues, "high", "external", `${sitemapWrongHost.length} sitemap URLs use a non-preferred host.`, {
      evidence: sitemapWrongHost.slice(0, 10),
      recommendation: `Regenerate sitemap URLs with ${expectedOrigin}.`,
    });
  }

  const urlsToAudit = [...new Set([expectedOrigin, `${expectedOrigin}/blog`, ...sitemapUrls])].slice(0, limit);
  let sitemapRedirects = 0;
  const sitemapRedirectExamples = [];
  const titleMap = new Map();

  for (const expectedUrl of urlsToAudit) {
    const fetchUrl = mapExpectedUrlToFetchUrl(expectedUrl, fetchOrigin, expectedOrigin);
    const response = await fetchWithRedirects(fetchUrl);
    const expectedFinalUrl = mapFetchUrlToExpectedUrl(response.finalUrl, fetchOrigin, expectedOrigin);
    if (response.chain.length > 1 && sitemapUrls.includes(expectedUrl)) {
      sitemapRedirects += 1;
      if (sitemapRedirectExamples.length < 8) sitemapRedirectExamples.push(`${expectedUrl} -> ${expectedFinalUrl}`);
    }
    if (response.status !== 200) {
      addIssue(issues, "high", "external", `Page returned HTTP ${response.status}.`, { url: expectedUrl, finalUrl: expectedFinalUrl });
      continue;
    }

    const data = extractPageData(response.body, expectedFinalUrl, expectedOrigin);
    pageSummaries.push({ url: expectedUrl, finalUrl: expectedFinalUrl, ...data });
    titleMap.set(data.title, [...(titleMap.get(data.title) || []), expectedFinalUrl]);

    if (!data.canonical) {
      addIssue(issues, "high", "external", "Missing canonical URL.", { url: expectedFinalUrl });
    } else if (new URL(data.canonical).origin !== expectedOrigin) {
      addIssue(issues, "high", "external", "Canonical URL points to a different host than the preferred live host.", {
        url: expectedFinalUrl,
        evidence: [data.canonical],
      });
    } else if (!sameNormalizedUrl(data.canonical, expectedFinalUrl)) {
      addIssue(issues, "medium", "external", "Canonical URL does not match final URL.", {
        url: expectedFinalUrl,
        evidence: [data.canonical],
      });
    }

    if (data.ogUrl && (new URL(data.ogUrl).origin !== expectedOrigin || !sameNormalizedUrl(data.ogUrl, expectedFinalUrl))) {
      addIssue(issues, "medium", "external", "Open Graph URL is not page-specific or uses the wrong host.", {
        url: expectedFinalUrl,
        evidence: [data.ogUrl],
      });
    }

    if (data.jsonLdText.includes("https://dma247.net") && expectedOrigin !== "https://dma247.net") {
      addIssue(issues, "medium", "external", "JSON-LD contains non-preferred entity URLs.", { url: expectedFinalUrl });
    }

    if (data.h1Count !== 1) {
      addIssue(issues, data.h1Count === 0 ? "high" : "low", "external", `Page has ${data.h1Count} H1 elements.`, { url: expectedFinalUrl });
    }

    if (data.lang !== "he" || data.dir !== "rtl") {
      addIssue(issues, "medium", "external", "Hebrew page is missing expected lang/dir attributes.", {
        url: expectedFinalUrl,
        evidence: [`lang=${data.lang || "missing"}`, `dir=${data.dir || "missing"}`],
      });
    }

    if (expectedFinalUrl.includes("/services/") && !data.schemaTypes.includes("Service")) {
      addIssue(issues, "medium", "geo", "Service page lacks Service structured data.", { url: expectedFinalUrl });
    }

    if (expectedFinalUrl.includes("/blog/") && !data.schemaTypes.includes("Article")) {
      addIssue(issues, "high", "geo", "Blog post lacks Article structured data.", { url: expectedFinalUrl });
    }

    if ((expectedFinalUrl.includes("/blog/") || expectedFinalUrl.includes("/guides/")) && data.externalLinkOrigins.length === 0) {
      addIssue(issues, "medium", "geo", "Article/guide has no outbound source citations for AI answer engines.", {
        url: expectedFinalUrl,
        recommendation: "Add cited sources, concrete stats, expert attribution, and visible last-updated dates.",
      });
    }
  }

  if (sitemapRedirects > 0) {
    addIssue(issues, "high", "external", `${sitemapRedirects} audited sitemap URLs redirect before resolving.`, {
      evidence: sitemapRedirectExamples,
      recommendation: "Sitemap should list only final canonical URLs.",
    });
  }

  for (const [title, urls] of titleMap.entries()) {
    if (title && urls.length > 1) {
      addIssue(issues, "low", "external", "Duplicate title found in audited pages.", { evidence: [title, ...urls.slice(0, 5)] });
    }
  }

  const botChecks = [];
  for (const [name, userAgent] of Object.entries(USER_AGENTS)) {
    const response = await fetchWithRedirects(fetchOrigin, { userAgent });
    botChecks.push({
      bot: name,
      status: response.status,
      finalUrl: mapFetchUrlToExpectedUrl(response.finalUrl, fetchOrigin, expectedOrigin),
      redirects: response.chain.length - 1,
    });
  }

  return { issues, pageSummaries, robots, sitemap, sitemapUrl, sitemapUrls, botChecks };
}

function mapExpectedUrlToFetchUrl(url, fetchOrigin, expectedOrigin) {
  const parsedUrl = new URL(url);
  if (parsedUrl.origin !== expectedOrigin) return url;
  return new URL(`${parsedUrl.pathname}${parsedUrl.search}`, fetchOrigin).href;
}

function mapFetchUrlToExpectedUrl(url, fetchOrigin, expectedOrigin) {
  const parsedUrl = new URL(url);
  if (parsedUrl.origin !== fetchOrigin) return url;
  return new URL(`${parsedUrl.pathname}${parsedUrl.search}`, expectedOrigin).href;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  const headers = rows.shift()?.map((value) => value.trim()) ?? [];
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

async function readGscSummary(csvPath) {
  if (!csvPath) return null;
  const text = await fs.readFile(csvPath, "utf8");
  const rows = parseCsv(text);
  const reasonKey = Object.keys(rows[0] || {}).find((key) => /reason|issue|status/i.test(key));
  const urlKey = Object.keys(rows[0] || {}).find((key) => /url|page/i.test(key));
  const byReason = new Map();
  for (const row of rows) {
    const reason = row[reasonKey] || "Uncategorized";
    byReason.set(reason, (byReason.get(reason) || 0) + 1);
  }
  return {
    rows: rows.length,
    urlKey,
    reasonKey,
    byReason: [...byReason.entries()].sort((a, b) => b[1] - a[1]),
  };
}

function sortIssues(issues) {
  const weight = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
  return [...issues].sort((left, right) => weight[left.severity] - weight[right.severity]);
}

function renderReport(result, args) {
  const issues = sortIssues([...result.internalIssues, ...result.external.issues]);
  const lines = [
    "# SEO/GEO Audit Report",
    "",
    `Fetch site: ${args.site}`,
    `Expected canonical site: ${args.expectedSite}`,
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    `- Issues: ${issues.length}`,
    `- Audited pages: ${result.external.pageSummaries.length}`,
    `- Sitemap URLs discovered: ${result.external.sitemapUrls.length}`,
    "",
    "## Priority Issues",
    "",
  ];

  for (const issue of issues.slice(0, 80)) {
    lines.push(`- [${issue.severity}] ${issue.area}: ${issue.message}`);
    if (issue.url) lines.push(`  - URL: ${issue.url}`);
    if (issue.file) lines.push(`  - File: ${issue.file}`);
    for (const evidence of issue.evidence || []) lines.push(`  - Evidence: ${evidence}`);
    if (issue.recommendation) lines.push(`  - Fix: ${issue.recommendation}`);
  }

  lines.push("", "## Bot Access", "");
  for (const check of result.external.botChecks) {
    lines.push(`- ${check.bot}: HTTP ${check.status}, final ${check.finalUrl}, redirects ${check.redirects}`);
  }

  lines.push("", "## GSC Import", "");
  if (result.gsc) {
    lines.push(`- Rows: ${result.gsc.rows}`);
    lines.push(`- URL column: ${result.gsc.urlKey || "not detected"}`);
    lines.push(`- Reason/status column: ${result.gsc.reasonKey || "not detected"}`);
    for (const [reason, count] of result.gsc.byReason) {
      lines.push(`- ${reason}: ${count}`);
    }
  } else {
    lines.push("- No GSC CSV supplied. Export Page indexing and Performance CSVs from Search Console and pass --gsc path/to/file.csv.");
  }

  lines.push("", "## Audited Pages", "");
  for (const page of result.external.pageSummaries) {
    lines.push(`- ${page.finalUrl}`);
    lines.push(`  - title: ${page.title}`);
    lines.push(`  - canonical: ${page.canonical || "missing"}`);
    lines.push(`  - schema: ${page.schemaTypes.join(", ") || "none"}`);
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();
  const internalIssues = await internalAudit(cwd, args.expectedSite);
  const external = await externalAudit(args.site, args.expectedSite, args.limit);
  const gsc = await readGscSummary(args.gsc);
  const result = { args, internalIssues, external, gsc };
  const report = renderReport(result, args);

  await fs.mkdir(path.dirname(path.resolve(cwd, args.output)), { recursive: true });
  await fs.writeFile(path.resolve(cwd, args.output), report);

  if (args.json) {
    await fs.mkdir(path.dirname(path.resolve(cwd, args.json)), { recursive: true });
    await fs.writeFile(path.resolve(cwd, args.json), `${JSON.stringify(result, null, 2)}\n`);
  }

  process.stdout.write(report);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
