import Section from '@/components/Section';
import styles from './page.module.css';

export default function Testimonials() {
    return (
        <main>
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>The Wall of Trust</h1>
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
        </main>
    );
}
