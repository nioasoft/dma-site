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
  metadataBase: new URL('https://dma.co.il'),
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
    url: 'https://dma.co.il',
    siteName: 'DMA - Intelligence in Infrastructure',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DMA - Intelligence in Infrastructure',
      },
    ],
  },
  icons: {
    icon: '/icon.svg',
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DMA - Intelligence in Infrastructure",
  "description": "תכנון וביצוע מערכות מתח נמוך, תקשורת ומיגון למגזר העסקי ולבתי יוקרה",
  "url": "https://dma.co.il",
  "logo": "https://dma.co.il/logo-transparent.webp",
  "image": "https://dma.co.il/hero-bg.webp",
  "telephone": "*5555",
  "email": "office@dma.co.il",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${heebo.variable} ${assistant.variable}`}>
        <Header />
        <FloatingBanner />
        {children}
        <WhatsAppButton />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
