import Section from '@/components/Section';
import styles from './page.module.css';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'צור קשר | ייעוץ חינם לבית חכם ואבטחה | DMA',
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
                        <h3>DMA - Intelligence in Infrastructure</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>📍</span>
                                <p>המרכז, ישראל (פריסה ארצית)</p>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.icon}>📧</span>
                                <p>moshe@dma247.net</p>
                            </div>
                        </div>
                        <div className={styles.note}>
                            <p>* פגישות ייעוץ בתיאום מראש בלבד.</p>
                            <p>* דיסקרטיות מלאה מובטחת.</p>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </Section>
        </main>
    );
}
