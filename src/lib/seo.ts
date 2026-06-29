import type { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dma247.net';
export const SITE_NAME = 'DMA - Intelligence in Infrastructure';
export const BRAND_SHORT_NAME = 'DMA';
export const DEFAULT_OG_IMAGE = '/og-image.png';

export function absoluteUrl(path = '/'): string {
    return new URL(path, SITE_URL).toString();
}

export function canonicalUrl(path = '/'): string {
    const url = new URL(path, SITE_URL);
    url.hash = '';
    url.search = '';
    if (url.pathname !== '/' && url.pathname.endsWith('/')) {
        url.pathname = url.pathname.slice(0, -1);
    }
    return url.pathname === '/' ? url.origin : url.toString();
}

type PageMetadataOptions = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    image?: string;
    type?: 'website' | 'article';
};

export function createPageMetadata({
    title,
    description,
    path,
    keywords,
    image = DEFAULT_OG_IMAGE,
    type = 'website',
}: PageMetadataOptions): Metadata {
    const url = canonicalUrl(path);
    const imageUrl = absoluteUrl(image);

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            locale: 'he_IL',
            type,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${BRAND_SHORT_NAME} - פתרונות מתח נמוך, תקשורת ואבטחה`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        },
    };
}

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: BRAND_SHORT_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/logo-transparent.webp'),
    image: absoluteUrl('/og-image.png'),
    email: 'moshe@dma247.net',
    telephone: '+972506883162',
    founder: {
        '@type': 'Person',
        name: 'דוד משה אביטבול',
    },
    sameAs: [
        'https://br7news.co.il/s/6j5',
        'https://build-in.net/dma/',
    ],
};

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description: 'תכנון וביצוע מערכות מתח נמוך, תקשורת ומיגון למגזר העסקי ולבתי יוקרה',
    url: SITE_URL,
    logo: absoluteUrl('/logo-transparent.webp'),
    image: absoluteUrl('/hero-bg.webp'),
    email: 'moshe@dma247.net',
    telephone: '+972506883162',
    priceRange: '$$$$',
    address: {
        '@type': 'PostalAddress',
        addressRegion: 'Southern District',
        addressCountry: 'IL',
    },
    areaServed: [
        { '@type': 'Country', name: 'Israel' },
        { '@type': 'City', name: 'באר שבע' },
        { '@type': 'City', name: 'להבים' },
        { '@type': 'City', name: 'עומר' },
        { '@type': 'City', name: 'מיתר' },
        { '@type': 'City', name: 'כרמית' },
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '08:00',
            closes: '18:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Friday',
            opens: '08:00',
            closes: '13:00',
        },
    ],
    serviceType: ['מתח נמוך', 'אבטחה', 'תקשורת', 'בקרת כניסה', 'אודיו וידאו', 'סייבר ופרטיות'],
    parentOrganization: {
        '@id': `${SITE_URL}/#organization`,
    },
};

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: 'he-IL',
    publisher: {
        '@id': `${SITE_URL}/#organization`,
    },
};

type BreadcrumbItem = {
    label: string;
    href?: string;
};

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: item.href ? canonicalUrl(item.href) : undefined,
        })),
    };
}

type ServiceSchemaOptions = {
    name: string;
    description: string;
    path: string;
    serviceType: string | string[];
    image?: string;
};

export function createServiceSchema({
    name,
    description,
    path,
    serviceType,
    image = DEFAULT_OG_IMAGE,
}: ServiceSchemaOptions) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${canonicalUrl(path)}#service`,
        name,
        description,
        serviceType,
        url: canonicalUrl(path),
        image: absoluteUrl(image),
        provider: {
            '@id': `${SITE_URL}/#localbusiness`,
        },
        areaServed: localBusinessSchema.areaServed,
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: canonicalUrl(path),
            servicePhone: '+972506883162',
        },
    };
}

export function createArticleSchema({
    title,
    description,
    path,
    image,
    author,
    datePublished,
    dateModified,
    keywords,
    articleSection,
}: {
    title: string;
    description: string;
    path: string;
    image: string;
    author: string;
    datePublished?: string;
    dateModified?: string;
    keywords: string[];
    articleSection: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: absoluteUrl(image),
        author: {
            '@type': 'Person',
            name: author,
            url: canonicalUrl('/about'),
        },
        publisher: {
            '@id': `${SITE_URL}/#organization`,
        },
        datePublished,
        dateModified: dateModified ?? datePublished,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl(path),
        },
        keywords: keywords.join(', '),
        articleSection,
        inLanguage: 'he-IL',
    };
}
