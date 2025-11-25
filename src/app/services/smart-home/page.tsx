import Section from '@/components/Section';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'בית חכם | DMA',
    description: 'מערכות בית חכם יוקרתיות: תאורה, אקלים, וילונות ומולטימדיה בשליטה אחת.',
};

export default function SmartHome() {
    return (
        <main>
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>בית חכם</h1>
                <p className={styles.heroSubtitle}>
                    לא עוד גאדג'טים. מערכת אחת שמנהלת את הבית עבורכם.
                </p>
            </Section>

            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <h2>מה זה בית חכם אמיתי?</h2>
                    <p>
                        בית חכם אמיתי הוא לא אוסף של אפליקציות וגאדג'טים. הוא מערכת אחת אינטגרטיבית שמחברת את כל מערכות הבית - תאורה, מזגנים, וילונות, אבטחה, מולטימדיה - לממשק שליטה אחד פשוט ואינטואיטיבי.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>תאורה חכמה</h3>
                            <ul>
                                <li>שליטה בכל הנורות מכפתור אחד או מהנייד</li>
                                <li>תרחישים מוגדרים מראש ("סרט", "אירוח", "לילה")</li>
                                <li>תאורה ביו-דינמית שמשתנה לפי השעה</li>
                                <li>עמעום חלק ללא הבהובים</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>מזגנים ואקלים</h3>
                            <ul>
                                <li>שליטה ריכוזית בכל מזגני הבית</li>
                                <li>תזמון אוטומטי לפי נוכחות</li>
                                <li>אינטגרציה עם חיישני טמפרטורה</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>וילונות וגגות</h3>
                            <ul>
                                <li>וילונות חשמליים משתלבים בתרחישים</li>
                                <li>פתיחה/סגירה אוטומטית לפי שעה או מזג אוויר</li>
                                <li>הגנה על ריהוט מפני שמש</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>מולטימדיה</h3>
                            <ul>
                                <li>שליטה ריכוזית בכל מסכי הטלוויזיה</li>
                                <li>מערכות סאונד Multi-Room</li>
                                <li>הזרמת מוזיקה לכל הבית</li>
                            </ul>
                        </div>
                    </div>

                    <h2>המערכות שאנחנו עובדים איתן</h2>
                    <ul className={styles.brandsList}>
                        <li><strong>KNX</strong> - הסטנדרט הגרמני, יציב ומוכח</li>
                        <li><strong>Control4</strong> - גמיש, עם ממשק מעולה</li>
                        <li><strong>Loxone</strong> - חסכוני ואמין</li>
                        <li><strong>Crestron</strong> - לפרויקטים מורכבים במיוחד</li>
                    </ul>

                    <h2>למה DMA?</h2>
                    <ul className={styles.whyUsList}>
                        <li>תכנון מותאם אישית, לא "פתרון מדף"</li>
                        <li>התקנה אסתטית ללא פשרות</li>
                        <li>תמיכה שוטפת והסכמי SLA</li>
                        <li>ניסיון של מעל 200 פרויקטים</li>
                    </ul>
                </div>
            </Section>
        </main>
    );
}
