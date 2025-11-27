import Section from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../smart-home/page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'סייבר ופרטיות לבית ולעסק | DMA',
    description: 'הגנת סייבר לרשת הביתית והעסקית: הפרדת רשתות, חומות אש, VPN מאובטח וייעוץ אבטחת מידע. הפרטיות שלכם בראש סדר העדיפויות.',
    alternates: {
        canonical: 'https://dma247.net/services/cyber',
    },
};

const breadcrumbItems = [
    { label: 'דף הבית', href: '/' },
    { label: 'שירותים', href: '/services' },
    { label: 'סייבר ופרטיות' }
];

export default function Cyber() {
    return (
        <main>
            <Breadcrumbs items={breadcrumbItems} />
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>סייבר ופרטיות - הגנה על הרשת שלכם</h1>
                <p className={styles.heroSubtitle}>
                    בעידן של מצלמות מחוברות ובתים חכמים, אבטחת הרשת היא לא מותרות - היא הכרח.
                </p>
            </Section>

            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <Image
                        src="/images/services/cyber/firewall-hardware.webp"
                        alt="ציוד חומת אש מקצועית"
                        width={1260}
                        height={540}
                        className={styles.sectionImage}
                        priority
                    />

                    <h2>למה אבטחת סייבר ביתית חשובה?</h2>
                    <p>
                        כל מצלמה, כל מזגן חכם, כל נורה מחוברת - הם פוטנציאל לפרצת אבטחה.
                        האקרים יכולים להשתלט על מצלמות האבטחה שלכם, לצפות בכם בבית,
                        או להשתמש ברשת שלכם לפעילות זדונית. אנחנו דואגים שזה לא יקרה.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>הפרדת רשתות (VLAN)</h3>
                            <ul>
                                <li>רשת נפרדת למצלמות ו-IoT</li>
                                <li>רשת נפרדת לעבודה מהבית</li>
                                <li>רשת אורחים מבודדת</li>
                                <li>מניעת תקשורת בין מכשירים</li>
                                <li>בידוד מלא מהאינטרנט הביתי</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>חומת אש מתקדמת</h3>
                            <ul>
                                <li>סינון תעבורה נכנסת ויוצאת</li>
                                <li>חסימת גישה ממדינות זרות</li>
                                <li>זיהוי וחסימת פעילות חשודה</li>
                                <li>דוחות ניטור שבועיים</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>גישה מרחוק מאובטחת (VPN)</h3>
                            <ul>
                                <li>צפייה במצלמות מחו&quot;ל בבטחה</li>
                                <li>שליטה בבית החכם מכל מקום</li>
                                <li>הצפנה צבאית (AES-256)</li>
                                <li>אימות דו-שלבי (2FA)</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h3>הקשחת מערכות</h3>
                            <ul>
                                <li>שינוי סיסמאות ברירת מחדל</li>
                                <li>עדכוני אבטחה שוטפים</li>
                                <li>כיבוי שירותים מיותרים</li>
                                <li>הגבלת הרשאות גישה</li>
                            </ul>
                        </div>
                    </div>

                    <Image
                        src="/images/services/cyber/vpn-security.webp"
                        alt="אבטחת VPN והצפנה"
                        width={1260}
                        height={540}
                        className={styles.sectionImage}
                    />

                    <h2>מה קורה אם נפרץ לי לרשת?</h2>
                    <p>
                        ללא הגנה נאותה, פורץ יכול לצפות במצלמות האבטחה שלכם, לשמוע שיחות,
                        לגנוב קבצים מהמחשב, או להשתמש ברשת שלכם למתקפות על אחרים.
                        עם ההגנות שלנו, גם אם מכשיר אחד נפרץ - הנזק מבודד ומוגבל.
                    </p>

                    <Image
                        src="/images/services/cyber/network-diagram.webp"
                        alt="דיאגרמת רשת מאובטחת עם הפרדת VLAN"
                        width={1260}
                        height={540}
                        className={styles.sectionImage}
                    />

                    <h2>שירותי סייבר לעסקים</h2>
                    <ul className={styles.brandsList}>
                        <li><strong>סקר חולשות</strong> - בדיקת הרשת לאיתור פרצות</li>
                        <li><strong>ניטור 24/7</strong> - זיהוי פעילות חריגה בזמן אמת</li>
                        <li><strong>תגובה לאירועים</strong> - טיפול מהיר בפריצות</li>
                        <li><strong>הדרכות עובדים</strong> - מניעת פישינג והנדסה חברתית</li>
                    </ul>

                    <h2>למה DMA?</h2>
                    <ul className={styles.whyUsList}>
                        <li>ניסיון באבטחת ארגונים ביטחוניים</li>
                        <li>הכרות עמוקה עם מערכות IoT ובית חכם</li>
                        <li>תמיכה שוטפת ועדכוני אבטחה</li>
                        <li>סודיות מוחלטת</li>
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
                            בקשו סקר אבטחת סייבר
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
