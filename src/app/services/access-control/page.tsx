import Section from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import styles from '../smart-home/page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'בקרת כניסה וזיהוי פנים | DMA',
    description: 'מערכות בקרת כניסה מתקדמות: זיהוי פנים ביומטרי, אינטרקום חכם, כרטיסי עובד וקודים זמניים. שליטה מלאה מהנייד.',
    alternates: {
        canonical: 'https://dma.co.il/services/access-control',
    },
};

const breadcrumbItems = [
    { label: 'דף הבית', href: '/' },
    { label: 'שירותים', href: '/services' },
    { label: 'בקרת כניסה' }
];

export default function AccessControl() {
    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>בקרת כניסה וזיהוי ביומטרי</h1>
                <p className={styles.heroSubtitle}>
                    המפתח נשאר בהיסטוריה. הפנים שלכם הן המפתח הכי בטוח בעולם.
                </p>
            </Section>

            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <h2>למה לעבור לבקרת כניסה חכמה?</h2>
                    <p>
                        מפתחות פיזיים הם טכנולוגיה של המאה ה-19. הם הולכים לאיבוד, קל לשכפל אותם,
                        ואין לכם שום דרך לדעת מי באמת נכנס לבית ומתי. עם בקרת כניסה חכמה,
                        אתם מקבלים שליטה מלאה, אבטחה משופרת, ונוחות יומיומית.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>זיהוי פנים תלת-ממדי</h3>
                            <ul>
                                <li>זיהוי מדויק תוך שבריר שנייה</li>
                                <li>עובד גם בחושך מוחלט</li>
                                <li>מזהה גם עם כובע או משקפיים</li>
                                <li>לא ניתן להונות עם תמונה</li>
                                <li>טכנולוגיה מתקדמת יותר מ-FaceID</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>אינטרקום וידאו HD</h3>
                            <ul>
                                <li>צפייה באורחים מכל מקום בעולם</li>
                                <li>שיחה דו-כיוונית באיכות גבוהה</li>
                                <li>הקלטת כל הביקורים</li>
                                <li>אינטגרציה עם מערכת האבטחה</li>
                                <li>פתיחת שער מרחוק מהאפליקציה</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>ניהול גישה לאורחים</h3>
                            <ul>
                                <li>קודים זמניים לאורחים וקבלנים</li>
                                <li>הגבלת שעות גישה למנקה/גנן</li>
                                <li>מפתח דיגיטלי (QR) לנייד</li>
                                <li>יומן רישום מלא של כניסות</li>
                                <li>התראות בזמן אמת לכניסות</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>כרטיסי עובד חכמים</h3>
                            <ul>
                                <li>הרשאות לפי אזורים ושעות</li>
                                <li>דוחות נוכחות אוטומטיים</li>
                                <li>ביטול מיידי לכרטיס שאבד</li>
                                <li>אינטגרציה עם מערכת HR</li>
                            </ul>
                        </div>
                    </div>

                    <h2>המותגים שאנחנו עובדים איתם</h2>
                    <ul className={styles.brandsList}>
                        <li><strong>2N</strong> - אינטרקום IP מהמתקדמים בעולם</li>
                        <li><strong>Hikvision</strong> - זיהוי פנים מדויק</li>
                        <li><strong>Dahua</strong> - פתרונות משולבים</li>
                        <li><strong>Akuvox</strong> - יחס עלות-תועלת מעולה</li>
                    </ul>

                    <h2>למה DMA?</h2>
                    <ul className={styles.whyUsList}>
                        <li>אינטגרציה מלאה עם מערכת האבטחה והבית החכם</li>
                        <li>התקנה אסתטית שמשתלבת בעיצוב</li>
                        <li>הדרכה מקיפה לשימוש יומיומי</li>
                        <li>תמיכה טכנית ושירות מהיר</li>
                    </ul>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/contact" style={{
                            display: 'inline-block',
                            background: 'hsl(var(--color-primary))',
                            color: '#000',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            fontWeight: 700,
                            textDecoration: 'none'
                        }}>
                            קבלו הצעת מחיר לבקרת כניסה
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
