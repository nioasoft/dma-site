import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import Section from '@/components/Section';
import styles from './page.module.css';
import { Metadata } from 'next';

interface Props {
    params: Promise<{
        slug: string;
    }>;
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
        openGraph: {
            title: post.title,
            description: post.excerpt,
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

    return (
        <main className={styles.container}>
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
                        alt={post.title}
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

                <div className={styles.navigation}>
                    <Link href="/blog" className={styles.backButton}>
                        ← חזרה לבלוג
                    </Link>
                    <Link href="/contact" className={styles.contactButton}>
                        התייעץ עם משה על הנושא
                    </Link>
                </div>
            </article>
        </main>
    );
}
