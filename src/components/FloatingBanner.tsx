'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './FloatingBanner.module.css';

const FloatingBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);
    const pathname = usePathname();

    // Show banner after scrolling 30% of the page OR after 10 seconds
    useEffect(() => {
        if (isDismissed) return;

        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 30) {
                setIsVisible(true);
            }
        };

        // Also show after 10 seconds as fallback
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000);

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDismissed]);

    const handleDismiss = useCallback(() => {
        setIsVisible(false);
        setIsDismissed(true);
    }, []);

    if (!isVisible || pathname === '/contact') return null;

    return (
        <div className={styles.banner} role="complementary" aria-label="הצעה מיוחדת">
            <div className={styles.content}>
                <p className={styles.text}>בונים או משפצים? אל תסגרו את הקירות לפני שהתייעצתם איתנו.</p>
                <Link href="/contact" className={styles.button}>
                    לבדיקת תוכניות חינם
                </Link>
                <button
                    onClick={handleDismiss}
                    className={styles.close}
                    aria-label="סגור באנר"
                    type="button"
                >
                    <span aria-hidden="true">×</span>
                </button>
            </div>
        </div>
    );
};

export default FloatingBanner;
