import Section from '@/components/Section';
import Link from 'next/link';
import styles from './page.module.css';
import { caseStudies, getCategoryLabel, getServiceLabel } from '@/data/caseStudies';
import BackToTop from '@/components/BackToTop';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'פרויקטים ותיק עבודות | מתח נמוך ואבטחה באר שבע | DMA',
    description: 'סיפורי התקנות אמיתיים: WiFi לבתים גדולים, מצלמות אבטחה לוילות, בית חכם ועוד. פרויקטים בבאר שבע, להבים, עומר ומיתר.',
    alternates: {
        canonical: 'https://dma247.net/case-studies',
    },
    openGraph: {
        title: 'פרויקטים ותיק עבודות | DMA',
        description: 'סיפורי התקנות אמיתיים מאזור באר שבע והנגב - WiFi, אבטחה, בית חכם ועוד.',
        images: ['/pillars-bg.webp'],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "פרויקטים ותיק עבודות של DMA",
    "description": "סיפורי התקנות אמיתיים של מערכות מתח נמוך, אבטחה ותקשורת בבתים פרטיים ועסקים באזור הדרום",
    "numberOfItems": caseStudies.length,
    "itemListElement": caseStudies.map((cs, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
            "@type": "CreativeWork",
            "name": cs.title,
            "description": cs.subtitle,
            "locationCreated": {
                "@type": "Place",
                "name": cs.location
            }
        }
    }))
};

const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DMA - Intelligence in Infrastructure",
    "description": "התקנת מערכות מתח נמוך, אבטחה ותשתיות תקשורת באזור באר שבע והנגב",
    "areaServed": [
        { "@type": "City", "name": "באר שבע" },
        { "@type": "City", "name": "להבים" },
        { "@type": "City", "name": "עומר" },
        { "@type": "City", "name": "מיתר" },
        { "@type": "City", "name": "כרמית" }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "שירותי מתח נמוך",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "התקנת מצלמות אבטחה" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "תשתיות תקשורת" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "בית חכם" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "בקרת כניסה" } }
        ]
    }
};

export default function CaseStudiesPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
            />

            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>פרויקטים אמיתיים, תוצאות אמיתיות</h1>
                <p className={styles.heroSubtitle}>
                    גלו כיצד DMA פתרה אתגרים טכנולוגיים מורכבים בבתים ועסקים באזור באר שבע, להבים, עומר ומיתר
                </p>
            </Section>

            {/* Projects Grid */}
            <Section id="projects-grid">
                <div className={styles.grid}>
                    {caseStudies.map((caseStudy) => (
                        <Link
                            key={caseStudy.id}
                            href={`#${caseStudy.slug}`}
                            className={styles.card}
                        >
                            <div className={styles.cardImage}>
                                {/* Placeholder for image */}
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.placeholderIcon}>
                                        {caseStudy.services[0] === 'networking' && '🌐'}
                                        {caseStudy.services[0] === 'security' && '🛡️'}
                                        {caseStudy.services[0] === 'smart-home' && '🏠'}
                                        {caseStudy.services[0] === 'access-control' && '🚪'}
                                        {caseStudy.services[0] === 'audio-video' && '🔊'}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.location}>{caseStudy.location}</span>
                                    <span className={styles.category}>{getCategoryLabel(caseStudy.category)}</span>
                                </div>
                                <h2 className={styles.cardTitle}>{caseStudy.title}</h2>
                                <p className={styles.cardSubtitle}>{caseStudy.subtitle}</p>
                                <div className={styles.tags}>
                                    {caseStudy.services.map((service) => (
                                        <span key={service} className={styles.tag}>
                                            {getServiceLabel(service)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Detailed Stories */}
            {caseStudies.map((caseStudy, index) => (
                <div key={caseStudy.id}>
                    <Section
                        variant={index % 2 === 1 ? 'dark' : undefined}
                        id={caseStudy.slug}
                    >
                        <div className={styles.storyContainer}>
                            <div className={styles.storyHeader}>
                                <span className={styles.storyLocation}>{caseStudy.location}</span>
                                <h2 className={styles.storyTitle}>{caseStudy.title}</h2>
                                <p className={styles.storySubtitle}>{caseStudy.subtitle}</p>
                            </div>

                            <div className={styles.storyContent}>
                                <div className={styles.storySection}>
                                    <h3>האתגר</h3>
                                    <div className={styles.challengeText}>
                                        {caseStudy.challenge.split('\n\n').map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.storySection}>
                                    <h3>הפתרון של DMA</h3>
                                    <div className={styles.solutionText}>
                                        {caseStudy.solution.split('\n\n').map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.storySection}>
                                    <h3>הטכנולוגיה</h3>
                                    <ul className={styles.techList}>
                                        {caseStudy.technology.map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.storySection}>
                                    <h3>התוצאות</h3>
                                    <ul className={styles.resultsList}>
                                        {caseStudy.results.map((result, i) => (
                                            <li key={i}>{result}</li>
                                        ))}
                                    </ul>
                                </div>

                                {caseStudy.testimonial && (
                                    <div className={styles.testimonial}>
                                        <blockquote>"{caseStudy.testimonial.quote}"</blockquote>
                                        <cite>- {caseStudy.testimonial.author}</cite>
                                    </div>
                                )}

                                <div className={styles.relatedServices}>
                                    <span className={styles.relatedLabel}>שירותים קשורים:</span>
                                    {caseStudy.relatedServices.map((service) => (
                                        <Link
                                            key={service.url}
                                            href={service.url}
                                            className={styles.relatedLink}
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Back to grid link - appears every 4 stories */}
                    {(index + 1) % 4 === 0 && index !== caseStudies.length - 1 && (
                        <div className={styles.backToGridContainer}>
                            <Link href="#projects-grid" className={styles.backToGridLink}>
                                חזרה לרשימת הפרויקטים
                            </Link>
                        </div>
                    )}
                </div>
            ))}

            {/* CTA Section */}
            <Section variant="dark" className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>יש לכם פרויקט דומה?</h2>
                    <p className={styles.ctaText}>
                        נשמח לשמוע על האתגרים שלכם ולהציע פתרון מותאם.
                        הייעוץ הראשוני ללא עלות וללא התחייבות.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.ctaPrimary}>
                            צרו קשר לייעוץ חינם
                        </Link>
                        <Link href="/process" className={styles.ctaSecondary}>
                            איך אנחנו עובדים
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Areas We Serve */}
            <Section>
                <div className={styles.areasSection}>
                    <h2 className={styles.areasTitle}>אזורי שירות</h2>
                    <p className={styles.areasText}>
                        אנחנו מתמחים בהתקנות מתח נמוך, אבטחה ותשתיות תקשורת באזור הדרום:
                    </p>
                    <div className={styles.areasTags}>
                        <span>באר שבע</span>
                        <span>שכונת כלניות</span>
                        <span>שכונת רמות</span>
                        <span>להבים</span>
                        <span>עומר</span>
                        <span>מיתר</span>
                        <span>כרמית</span>
                        <span>אופקים</span>
                        <span>נתיבות</span>
                        <span>שדרות</span>
                    </div>
                </div>
            </Section>

            <BackToTop />
        </main>
    );
}
