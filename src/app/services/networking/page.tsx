import Section from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'תשתיות תקשורת ורשת WiFi מקצועית | DMA',
    description: 'תשתיות רשת מתקדמות: סיבים אופטיים, WiFi Enterprise, וארונות תקשורת מדוגמים. Ubiquiti, Ruckus, Cisco ו-Aruba.',
    alternates: {
        canonical: 'https://dma247.net/services/networking',
    },
};

const breadcrumbItems = [
    { label: 'דף הבית', href: '/' },
    { label: 'שירותים', href: '/services' },
    { label: 'תשתיות תקשורת' }
];

export default function Networking() {
    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>תשתיות רשת ו-WiFi מקצועי לבית ולעסק</h1>
                <p className={styles.heroSubtitle}>
                    הרשת היא החמצן של הבית המודרני. אל תתפשרו על פחות ממושלם.
                </p>
            </Section>

            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <Image
                        src="/images/services/networking/wifi-enterprise.webp"
                        alt="נקודת גישה WiFi מקצועית מותקנת בתקרה"
                        width={1260}
                        height={540}
                        className={styles.sectionImage}
                        priority
                    />

                    <h2>הרשת היא החמצן של הבית המודרני</h2>
                    <p>
                        בעידן שבו הכל מחובר - טלוויזיות, מצלמות, מזגנים, משחקים, עבודה מהבית - רשת חלשה היא צוואר בקבוק שמשתק את הבית.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>WiFi מקצועי (Enterprise-Grade)</h3>
                            <ul>
                                <li>נקודות גישה מפוזרות בבית (לא ראוטר אחד!)</li>
                                <li>בקר מרכזי לניהול התעבורה</li>
                                <li>Roaming חלק - לעבור בין אנטנות בלי ניתוקים</li>
                                <li>תמיכה ב-WiFi 6E / WiFi 7</li>
                                <li>כיסוי מלא כולל ממ"ד, מרתף, חצר</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>סיבים אופטיים פנים-מבנים</h3>
                            <ul>
                                <li>קישוריות עד 10Gbps</li>
                                <li>ללא הפרעות חשמליות</li>
                                <li>הוכחת עתיד ל-20+ שנה</li>
                                <li>Fiber to the Room לבתים גדולים</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>ארונות תקשורת</h3>
                            <ul>
                                <li>ארונות ייעודיים ממוזגים ומאווררים</li>
                                <li>כבילה מסודרת ומתויגת</li>
                                <li>מקום לגדילה עתידית</li>
                                <li>נראות מקצועית (כי גם מה שבפנים חשוב)</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>תשתיות פסיביות</h3>
                            <ul>
                                <li>כבלים CAT6A / CAT7 מסוכנים</li>
                                <li>צנרת רחבה להעברת כבלים עתידיים</li>
                                <li>נקודות רשת בכל מיקום אסטרטגי</li>
                            </ul>
                        </div>
                    </div>

                    <Image
                        src="/images/services/networking/network-cabinet.webp"
                        alt="ארון תקשורת מסודר עם כבילה מקצועית"
                        width={1260}
                        height={540}
                        className={styles.sectionImage}
                    />

                    <h2>המותגים שאנחנו עובדים איתם</h2>
                    <ul className={styles.brandsList}>
                        <li><strong>Ubiquiti UniFi</strong> - יחס עלות-תועלת מעולה</li>
                        <li><strong>Ruckus</strong> - הכי חזק לסביבות מאתגרות</li>
                        <li><strong>Cisco Meraki</strong> - לעסקים עם דרישות ניהול</li>
                        <li><strong>Aruba</strong> - אמינות ללא פשרות</li>
                    </ul>

                    <Image
                        src="/images/services/networking/cable-installation.webp"
                        alt="השחלת כבלים מקצועית בקירות בטון"
                        width={1260}
                        height={540}
                        className={styles.sectionImage}
                    />

                    <h2>השחלות כבלים מורכבות - המומחיות שלנו</h2>
                    <p>
                        לא כל השחלה היא אותו דבר. כשמדובר בבניינים קיימים, קירות בטון, תקרות גבס סגורות או מבנים היסטוריים - כאן בדיוק מתחיל הידע המקצועי האמיתי.
                    </p>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>אנחנו מתמחים ב:</h3>
                            <ul>
                                <li>השחלות בקירות בטון ובלוקים ללא פגיעה בגמר</li>
                                <li>העברת כבלים בתקרות אקוסטיות וגבס סגורות</li>
                                <li>מעבר בין קומות במבנים קיימים</li>
                                <li>עבודה במבנים משומרים עם מגבלות אדריכליות</li>
                                <li>השחלות ארוכות במרחקים של עשרות מטרים</li>
                                <li>פתרונות יצירתיים כשאין צנרת קיימת</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>למה זה משנה?</h3>
                            <p>
                                קבלן רגיל יגיד "אי אפשר". אנחנו נמצא דרך. שנים של ניסיון בשטח לימדו אותנו שכמעט תמיד יש פתרון - צריך רק לדעת איפה לחפש ואיך לבצע נכון.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
