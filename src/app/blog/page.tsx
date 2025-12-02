import Section from '@/components/Section';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'מרכז הידע | מתח נמוך, אבטחה ותקשורת | DMA',
    description: 'מאמרים, מדריכים וחידושים מעולם המתח הנמוך, האבטחה והתקשורת.',
};

export default function Blog() {
    return (
        <main>
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>Intelligence Center</h1>
                <p className={styles.heroSubtitle}>
                    תובנות, חידושים ומדריכים מעולם המתח הנמוך, האבטחה והתקשורת.
                </p>
            </Section>

            <Section>
                <div className={styles.grid}>
                    {blogPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={post.image}
                                    alt={`${post.title} - מאמר בנושא ${post.category} מאת DMA`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={styles.image}
                                />
                                <span className={styles.category}>{post.category}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <span className={styles.readMore}>← קרא עוד</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    );
}
