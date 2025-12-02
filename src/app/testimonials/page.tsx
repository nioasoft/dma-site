import Section from '@/components/Section';
import styles from './page.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'לקוחות ממליצים | DMA',
    description: 'קראו מה לקוחות DMA אומרים על השירות שלנו. עדויות מבעלי בתים, אדריכלים ועסקים שבחרו באיכות ללא פשרות.',
    alternates: {
        canonical: 'https://dma247.net/testimonials',
    },
    openGraph: {
        title: 'לקוחות ממליצים | DMA',
        description: 'עדויות אמיתיות מלקוחות מרוצים - בתי יוקרה ועסקים.',
        images: ['/pillars-bg.webp'],
    },
};

const reviewsStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DMA - Intelligence in Infrastructure",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "5",
        "bestRating": "5",
        "worstRating": "1"
    },
    "review": [
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "יורם א."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "אחרי שניסינו לפרוץ לנו לבית פעמיים, היינו בחרדה. דוד הגיע, לא ניסה למכור לי ציוד, אלא בנה לי 'חגורת הגנה'. המערכת זיהתה דמות בפינת החצר והפעילה תאורה וכריזה אוטומטית. הפורץ ברח מייד.",
            "datePublished": "2024-01-15"
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "גלית ו."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "אני עובדת עם קהל באלפיון העליון. רמת הגימור שלהם היא משהו שלא רואים בארץ. הם היחידים שאני מרשה להם לקדוח בפרויקטים שלי.",
            "datePublished": "2024-02-20"
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "עמית ר."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "DMA החליפו את כל תשתית ה-Mesh הביתית במערכת Access Points מנוהלת. מאז ההתקנה – אפס תקלות. רוחב פס מלא בכל חדר, גם בממ\"ד וגם בבריכה.",
            "datePublished": "2024-03-10"
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "דוד כ."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "במפעל שלנו יש אבק, חום ורעש. DMA בנו לנו ארונות תקשורת אטומים וממוזגים, ופרסו סיבים אופטיים ממוגנים. היכולת שלהם לתת מענה לתקלה בתוך שעתיים היא קריטית לנו.",
            "datePublished": "2024-04-05"
        },
        {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": "ד\"ר רונן ש."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "יש לי 4 סניפים ברחבי הארץ. דוד משה בנה לנו מערכת שליטה מרכזית. אני רואה את כל המצלמות במסך אחד, מנהל את בקרת הכניסה לעובדים מרחוק, ויודע בדיוק מה קורה בעסק.",
            "datePublished": "2024-05-18"
        }
    ]
};

