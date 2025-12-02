import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
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
  metadataBase: new URL('https://dma247.net'),
  title: {
    template: '%s | DMA',
    default: 'DMA - Intelligence in Infrastructure',
  },
  description: 'מומחים בתכנון וביצוע מערכות מתח נמוך, תקשורת, אבטחה ובית חכם לבתי יוקרה ולמגזר העסקי. DMA מספקת שקט נפשי ופתרונות טכנולוגיים מתקדמים.',
  keywords: ['בית חכם', 'חשמל חכם', 'מצלמות אבטחה', 'מערכות אזעקה', 'אינטרקום', 'רשתות תקשורת', 'אודיו וידאו', 'קולנוע ביתי', 'DMA', 'אסף בנתיה'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://dma247.net',
    siteName: 'DMA - Intelligence in Infrastructure',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMA - Intelligence in Infrastructure',
    description: 'מומחים בתכנון וביצוע מערכות מתח נמוך, תקשורת, אבטחה ובית חכם',
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DMA - Intelligence in Infrastructure",
  "description": "תכנון וביצוע מערכות מתח נמוך, תקשורת ומיגון למגזר העסקי ולבתי יוקרה",
  "url": "https://dma247.net",
  "logo": "https://dma247.net/logo-transparent.webp",
  "image": "https://dma247.net/hero-bg.webp",
    "email": "moshe@dma247.net",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Central District",
    "addressCountry": "IL"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Israel"
  },
  "priceRange": "$$$$",
  "serviceType": ["בית חכם", "אבטחה", "תקשורת", "מתח נמוך"],
  "founder": {
    "@type": "Person",
    "name": "דוד משה אביטבול"
  }
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
