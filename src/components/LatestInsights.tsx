'use client';

import Section from './Section';
import styles from './LatestInsights.module.css';
import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';

const LatestInsights = () => {
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <Section id="insights">
            <div className={styles.header}>
                <h2 className={styles.title}>תובנות אחרונות</h2>
                <p className={styles.subtitle}>ידע הוא הכוח שלנו. והשקט הנפשי שלכם.</p>
            </div>

            <div className={styles.grid}>
                {latestPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={post.image}
                                alt={`${post.title} - מאמר בנושא ${post.category} מאת DMA`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                className={styles.image}
                            />
                            <span className={styles.category}>{post.category}</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.cardTitle}>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <span className={styles.readMore}>← קרא עוד</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className={styles.footer}>
                <Link href="/blog" className={styles.viewAll}>
                    לכל המאמרים
                </Link>
            </div>
        </Section>
    );
};

export default LatestInsights;
