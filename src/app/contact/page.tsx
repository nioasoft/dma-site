import Section from '@/components/Section';
import styles from './page.module.css';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'צור קשר | ייעוץ חינם למתח נמוך ואבטחה | DMA',
    description: 'צרו קשר עם DMA לתיאום פגישת ייעוץ. אנחנו כאן כדי לתכנן את מערכת המתח הנמוך הבאה שלכם.',
};

export default function Contact() {
    return (
        <main>
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>Let's Talk Security</h1>
                <p className={styles.heroSubtitle}>
                    מוכנים לשדרג את השקט הנפשי שלכם? השאירו פרטים ונחזור אליכם לתיאום פגישת ייעוץ.
                </p>
            </Section>

            <Section className={styles.formSection}>
                <div className={styles.container}>
                    <div className={styles.infoSide}>
                        <h3>למה לבחור ב-DMA?</h3>

                        <div className={styles.statsRow}>
                            <div className={styles.statBox}>
                                <span className={styles.statNum}>15+</span>
                                <span className={styles.statLabel}>שנות ניסיון</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statNum}>500+</span>
                                <span className={styles.statLabel}>פרויקטים</span>
                            </div>
                        </div>

                        <div className={styles.coverageSection}>
                            <h4>פריסה ארצית מלאה</h4>
                            <p>מהגליל ועד אילת - אנחנו מגיעים לכל מקום בישראל. פרויקטים בהרצליה פיתוח, קיסריה, סביון, ובכל רחבי הארץ.</p>
                        </div>

                        <div className={styles.contactInfo}>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>📧</span>
                                <p>moshe@dma247.net</p>
                            </div>
                        </div>

                        <div className={styles.note}>
                            <p>✓ פגישת ייעוץ ראשונית ללא עלות</p>
                            <p>✓ דיסקרטיות מוחלטת מובטחת</p>
                            <p>✓ זמינות לפרויקטים דחופים</p>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </Section>
        </main>
    );
}
