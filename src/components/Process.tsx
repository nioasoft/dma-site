'use client';

import Section from './Section';
import styles from './Process.module.css';

const steps = [
    {
        number: '01',
        title: 'Discovery & Design',
        description: 'אנחנו מתחילים בהקשבה. מבינים את הצרכים, את החלומות ואת האילוצים האדריכליים. לאחר מכן, אנחנו מתכננים את התשתית הנסתרת שתחזיק את הבית בחיים.'
    },
    {
        number: '02',
        title: 'Infrastructure Deployment',
        description: 'בשלב השלד, אנחנו פורסים את "העורקים והורידים" של הבית. צנרת רחבה, כבילה איכותית וסיבים אופטיים. הכל מסומן, מתועד ומבוצע ברמת דיוק כירורגית.'
    },
    {
        number: '03',
        title: 'System Integration',
        description: 'כשהבית מוכן, אנחנו מתקינים את "המוח". בקרים, מצלמות, רשת וסאונד. אנחנו מחברים את כל המערכות לממשק אחד פשוט ואינטואיטיבי שכל ילד יכול לתפעל.'
    },
    {
        number: '04',
        title: 'Support & SLA',
        description: 'המסירה היא רק ההתחלה. אנחנו נשארים בתמונה עם ניטור מרחוק, עדכוני תוכנה וזמינות מלאה לכל שאלה. הבית שלכם בידיים טובות 24/7.'
    }
];

const Process = () => {
    return (
        <Section variant="dark" id="process">
            <div className={styles.header}>
                <h2 className={styles.title}>The DMA Methodology</h2>
                <p className={styles.subtitle}>תהליך עבודה מובנה שמבטיח שקט נפשי משלב התוכניות ועד למסירת המפתח.</p>
            </div>

            <div className={styles.grid}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.card}>
                        <span className={styles.number}>{step.number}</span>
                        <h3 className={styles.cardTitle}>{step.title}</h3>
                        <p className={styles.description}>{step.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Process;
