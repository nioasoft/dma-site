'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/logo-transparent.webp"
                                alt="DMA - מתח נמוך, אבטחה ותשתיות תקשורת"
                                width={120}
                                height={48}
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.tagline}>Architecture of Peace of Mind.</p>
                        <div className={styles.social}>
                            {/* Social icons can go here */}
                        </div>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3>שירותים</h3>
                        <Link href="/services/consulting">ייעוץ ותכנון</Link>
                        <Link href="/services/security">אבטחה ומיגון</Link>
                        <Link href="/services/networking">תשתיות תקשורת</Link>
                        <Link href="/services/access-control">בקרת כניסה</Link>
                        <Link href="/services/audio-video">אודיו וידאו</Link>
                        <Link href="/services/cyber">סייבר ופרטיות</Link>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3>החברה</h3>
                        <Link href="/about">אודות DMA</Link>
                        <Link href="/testimonials">לקוחות ממליצים</Link>
                        <Link href="/blog">בלוג ומאמרים</Link>
                        <Link href="/faq">שאלות נפוצות</Link>
                        <Link href="/process">תהליך העבודה</Link>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3>מדריכים</h3>
                        <Link href="/guides/knx-vs-control4">KNX vs Control4</Link>
                        <Link href="/contact">צור קשר</Link>
                        <Link href="/privacy">מדיניות פרטיות</Link>
                        <Link href="/terms">תנאי שימוש</Link>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.legalLinks}>
                        <p>© {new Date().getFullYear()} DMA. All rights reserved.</p>
                    </div>
                    <button
                        className={styles.shareButton}
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: 'DMA - Intelligence in Infrastructure',
                                    text: 'Check out DMA - Architecture of Peace of Mind',
                                    url: window.location.href,
                                });
                            } else {
                                navigator.clipboard.writeText(window.location.href);
                                alert('כתובת האתר הועתקה ללוח');
                            }
                        }}
                    >
                        שתף את האתר
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
