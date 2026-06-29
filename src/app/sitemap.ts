import { blogPosts } from '@/data/blogPosts';
import { caseStudies } from '@/data/caseStudies';
import { SITE_URL } from '@/lib/seo';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL;
    const siteLastModified = new Date('2026-06-24');

    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const caseStudyUrls = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: siteLastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    return [
        {
            url: baseUrl,
            lastModified: siteLastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/consulting`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/services/security`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/services/networking`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/services/access-control`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/services/audio-video`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/services/cyber`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: siteLastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/testimonials`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: siteLastModified,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/process`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: siteLastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: siteLastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/guides/knx-vs-control4`,
            lastModified: siteLastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...blogUrls,
        ...caseStudyUrls,
    ];
}
