import Section from '@/components/Section';
import styles from './page.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'שירותי בית חכם ואבטחה | DMA',
    description: 'פתרונות תקשורת, בית חכם, אבטחה וסייבר. DMA מתמחה בתכנון והקמה של תשתיות מתקדמות לבתים פרטיים ועסקים.',
};

export default function Services() {
    return (
        <main>
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>השירותים שלנו</h1>
                <p className={styles.heroSubtitle}>
                    אנחנו לא מוכרים ציוד. אנחנו מוכרים ארכיטקטורה של שקט.
                </p>
            </Section>

            <Section className={styles.servicesListSection}>
                <div className={styles.container}>
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <h3>1. תשתיות תקשורת</h3>
                            <p>רשתות WiFi מקצועיות, סיבים אופטיים, ארונות תקשורת.</p>
                            <a href="/services/networking" className={styles.readMore}>קרא עוד ←</a>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>2. מערכות אבטחה</h3>
                            <p>מצלמות AI, אזעקות, גלאים היקפיים, מוקד ניטור.</p>
                            <a href="/services/security" className={styles.readMore}>קרא עוד ←</a>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>3. בית חכם</h3>
                            <p>תאורה, מזגנים, וילונות, מולטימדיה - הכל בשליטה אחת.</p>
                            <a href="/services/smart-home" className={styles.readMore}>קרא עוד ←</a>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>4. בקרת כניסה</h3>
                            <p>זיהוי פנים, כרטיסי עובד, אינטרקום חכם, קודים זמניים.</p>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>5. אודיו ווידאו</h3>
                            <p>רמקולים נסתרים, קולנוע ביתי, מערכות ישיבות.</p>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>6. סייבר ופרטיות</h3>
                            <p>הפרדת רשתות, חומות אש, VPN, ייעוץ אבטחת מידע.</p>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>7. פתרונות לעסקים</h3>
                            <p>מערכות רב-סניפיות, ניטור תעשייתי, חדרי ישיבות.</p>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>8. שירות ותחזוקה (SLA)</h3>
                            <p>ניטור 24/7, עדכונים, תמיכה טלפונית ובשטח.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