export default function Testimonials() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsStructuredData) }}
            />
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>לקוחות ממליצים על DMA - חוות דעת אמיתיות</h1>
                <p className={styles.heroSubtitle}>
                    כשאין מקום לטעויות, בוחרים ב-DMA. השקט של הלקוחות שלנו מדבר בעד עצמו.
                </p>
            </Section>

            <Section id="private">
                <h2 className={styles.categoryTitle}>Private & Luxury Estates</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.role}>בעל נחלה במושב בשרון</span>
                            <span className={styles.location}>בצרה</span>
                        </div>
                        <p className={styles.quote}>
                            "אחרי שניסינו לפרוץ לנו לבית פעמיים, היינו בחרדה. הבאנו חברה שהתקינה מצלמות, אבל הן צפצפו מכל חתול ושיגעו אותנו. הגענו ל-DMA דרך המלצה. דוד הגיע, לא ניסה למכור לי ציוד, אלא בנה לי 'חגורת הגנה'. הוא התקין מצלמות תרמיות ומערכת אנליטיקה שיודעת לזהות אדם בחושך מוחלט. חודש אחרי ההתקנה, המערכת זיהתה דמות בפינת החצר והפעילה תאורה וכריזה אוטומטית. הפורץ ברח מייד. ההשקעה החזירה את עצמה באותו הלילה."
                        </p>
                        <div className={styles.author}>- יורם א.</div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.role}>אדריכלות ועיצוב פנים</span>
                            <span className={styles.location}>סביון</span>
                        </div>
                        <p className={styles.quote}>
                            "אני עובדת עם קהל באלפיון העליון. הלקוחות שלי רוצים טכנולוגיה, אבל שונאים לראות אותה. האתגר עם DMA היה בווילה בסביון עם תקרות בטון חשוף – אי אפשר להחביא כלום. רמת הגימור שלהם היא משהו שלא רואים בארץ. הם צבעו את גלאי העשן ואת המצלמות בגוון מיוחד (RAL) שיתאים לבטון, והעבירו כבילה בצורה בלתי נראית לחלוטין. הם היחידים שאני מרשה להם לקדוח בפרויקטים שלי."
                        </p>
                        <div className={styles.author}>- גלית ו.</div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.role}>הייטק / Home Office</span>
                            <span className={styles.location}>הרצליה פיתוח</span>
                        </div>
                        <p className={styles.quote}>
                            "הבית שלי הוא המשרד שלי. אני מנהל שיחות זום מול ארה"ב ואשתי מעבירה הרצאות אונליין. היינו סובלים מניתוקים כל הזמן. DMA החליפו את כל תשתית ה-Mesh הביתית במערכת Access Points מנוהלת (כמו במשרדים). מאז ההתקנה – אפס תקלות. רוחב פס מלא בכל חדר, גם בממ"ד וגם בבריכה. שירות סופר-מקצועי."
                        </p>
                        <div className={styles.author}>- עמית ר.</div>
                    </div>
                </div>
            </Section>

            <Section variant="dark" id="business">
                <h2 className={styles.categoryTitle}>Business & Enterprise</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.role}>מנהל תפעול</span>
                            <span className={styles.location}>עמק שרה</span>
                        </div>
                        <p className={styles.quote}>
                            "במפעל שלנו יש אבק, חום ורעש. המערכות הקודמות קרסו כל חצי שנה. DMA בנו לנו ארונות תקשורת אטומים וממוזגים, ופרסו סיבים אופטיים ממוגנים. המצלמות שהם התקינו משמשות אותנו היום לא רק לאבטחה, אלא לבקרת איכות בפס הייצור. היכולת שלהם לתת מענה לתקלה בתוך שעתיים היא קריטית לנו."
                        </p>
                        <div className={styles.author}>- דוד כ.</div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.role}>רשת מרפאות אסתטיקה</span>
                            <span className={styles.location}>פריסה ארצית</span>
                        </div>
                        <p className={styles.quote}>
                            "יש לי 4 סניפים ברחבי הארץ. הייתי צריך דרך לדעת מתי הסניף נפתח, מי נכנס, ולראות שהכל מתנהל כשורה – הכל מאפליקציה אחת. דוד משה בנה לנו מערכת שליטה מרכזית. אני רואה את כל המצלמות במסך אחד, מנהל את בקרת הכניסה לעובדים מרחוק, ויודע בדיוק מה קורה בעסק בלי להיות שם פיזית."
                        </p>
                        <div className={styles.author}>- ד"ר רונן ש.</div>
                    </div>
                </div>
            </Section>

            <Section id="success-story">
                <div className={styles.successStoryContainer}>
                    <h2 className={styles.sectionTitle}>סיפור הצלחה: וילה בקיסריה</h2>
                    <div className={styles.storyContent}>
                        <div className={styles.storySection}>
                            <h3>האתגר</h3>
                            <p>בית של 800 מ"ר עם 3 קומות, בריכה, וחצר של דונם. הלקוח רצה: WiFi מושלם בכל מקום, מערכת אבטחה שתגן על שטח גדול, ותאורה חכמה שגם ההורים המבוגרים יוכלו להפעיל.</p>
                        </div>
                        <div className={styles.storySection}>
                            <h3>הבעיות שמצאנו</h3>
                            <p>התשתית המקורית כללה רק 2 נקודות רשת בכל הבית, ארון החשמל היה בחדר סגור ללא אוורור, וקירות הבטון חסמו כל שידור אלחוטי.</p>
                        </div>
                        <div className={styles.storySection}>
                            <h3>הפתרון שלנו</h3>
                            <ul>
                                <li><strong>תשתיות:</strong> הנחנו 40 נקודות רשת חדשות עם סיבים אופטיים בין הקומות</li>
                                <li><strong>WiFi:</strong> 8 נקודות גישה מפוזרות עם Roaming חלק</li>
                                <li><strong>אבטחה:</strong> 16 מצלמות AI + גלאים תרמיים היקפיים</li>
                                <li><strong>אוטומציה:</strong> KNX לתאורה, מזגנים וווילונות ב-25 חדרים</li>
                            </ul>
                        </div>
                        <div className={styles.storySection}>
                            <h3>התוצאה</h3>
                            <ul>
                                <li>שיחות Zoom ללא ניתוקים מכל מקום בבית</li>
                                <li>אפס התראות שווא מהמצלמות (בזכות AI)</li>
                                <li>חיסכון של 30% בחשמל בזכות אוטומציה חכמה</li>
                                <li>הלקוח: "פעם ראשונה שאשתי מרוצה מפרויקט טכנולוגי"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
