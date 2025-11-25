'use client';

import Section from './Section';
import styles from './ExpertProfile.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ExpertProfile = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    {/* Placeholder for Moshe's image, using a professional abstract image for now */}
                    <Image
                        src="/hero-bg.webp"
                        alt="Moshe David"
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <span className={styles.label}>Meet the Expert</span>
                    <h2 className={styles.title}>משה דוד</h2>
                    <h3 className={styles.role}>Founder & CTO</h3>
                    <p className={styles.bio}>
                        "בעולם שבו הטכנולוגיה משתנה כל יום, הדבר היחיד שנשאר קבוע הוא הצורך בביטחון ושקט נפשי. הקמתי את DMA מתוך הבנה שללקוחות שלי אין זמן להתעסק עם תקלות. הם רוצים מערכת שעובדת, נקודה."
                    </p>
                    <p className={styles.description}>
                        עם ניסיון של מעל 15 שנה בפרויקטים מורכבים במגזר הביטחוני והפרטי, משה מביא סטנדרט של "Military Grade" לווילה שלכם. הוא לא מאמין בפתרונות מדף, אלא בתפירת חליפה אישית לכל לקוח.
                    </p>
                    <Link href="/contact" className={styles.button}>
                        תיאום פגישה עם משה
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default ExpertProfile;
