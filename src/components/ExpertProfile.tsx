'use client';

import Section from './Section';
import styles from './ExpertProfile.module.css';
import Image from 'next/image';
import Link from 'next/link';

const certifications = [
    { name: 'KNX Partner', description: 'מתקין מוסמך KNX' },
    { name: 'Control4 Dealer', description: 'סוכן מורשה' },
    { name: 'Axis Certified', description: 'שותף מוסמך' },
    { name: 'Ubiquiti Enterprise', description: 'מתקין מוסמך' },
];

const ExpertProfile = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/hero-bg.webp"
                        alt="דוד משה אביטבול - מייסד DMA, מומחה לבית חכם ואבטחה עם 15 שנות ניסיון"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <span className={styles.label}>Meet the Expert</span>
                    <h2 className={styles.title}>דוד משה אביטבול</h2>
                    <h3 className={styles.role}>מייסד ומנכ&quot;ל DMA</h3>
                    <p className={styles.bio}>
                        &quot;בעולם שבו הטכנולוגיה משתנה כל יום, הדבר היחיד שנשאר קבוע הוא הצורך בביטחון ושקט נפשי. הקמתי את DMA מתוך הבנה שללקוחות שלי אין זמן להתעסק עם תקלות. הם רוצים מערכת שעובדת, נקודה.&quot;
                    </p>
                    <p className={styles.description}>
                        עם ניסיון של מעל 15 שנה בפרויקטים מורכבים במגזר הביטחוני והפרטי, דוד משה מביא סטנדרט של &quot;Military Grade&quot; לווילה שלכם. הוא לא מאמין בפתרונות מדף, אלא בתפירת חליפה אישית לכל לקוח.
                    </p>
                    <div className={styles.certifications}>
                        <h4 className={styles.certificationsTitle}>הסמכות מקצועיות</h4>
                        <div className={styles.certificationsList}>
                            {certifications.map((cert, index) => (
                                <div key={index} className={styles.certificationBadge}>
                                    <span className={styles.certName}>{cert.name}</span>
                                    <span className={styles.certDesc}>{cert.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>שנות ניסיון</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>פרויקטים</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>שביעות רצון</span>
                        </div>
                    </div>
                    <Link href="/contact" className={styles.button}>
                        תיאום פגישה עם דוד משה
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default ExpertProfile;
