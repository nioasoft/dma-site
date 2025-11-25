import Section from '@/components/Section';
import styles from './page.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Solutions | DMA',
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

            <Section id="network">
                <div className={styles.serviceGrid}>
                    <div className={styles.serviceContent}>
                        <h2>פתרונות תקשורת ותשתיות</h2>
                        <p>
                            בעידן שבו הכל מחובר ל-Cloud, הרשת היא החמצן של הבית והעסק. DMA מספקת תכנון, פריסה והקמה של תשתיות תקשורת פסיביות ואקטיביות. אנחנו לא מאמינים בפתרונות מדף. כל פרויקט מתחיל במיפוי אדריכלי, בדיקת הנחתות בקירות, והתאמת רוחב הפס לדרישות העתידיות שלכם.
                        </p>
                        <ul className={styles.featureList}>
                            <li>פריסת סיבים אופטיים (Fiber To The Room/Desk)</li>
                            <li>ארונות תקשורת מדוגמים וממוזגים</li>
                            <li>רשתות WIFI בתקן WIFI-7 המתקדם ביותר</li>
                            <li>בדיקות עומסים והסמכת רשת</li>
                        </ul>
                    </div>
                    <div className={styles.serviceImageContainer}>
                        {/* Placeholder for image - using CSS background in module */}
                        <div className={`${styles.serviceImage} ${styles.networkImage}`} />
                    </div>
                </div>
            </Section>

            <Section variant="dark" id="intelligence">
                <div className={`${styles.serviceGrid} ${styles.reverse}`}>
                    <div className={styles.serviceContent}>
                        <h2>מודיעין עסקי ופתרונות דיסקרטיים</h2>
                        <p>
                            ישנם מצבים הדורשים רגישות מיוחדת. בין אם מדובר בחשד למעילה בעסק, צורך בפיקוח על מטפלים בבית, או הגנה על נכסי קניין רוחני. DMA מביאה לשולחן ניסיון מבצעי וטכנולוגיה זעירה שלא ניתנת לגילוי.
                        </p>
                        <p>
                            הגישה שלנו: אנחנו פועלים ב'צללים' כדי שאתם תוכלו לראות את האור. הציוד שלנו מוטמע בתוך אלמנטים יומיומיים, באיכות שידור 4K, עם גישה מרחוק מוצפנת ומאובטחת. אנחנו מספקים לא רק את הציוד, אלא את הייעוץ האסטרטגי: איפה למקם, מה חוקי, ואיך להפיק את המידע הדרוש.
                        </p>
                    </div>
                    <div className={styles.serviceImageContainer}>
                        <div className={`${styles.serviceImage} ${styles.privacyImage}`} />
                    </div>
                </div>
            </Section>
        </main>
    );
}
