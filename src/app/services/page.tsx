import Section from '@/components/Section';
import styles from './page.module.css';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'שירותי בית חכם ואבטחה | DMA',
    description: 'פתרונות תקשורת, בית חכם, אבטחה וסייבר. DMA מתמחה בתכנון והקמה של תשתיות מתקדמות לבתים פרטיים ועסקים.',
    alternates: {
        canonical: 'https://dma.co.il/services',
    },
};

export default function Services() {
    return (
        <main>
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>שירותי בית חכם, אבטחה ותשתיות מתקדמות</h1>
                <p className={styles.heroSubtitle}>
                    אנחנו לא מוכרים ציוד. אנחנו מוכרים ארכיטקטורה של שקט נפשי - תכנון, התקנה ותחזוקה של מערכות מתח נמוך ברמה הגבוהה ביותר.
                </p>
            </Section>

            <Section className={styles.servicesListSection}>
                <div className={styles.container}>
                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <h3>תשתיות תקשורת</h3>
                            <p>
                                רשתות WiFi מקצועיות ברמת Enterprise עם נקודות גישה מפוזרות וניהול מרכזי.
                                תשתית סיבים אופטיים פנים-מבניים עד 10Gbps, ארונות תקשורת ממוזגים ומתויגים,
                                וכבילה CAT6A/CAT7 לכל נקודה. מתמחים בהשחלות מורכבות בתנאים קשים - קירות בטון,
                                תקרות סגורות ומבנים קיימים. אנחנו עובדים עם Ubiquiti, Ruckus, Cisco ו-Aruba.
                            </p>
                            <Link href="/services/networking" className={styles.readMore}>
                                ← קרא עוד על תשתיות רשת
                            </Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>מערכות אבטחה</h3>
                            <p>
                                מצלמות עם אנליטיקה מבוססת AI לזיהוי אדם/רכב בזמן אמת וצמצום 99% מהתראות השווא.
                                אבטחה היקפית עם גלאים תרמיים, מערכות כריזה והרתעה אוטומטיות, וחיבור למוקד ניטור 24/7.
                                ציוד תעשייתי בלבד: Axis, Hikvision Pro, Hanwha ו-Bosch.
                            </p>
                            <Link href="/services/security" className={styles.readMore}>
                                ← קרא עוד על מערכות אבטחה
                            </Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>בית חכם</h3>
                            <p>
                                מערכת אחת אינטגרטיבית לשליטה בתאורה, מזגנים, וילונות ומולטימדיה מממשק אחד פשוט.
                                תרחישים מותאמים אישית, תאורה ביו-דינמית, ואוטומציה שחוסכת עד 30% בחשמל.
                                אנחנו מתקינים KNX, Control4, Loxone ו-Crestron בהתאמה לצרכי הפרויקט.
                            </p>
                            <Link href="/services/smart-home" className={styles.readMore}>
                                ← קרא עוד על בית חכם
                            </Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>בקרת כניסה</h3>
                            <p>
                                פתרונות בקרת כניסה מתקדמים הכוללים זיהוי פנים, כרטיסי עובד חכמים, ואינטרקום וידאו HD.
                                ניהול קודים זמניים לאורחים וקבלנים, אינטגרציה עם מערכת האבטחה והבית החכם,
                                וצפייה וניהול מרחוק מכל מקום בעולם דרך האפליקציה.
                            </p>
                            <Link href="/services/access-control" className={styles.readMore}>
                                ← קרא עוד על בקרת כניסה
                            </Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>אודיו ווידאו</h3>
                            <p>
                                מערכות רמקולים נסתרים בתקרה ובקירות לחוויית שמע נקייה ללא ציוד גלוי.
                                קולנוע ביתי עם מסכים מתקפלים, מקרנים 4K ומערכות סאונד סראונד.
                                פתרונות Multi-Room להזרמת מוזיקה לכל הבית, ומערכות ישיבות מקצועיות לעסקים.
                            </p>
                            <Link href="/services/audio-video" className={styles.readMore}>
                                ← קרא עוד על מערכות אודיו וידאו
                            </Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>סייבר ופרטיות</h3>
                            <p>
                                הגנה על הרשת הביתית והעסקית מאיומי סייבר: הפרדת רשתות (VLAN), חומות אש מתקדמות,
                                וחיבור VPN מאובטח לגישה מרחוק. ייעוץ אבטחת מידע, בידוד מצלמות ומכשירי IoT,
                                והקשחת המערכות מפני חדירה - כי הפרטיות שלכם היא עדיפות עליונה.
                            </p>
                            <Link href="/services/cyber" className={styles.readMore}>
                                ← קרא עוד על סייבר ופרטיות
                            </Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>פתרונות לעסקים</h3>
                            <p>
                                מערכות לניהול רב-סניפי ממשק אחד: מצלמות, בקרת כניסה, ואזעקות מכל הסניפים.
                                תשתיות לחדרי ישיבות חכמים עם מסכים, מערכות ועידת וידאו, ומיקרופונים מקצועיים.
                                פתרונות ניטור תעשייתי לבקרת איכות ובטיחות בקווי ייצור ומחסנים.
                            </p>
                        </div>

                        <div className={styles.serviceCard}>
                            <h3>שירות ותחזוקה (SLA)</h3>
                            <p>
                                הסכמי שירות מקיפים עם זמן תגובה מהיר וניטור פרואקטיבי של המערכות 24/7.
                                עדכוני תוכנה ופירמוור שוטפים, תמיכה טלפונית מיידית, וביקורי תחזוקה מונעת.
                                גיבוי הגדרות, בדיקות תקופתיות, והבטחה שהמערכות תמיד יעבדו כשצריך אותן.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
