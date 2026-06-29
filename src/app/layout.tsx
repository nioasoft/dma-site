import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import Script from "next/script";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heading",
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "900"],
});

const assistant = Assistant({
  variable: "--font-body",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | DMA',
    default: 'DMA - Intelligence in Infrastructure',
  },
  description: 'מומחים בתכנון וביצוע מערכות מתח נמוך, תקשורת ואבטחה לבתי יוקרה ולמגזר העסקי. DMA מספקת שקט נפשי ופתרונות טכנולוגיים מתקדמים.',
  keywords: ['מתח נמוך', 'מערכות אבטחה', 'מצלמות אבטחה', 'מערכות אזעקה', 'אינטרקום', 'רשתות תקשורת', 'אודיו וידאו', 'בקרת כניסה', 'DMA'],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'DMA - Advanced Communication & Security Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMA - Intelligence in Infrastructure',
    description: 'מומחים בתכנון וביצוע מערכות מתח נמוך, תקשורת ואבטחה',
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: '/icon.svg',
  },
};

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Lazy load non-critical components
const FloatingBanner = dynamic(() => import("@/components/FloatingBanner"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const CookieConsent = dynamic(() => import("@/components/CookieConsent"));

const structuredData = [organizationSchema, localBusinessSchema, websiteSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero-bg.webp"
          type="image/webp"
        />
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FG84EER9D8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FG84EER9D8');
          `}
        </Script>
      </head>
      <body className={`${heebo.variable} ${assistant.variable}`}>
        <a href="#main-content" className="skip-link">
          דלג לתוכן הראשי
        </a>
        <Header />
        <FloatingBanner />
        <div id="main-content">
          {children}
        </div>
        <WhatsAppButton />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
