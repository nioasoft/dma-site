import Section from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import styles from '../smart-home/page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ייעוץ ותכנון מערכות מתח נמוך | DMA',
    description: 'ייעוץ מקצועי ותכנון הנדסי של מערכות מתח נמוך: תקשורת, אבטחה, בקרת כניסה ואודיו-וידאו. תכנון מותאם לפרויקט שלכם.',
    alternates: {
        canonical: 'https://dma247.net/services/consulting',
    },
};

const breadcrumbItems = [
    { label: 'דף הבית', href: '/' },
    { label: 'שירותים', href: '/services' },
    { label: 'ייעוץ ותכנון' }
];

export default function Consulting() {
    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>ייעוץ ותכנון מערכות מתח נמוך</h1>
                <p className={styles.heroSubtitle}>
                    התכנון הנכון בהתחלה חוסך כאבי ראש בהמשך. אנחנו מתכננים - אתם נהנים.
                </p>
            </Section>

            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <h2>למה תכנון מקצועי חיוני?</h2>
                    <p>
                        מערכות מתח נמוך דורשות תכנון מוקדם - הרבה לפני שמתחילים לבנות.
                        שגיאות בשלב התכנון גוררות עלויות כפולות ומשולשות בהמשך:
                        פריצת קירות, החלפת כבלים, וציוד שלא מתאים.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>סקר צרכים</h3>
                            <ul>
                                <li>פגישת היכרות להבנת הצרכים והעדפות</li>
                                <li>ניתוח שטח וזיהוי אתגרים פוטנציאליים</li>
                                <li>הגדרת סדרי עדיפויות ותקציב</li>
                                <li>המלצה על פתרונות מותאמים</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>תכנון הנדסי</h3>
                            <ul>
                                <li>שרטוטי CAD מפורטים לקבלן החשמל</li>
                                <li>מיקום מדויק של כל נקודה ושקע</li>
                                <li>תכנון נתיבי כבלים ותעלות</li>
                                <li>מפרט טכני מלא</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>תיאום עם גורמים</h3>
                            <ul>
                                <li>עבודה צמודה עם האדריכל והמעצב</li>
                                <li>תיאום עם קבלן החשמל והבנייה</li>
                                <li>פגישות באתר בשלבים קריטיים</li>
                                <li>בקרת איכות שוטפת</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>ליווי פרויקט</h3>
                            <ul>
                                <li>פיקוח על ביצוע התשתיות</li>
                                <li>בדיקות ביניים לאורך הדרך</li>
                                <li>תיעוד מלא של כל המערכות</li>
                                <li>מסירה מסודרת עם הדרכה</li>
                            </ul>
                        </div>
                    </div>

                    <h2>תחומי התמחות</h2>
                    <ul className={styles.brandsList}>
                        <li><strong>תקשורת</strong> - רשתות WiFi, סיבים אופטיים, כבילה מובנית</li>
                        <li><strong>אבטחה</strong> - מצלמות, אזעקות, אבטחה היקפית</li>
                        <li><strong>בקרת כניסה</strong> - אינטרקום, מנעולים חכמים, זיהוי פנים</li>
                        <li><strong>אודיו-וידאו</strong> - רמקולים נסתרים, קולנוע ביתי, חדרי ישיבות</li>
                        <li><strong>חשמל חכם</strong> - תאורה, וילונות, מזגנים</li>
                    </ul>

                    <h2>למה DMA?</h2>
                    <ul className={styles.whyUsList}>
                        <li>ניסיון של מעל 15 שנה בתכנון מערכות מתח נמוך</li>
                        <li>תכנון מותאם אישית - לא "פתרון מדף"</li>
                        <li>עבודה עם האדריכלים והמעצבים המובילים בישראל</li>
                        <li>ליווי צמוד מהתכנון ועד המסירה</li>
                    </ul>

                    <div className={styles.guideLink}>
                        <p>רוצים לראות דוגמאות?</p>
                        <Link href="/testimonials">
                            ← צפו בפרויקטים שביצענו
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
