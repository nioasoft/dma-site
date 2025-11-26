import Section from '@/components/Section';
import styles from './page.module.css';
import Link from 'next/link';
import Process from '@/components/Process';
import ExpertProfile from '@/components/ExpertProfile';
import LatestInsights from '@/components/LatestInsights';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'DMA | בית חכם, אבטחה ותשתיות יוקרה בישראל',
    description: 'תכנון וביצוע מערכות מתח נמוך, תקשורת ומיגון למגזר העסקי ולבתי יוקרה. DMA מספקת שקט נפשי דרך טכנולוגיה מתקדמת.',
    alternates: {
        canonical: 'https://dma.co.il',
    },
};

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <Section variant="hero" className={styles.hero} id="hero">
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        DMA<br />
                        תשתיות חכמות. שקט נפשי.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        תכנון וביצוע מערכות מתח נמוך, תקשורת ואבטחה לבתי יוקרה ולמגזר העסקי.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/contact" className={styles.primaryButton}>
                            תיאום פגישת ייעוץ
                        </Link>
                        <Link href="/services" className={styles.secondaryButton}>
                            הפתרונות שלנו
                        </Link>
                    </div>
                </div>
            </Section>

            {/* UVP Section */}
            <Section id="vision">
                <h2 className={styles.sectionTitle}>מה אנחנו מציעים</h2>
                <div className={styles.uvpGrid}>
                    <div className={styles.uvpCard}>
                        <h3>Security</h3>
                        <p>מערכות אבטחה היקפיות עם אנליטיקה מתקדמת לזיהוי איומים בזמן אמת.</p>
                    </div>
                    <div className={styles.uvpCard}>
                        <h3>Communication</h3>
                        <p>תשתיות תקשורת ו-WiFi ברמת Enterprise לכיסוי מושלם ומהירות מקסימלית.</p>
                    </div>
                    <div className={styles.uvpCard}>
                        <h3>Integration</h3>
                        <p>בית חכם אמיתי שמחבר את כל המערכות לממשק שליטה אחד פשוט ואינטואיטיבי.</p>
                    </div>
                </div>

                <div className={styles.targetAudience}>
                    <h2 className={styles.sectionTitle}>למי אנחנו נותנים שירותים?</h2>
                    <div className={styles.audienceGrid}>
                        <div className={styles.audienceCard}>
                            <h3>בעלי בתים פרטיים</h3>
                            <p>בונים בית חדש או משפצים? אנחנו נדאג שהתשתית תהיה מושלמת מהיום הראשון.</p>
                        </div>
                        <div className={styles.audienceCard}>
                            <h3>אדריכלים ומעצבים</h3>
                            <p>שותפים מקצועיים שמכבדים את העיצוב. טכנולוגיה בלתי נראית שמשתלבת בחזון שלכם.</p>
                        </div>
                        <div className={styles.audienceCard}>
                            <h3>עסקים וארגונים</h3>
                            <p>ממשרדים ועד מפעלים - פתרונות תקשורת ואבטחה שגדלים איתכם.</p>
                        </div>
                        <div className={styles.audienceCard}>
                            <h3>לקוחות VIP</h3>
                            <p>דיסקרטיות מוחלטת, זמינות גבוהה, סודיות בכל שלב.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Process />

            <Section variant="dark" id="pillars">
                <h2 className={styles.sectionTitle}>Core Pillars</h2>
                <div className={styles.pillarsGrid}>
                    {/* Assuming PillarCard is a component or a placeholder for now */}
                    <div className={styles.pillarCard}>
                        <span className={styles.pillarNumber}>01</span>
                        <h3>Architecture</h3>
                        <p>אנחנו לא 'מתקינים'. אנחנו מתכננים. כל פרויקט מתחיל בשרטוט הנדסי מדויק.</p>
                    </div>
                    <div className={styles.pillarCard}>
                        <span className={styles.pillarNumber}>02</span>
                        <h3>Aesthetics</h3>
                        <p>טכנולוגיה צריכה להיות שקופה. אנחנו עובדים צמוד עם האדריכל כדי להעלים את הכבלים.</p>
                    </div>
                    <div className={styles.pillarCard}>
                        <span className={styles.pillarNumber}>03</span>
                        <h3>Reliability</h3>
                        <p>מערכות יציבות שלא דורשות ריסטרט כל שבוע. ציוד ברמה צבאית/תעשייתית בלבד.</p>
                    </div>
                </div>
            </Section>

            <ExpertProfile />

            <LatestInsights />

            {/* Testimonials Section */}
            <Section id="testimonials">
                <h2 className={styles.sectionTitle}>Client Stories</h2>
                <div className={styles.testimonialsGrid}>
                    <div className={styles.testimonialCard}>
                        <p className={styles.quote}>"דוד הגיע, לא ניסה למכור לי ציוד, אלא בנה לי 'חגורת הגנה'. הפורץ ברח מייד."</p>
                        <div className={styles.author}>
                            <strong>יורם א.</strong>
                            <span>מושב בצרה</span>
                        </div>
                    </div>
                    <div className={styles.testimonialCard}>
                        <p className={styles.quote}>"הם היחידים שאני מרשה להם לקדוח בפרויקטים שלי. רמת גימור שלא רואים בארץ."</p>
                        <div className={styles.author}>
                            <strong>גלית ו.</strong>
                            <span>אדריכלית</span>
                        </div>
                    </div>
                    <div className={styles.testimonialCard}>
                        <p className={styles.quote}>"מאז ההתקנה – אפס תקלות. רוחב פס מלא בכל חדר, גם בממ\"ד וגם בבריכה."</p>
                        <div className={styles.author}>
                            <strong>עמית ר.</strong>
                            <span>הרצליה פיתוח</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section variant="dark" className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2>מוכנים לשדרג את השקט הנפשי שלכם?</h2>
                    <p>בואו נתכנן את המערכת הבאה שלכם.</p>
                    <Link href="/contact" className={styles.ctaButton}>
                        תיאום פגישת ייעוץ
                    </Link>
                </div>
            </Section>
        </main>
    );
}
