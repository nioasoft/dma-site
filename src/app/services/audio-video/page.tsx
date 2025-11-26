import Section from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import styles from '../smart-home/page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'מערכות אודיו וידאו וקולנוע ביתי | DMA',
    description: 'רמקולים נסתרים, קולנוע ביתי 4K, מערכות Multi-Room וחדרי ישיבות מקצועיים. סאונד שמרגישים, ציוד שלא רואים.',
    alternates: {
        canonical: 'https://dma.co.il/services/audio-video',
    },
};

const breadcrumbItems = [
    { label: 'דף הבית', href: '/' },
    { label: 'שירותים', href: '/services' },
    { label: 'אודיו וידאו' }
];

export default function AudioVideo() {
    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>מערכות אודיו וידאו וקולנוע ביתי</h1>
                <p className={styles.heroSubtitle}>
                    סאונד שמרגישים, רמקולים שלא רואים. טכנולוגיה ביישנית בשירות החוויה.
                </p>
            </Section>

            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <h2>רמקולים בלתי נראים (Invisible Speakers)</h2>
                    <p>
                        הטרנד החם ביותר בעולם האודיו היוקרתי: רמקולים שמוטמעים בתוך הקיר ומכוסים
                        בשכבת שפכטל וצבע. התוצאה - קיר חלק לחלוטין וסאונד שמרגישים אותו עוטף אתכם
                        מכל עבר, בלי שתוכלו להצביע מאיפה הוא מגיע.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>רמקולי תקרה וקיר</h3>
                            <ul>
                                <li>רמקולים שקועים בתקרה - נקיים ואסתטיים</li>
                                <li>רמקולי קיר בלתי נראים</li>
                                <li>סאונד באר (Soundbar) מוסתר</li>
                                <li>סאב-וופר רוטט (Tactile Transducer)</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>קולנוע ביתי</h3>
                            <ul>
                                <li>מקרנים 4K/8K עם Short Throw</li>
                                <li>מסכים מתקפלים/נשלפים</li>
                                <li>סאונד סראונד 5.1 / 7.1 / Dolby Atmos</li>
                                <li>בידוד אקוסטי מקצועי</li>
                                <li>תאורה אווירה מסונכרנת</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>Multi-Room Audio</h3>
                            <ul>
                                <li>מוזיקה בכל חדר בבית</li>
                                <li>שליטה מהנייד או ממסכי קיר</li>
                                <li>סנכרון מושלם בין החדרים</li>
                                <li>תמיכה ב-Spotify, Apple Music ועוד</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>חדרי ישיבות מקצועיים</h3>
                            <ul>
                                <li>מערכות ועידת וידאו (Zoom, Teams)</li>
                                <li>מיקרופונים שולחניים/תקרה</li>
                                <li>מסכים אינטראקטיביים</li>
                                <li>שליטה פשוטה בכפתור אחד</li>
                            </ul>
                        </div>
                    </div>

                    <h2>בידור בחצר ובבריכה</h2>
                    <p>
                        הגינה היא חלק בלתי נפרד מהבית הישראלי. אנחנו מתקינים מסכי חוץ עמידים
                        לשמש ולגשם (Samsung The Terrace, SunBrite), רמקולים לוויניים שמוסתרים
                        בין השיחים, ותשתית WiFi חזקה גם ליד הבריכה.
                    </p>

                    <h2>המותגים שאנחנו עובדים איתם</h2>
                    <ul className={styles.brandsList}>
                        <li><strong>Sonance</strong> - רמקולים בלתי נראים מהמובילים בעולם</li>
                        <li><strong>Stealth Acoustics</strong> - טכנולוגיית Invisible מתקדמת</li>
                        <li><strong>KEF</strong> - רמקולי פרימיום בריטיים</li>
                        <li><strong>Bowers & Wilkins</strong> - איכות סאונד ללא פשרות</li>
                        <li><strong>Samsung</strong> - מסכי חוץ The Terrace</li>
                        <li><strong>Sony</strong> - מקרנים 4K מקצועיים</li>
                    </ul>

                    <h2>למה DMA?</h2>
                    <ul className={styles.whyUsList}>
                        <li>תכנון אקוסטי מקצועי לפני ההתקנה</li>
                        <li>עבודה צמודה עם האדריכל והמעצב</li>
                        <li>התקנה נקייה ובלתי נראית</li>
                        <li>כיול סאונד מקצועי בסיום</li>
                    </ul>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/contact" style={{
                            display: 'inline-block',
                            background: 'hsl(var(--color-primary))',
                            color: '#000',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            fontWeight: 700,
                            textDecoration: 'none'
                        }}>
                            תכננו איתנו את מערכת הסאונד
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
