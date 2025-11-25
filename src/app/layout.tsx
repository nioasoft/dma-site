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
  title: {
    template: '%s | DMA - Intelligence in Infrastructure',
    default: 'DMA - Intelligence in Infrastructure',
  },
  description: "Beyond technology. Architecture of peace of mind. DMA creates smart, secure environments for the business sector and luxury estates.",
  keywords: ['Low Voltage', 'Smart Home', 'Security', 'Network', 'DMA', 'Israel', 'תקשורת', 'בית חכם', 'אבטחה', 'מצלמות'],
  authors: [{ name: 'David Moshe Abitbol' }],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://dma.co.il',
    siteName: 'DMA',
    title: 'DMA - Intelligence in Infrastructure',
    description: 'פתרונות מתח נמוך, תקשורת ומיגון למי שלא מתפשר על בינוניות.',
    images: [
      {
        url: '/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'DMA Hero Image',
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

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${assistant.variable}`}>
        <Header />
        {children}
        <Footer />
        <FloatingBanner />
      </body>
    </html>
  );
}
