import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies, getCategoryLabel, getServiceLabel, getAreaLabel } from '@/data/caseStudies';
import type { CaseStudy } from '@/data/caseStudies';
import Section from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';
import { Metadata } from 'next';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

function generateCaseStudySchema(caseStudy: CaseStudy) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": caseStudy.title,
        "description": caseStudy.subtitle,
        "image": `https://dma247.net${caseStudy.image}`,
        "author": {
            "@type": "Organization",
            "name": "DMA - Intelligence in Infrastructure",
            "url": "https://dma247.net"
        },
        "publisher": {
            "@type": "Organization",
            "name": "DMA - Intelligence in Infrastructure",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dma247.net/logo-transparent.webp"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://dma247.net/case-studies/${caseStudy.slug}`
        },
        "keywords": caseStudy.keywords.join(", "),
        "articleSection": "Case Studies",
        "inLanguage": "he-IL",
        "about": {
            "@type": "Thing",
            "name": caseStudy.services.map(s => getServiceLabel(s)).join(", ")
        },
        "locationCreated": {
            "@type": "Place",
            "name": caseStudy.location
        }
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = caseStudies.find((cs) => cs.slug === slug);

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found',
        };
    }

    const servicesText = caseStudy.services.map(s => getServiceLabel(s)).join(', ');

    return {
        title: `${caseStudy.title} | פרויקט ${servicesText} ${caseStudy.location} | DMA`,
        description: `${caseStudy.subtitle}. ${caseStudy.results[0]}. פרויקט ${servicesText} ב${caseStudy.location}.`,
        alternates: {
            canonical: `https://dma247.net/case-studies/${caseStudy.slug}`,
        },
        keywords: caseStudy.keywords,
        openGraph: {
            title: caseStudy.title,
            description: caseStudy.subtitle,
            type: 'article',
            images: [caseStudy.image],
            locale: 'he_IL',
        },
    };
}

export async function generateStaticParams() {
    return caseStudies.map((caseStudy) => ({
        slug: caseStudy.slug,
    }));
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const caseStudy = caseStudies.find((cs) => cs.slug === slug);

    if (!caseStudy) {
        notFound();
    }

    const schema = generateCaseStudySchema(caseStudy);

    const breadcrumbItems = [
        { label: 'דף הבית', href: '/' },
        { label: 'פרויקטים', href: '/case-studies' },
        { label: caseStudy.title }
    ];

    // Find related case studies (same services or same area)
    const relatedCaseStudies = caseStudies
        .filter(cs =>
            cs.slug !== caseStudy.slug &&
            (cs.services.some(s => caseStudy.services.includes(s)) || cs.area === caseStudy.area)
        )
        .slice(0, 3);

    return (
        <main className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <Breadcrumbs items={breadcrumbItems} />

            <Section variant="hero" className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadges}>
                        <span className={styles.location}>{caseStudy.location}</span>
                        <span className={styles.category}>{getCategoryLabel(caseStudy.category)}</span>
                    </div>
                    <h1 className={styles.title}>{caseStudy.title}</h1>
                    <p className={styles.subtitle}>{caseStudy.subtitle}</p>
                    <div className={styles.serviceTags}>
                        {caseStudy.services.map((service) => (
                            <span key={service} className={styles.serviceTag}>
                                {getServiceLabel(service)}
                            </span>
                        ))}
                    </div>
                </div>
            </Section>

            <article className={styles.article}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={caseStudy.image}
                        alt={`${caseStudy.title} - פרויקט ${caseStudy.services.map(s => getServiceLabel(s)).join(' ו')} ב${caseStudy.location}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                        className={styles.image}
                        priority
                    />
                </div>

                <div className={styles.storyContent}>
                    <div className={styles.storySection}>
                        <h2>האתגר</h2>
                        <div className={styles.challengeText}>
                            {caseStudy.challenge.split('\n\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className={styles.storySection}>
                        <h2>הפתרון של DMA</h2>
                        <div className={styles.solutionText}>
                            {caseStudy.solution.split('\n\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className={styles.storySection}>
                        <h2>הטכנולוגיה</h2>
                        <ul className={styles.techList}>
                            {caseStudy.technology.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.storySection}>
                        <h2>התוצאות</h2>
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

                    <div className={styles.tags}>
                        {caseStudy.tags.map(tag => (
                            <span key={tag} className={styles.tag}>#{tag}</span>
                        ))}
                    </div>

                    <div className={styles.relatedServices}>
                        <h3>שירותים קשורים:</h3>
                        <div className={styles.relatedLinks}>
                            {caseStudy.relatedServices.map((service, index) => (
                                <Link key={index} href={service.url} className={styles.relatedLink}>
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {relatedCaseStudies.length > 0 && (
                    <div className={styles.relatedCaseStudies}>
                        <h3>פרויקטים נוספים שיעניינו אתכם</h3>
                        <div className={styles.relatedGrid}>
                            {relatedCaseStudies.map(related => (
                                <Link key={related.slug} href={`/case-studies/${related.slug}`} className={styles.relatedCard}>
                                    <Image
                                        src={related.image}
                                        alt={`${related.title} - פרויקט קשור`}
                                        width={300}
                                        height={180}
                                        className={styles.relatedImage}
                                    />
                                    <div className={styles.relatedContent}>
                                        <span className={styles.relatedLocation}>{related.location}</span>
                                        <h4>{related.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.navigation}>
                    <Link href="/case-studies" className={styles.backButton}>
                        חזרה לכל הפרויקטים →
                    </Link>
                    <Link href="/contact" className={styles.contactButton}>
                        יש לכם פרויקט דומה? דברו איתנו
                    </Link>
                </div>
            </article>
        </main>
    );
}
