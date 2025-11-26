import Section from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'מערכות אבטחה מתקדמות | DMA',
    description: 'פתרונות אבטחה מתקדמים: מצלמות AI, אבטחה היקפית, ומוקד ניטור 24/7. Axis, Hikvision Pro, Hanwha ו-Bosch.',
    alternates: {
        canonical: 'https://dma.co.il/services/security',
    },
};

const breadcrumbItems = [
    { label: 'דף הבית', href: '/' },
    { label: 'שירותים', href: '/services' },
    { label: 'אבטחה' }
];

export default function Security() {
    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>מערכות אבטחה מתקדמות עם AI</h1>
                <p className={styles.heroSubtitle}>
                    אבטחה שמונעת, לא רק מתעדת. שקט נפשי אמיתי.
                </p>
            </Section>

            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <h2>אבטחה שמונעת, לא רק מתעדת</h2>
                    <p>
                        רוב מערכות האבטחה הן "היסטוריונים" - הן מקליטות מה קרה ומציגות לכם את הסרטון למחרת בבוקר. המערכות שלנו הן "שומרי ראש" - הן מזהות, מתריעות ומרתיעות בזמן אמת, עוד לפני שהפורץ נגע בדלת.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>מצלמות עם אנליטיקה (AI)</h3>
                            <ul>
                                <li>זיהוי אוטומטי של אדם/רכב/בעל חיים</li>
                                <li>הפחתת 99% מהתראות השווא</li>
                                <li>התראות בזמן אמת לנייד עם וידאו חי</li>
                                <li>צילום בחושך מוחלט (אינפרא-אדום)</li>
                                <li>רזולוציות עד 4K</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>אבטחה היקפית</h3>
                            <ul>
                                <li>גלאים תרמיים לזיהוי חדירה לגדר</li>
                                <li>בריחי קרניים אינפרא-אדום</li>
                                <li>מערכות כריזה והרתעה אוטומטיות</li>
                                <li>תאורת אבטחה חכמה</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>מוקד ניטור</h3>
                            <ul>
                                <li>חיבור למוקד 24/7</li>
                                <li>זמני תגובה מהירים</li>
                                <li>אימות תמונה לפני הפעלת משטרה</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>אזעקה</h3>
                            <ul>
                                <li>גלאי נפח/תנועה לפנים הבית</li>
                                <li>גלאי פריצה לדלתות וחלונות</li>
                                <li>כפתורי מצוקה ופאניקה</li>
                                <li>בקרה מלאה מהנייד</li>
                            </ul>
                        </div>
                    </div>

                    <h2>יתרונות ייחודיים</h2>
                    <ul className={styles.whyUsList}>
                        <li><strong>צביעה מותאמת (RAL)</strong> - מצלמות וגלאים שנצבעים בדיוק בגוון של הקיר/תקרה - אבטחה בלתי נראית.</li>
                        <li><strong>ציוד תעשייתי</strong> - אנחנו לא עובדים עם ציוד סיני זול. רק מותגים מוכחים: Axis, Hikvision Pro, Hanwha, Bosch.</li>
                        <li><strong>סייבר מובנה</strong> - כל מצלמה על רשת מבודדת, גישה מוצפנת, ללא סיסמאות ברירת מחדל.</li>
                    </ul>
                </div>
            </Section>
        </main>
    );
}
