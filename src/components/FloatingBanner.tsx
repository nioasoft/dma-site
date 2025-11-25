'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './FloatingBanner.module.css';

const FloatingBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000); // Show after 10 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible || pathname === '/contact') return null;

    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <p className={styles.text}>בונים או משפצים? אל תסגרו את הקירות לפני שהתייעצתם איתנו.</p>
                <Link href="/contact" className={styles.button}>
                    לבדיקת תוכניות חינם
                </Link>
                <button onClick={() => setIsVisible(false)} className={styles.close}>×</button>
            </div>
        </div>
    );
};

export default FloatingBanner;
