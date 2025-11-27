import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import type { BlogPost } from '@/data/blogPosts';
import Section from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';
import { Metadata } from 'next';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

function generateArticleSchema(post: BlogPost) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://dma.co.il${post.image}`,
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://dma.co.il/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "DMA - Intelligence in Infrastructure",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dma.co.il/logo-transparent.webp"
            }
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://dma.co.il/blog/${post.slug}`
        },
        "keywords": post.tags.join(", "),
        "articleSection": post.category,
        "inLanguage": "he-IL"
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | DMA Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `https://dma.co.il/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
            images: [post.image],
        },
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const articleSchema = generateArticleSchema(post);

    const breadcrumbItems = [
        { label: 'דף הבית', href: '/' },
        { label: 'בלוג', href: '/blog' },
        { label: post.title }
    ];

    return (
        <main className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Breadcrumbs items={breadcrumbItems} />
            <Section variant="hero" className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.category}>{post.category}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.meta}>
                        <span>{post.date}</span>
                        <span className={styles.separator}>•</span>
                        <span>{post.author}</span>
                    </div>
                </div>
            </Section>

            <article className={styles.article}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={post.image}
                        alt={`${post.title} - תמונה ראשית למאמר בנושא ${post.category}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        className={styles.image}
                        priority
                    />
                </div>

                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className={styles.tags}>
                    {post.tags.map(tag => (
                        <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                </div>

                {post.relatedServices && (
                    <div className={styles.relatedServices}>
                        <h3>שירותים קשורים:</h3>
                        <div className={styles.relatedLinks}>
                            {post.relatedServices.map((service, index) => (
                                <Link key={index} href={service.url} className={styles.relatedLink}>
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.relatedPosts}>
                    <h3>מאמרים נוספים שיעניינו אתכם</h3>
                    <div className={styles.relatedPostsGrid}>
                        {blogPosts
                            .filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
                            .slice(0, 3)
                            .map(relatedPost => (
                                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className={styles.relatedPostCard}>
                                    <Image
                                        src={relatedPost.image}
                                        alt={`${relatedPost.title} - מאמר קשור בנושא ${relatedPost.category}`}
                                        width={300}
                                        height={180}
                                        className={styles.relatedPostImage}
                                    />
                                    <div className={styles.relatedPostContent}>
                                        <span className={styles.relatedPostCategory}>{relatedPost.category}</span>
                                        <h4>{relatedPost.title}</h4>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>

                <div className={styles.navigation}>
                    <Link href="/blog" className={styles.backButton}>
                        חזרה לבלוג →
                    </Link>
                    <Link href="/contact" className={styles.contactButton}>
                        התייעץ עם דוד משה על הנושא
                    </Link>
                </div>
            </article>
        </main>
    );
}
