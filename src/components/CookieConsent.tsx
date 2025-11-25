'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for animation
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        // Here you would typically initialize analytics
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={`${styles.banner} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>
                        אתר זה משתמש ב"עוגיות" (Cookies) לצורך שיפור חווית הגלישה וניתוח סטטיסטי.
                        המשך הגלישה באתר מהווה הסכמה לשימוש זה. למידע נוסף ניתן לעיין ב
                        <Link href="/privacy">מדיניות הפרטיות</Link>.
                    </p>
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleDecline} className={`${styles.button} ${styles.declineButton}`}>
                        רק הכרחיות
                    </button>
                    <button onClick={handleAccept} className={`${styles.button} ${styles.acceptButton}`}>
                        אני מסכים
                    </button>
                </div>
            </div>
        </div>
    );
}
