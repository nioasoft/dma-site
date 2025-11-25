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
                                alt="DMA Logo"
                                width={80}
                                height={32}
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.tagline}>Architecture of Peace of Mind.</p>
                    </div>
                    <div className={styles.links}>
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
                        <p>© {new Date().getFullYear()} DMA. All rights reserved.</p>
                    </div>          </div>
            </div>
        </footer >
    );
};

export default Footer;
