import Section from '@/components/Section';
import PillarCard from '@/components/PillarCard';
import styles from './page.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אודות DMA | הסיפור שלנו',
  description: 'DMA - מעל 15 שנות ניסיון בתשתיות מתח נמוך ואבטחה. הכירו את דוד משה אביטבול והפילוסופיה שמאחורי החברה.',
  alternates: {
    canonical: 'https://dma247.net/about',
  },
  openGraph: {
    title: 'אודות DMA | הסיפור שלנו',
    description: 'DMA - מעל 15 שנות ניסיון בתשתיות מתח נמוך ואבטחה.',
    images: ['/vision-bg.webp'],
  },
};

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <Section variant="hero" className={styles.hero}>
        <h1 className={styles.heroTitle}>
          אודות DMA - מומחים במתח נמוך ואבטחה מתקדמת
        </h1>
        <p className={styles.heroSubtitle}>
          אנחנו לא רק מחברים כבלים. אנחנו יוצרים את מערכת העצבים הבלתי נראית של המרחב שלכם - ארכיטקטורה של שקט נפשי.
        </p>
      </Section>

      {/* Vision Section */}
      <Section variant="dark" id="vision">
        <div className={styles.visionContent}>
          <p className={styles.visionText}>
            בעולם שבו הכל מחובר, השקט האמיתי לא מגיע מהוספת עוד מכשירים, אלא מהאינטגרציה המושלמת ביניהם. ב-DMA, אנחנו מאמינים שטכנולוגיה עילית צריכה להיות שקופה. היא צריכה לעבוד עבורכם, להגן עליכם, ולשרת אתכם – מבלי שתצטרכו לחשוב עליה.
          </p>
          <p className={styles.visionText}>
            אנחנו מתמחים ביצירת סביבות חכמות ובטוחות למגזר העסקי, לווילות יוקרה ולפרויקטים בעלי רגישות גבוהה. אנחנו מגשרים על הפער שבין תכנון אדריכלי מוקפד לבין הדרישות הטכניות המורכבות ביותר של עולם המתח הנמוך, התקשורת והאבטחה.
          </p>
        </div>
      </Section>

      {/* Founder's Story Section */}
      <Section id="story">
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <h2>הסיפור שלנו</h2>
            <br />
            <p>
              DMA נולדה מתוך תסכול מקצועי עמוק. דוד משה אביטבול, מייסד החברה, החל את דרכו בשטח, בעולמות התשתיות והתקשורת. הוא ראה שוב ושוב את אותו הכשל: מבנים מרהיבים שתוכננו במיליונים, אך נשענו על תשתיות טכנולוגיות רעועות, התקנות מרושלות ("ספגטי של כבלים") וחוסר הבנה מערכתי.
            </p>
            <br />
            <p>
              ההבנה שאין פשרות בביטחון ובאמינות, הובילה להקמת DMA. החזון היה להקים גוף שחושב כמו משרד תכנון הנדסי, ועובד בשטח בדיוק של יחידת עילית. גוף שלא רק "מתקין מצלמה", אלא מבין את איומי הסייבר, את דרישות רוחב הפס העתידיות, ואת הצורך באסתטיקה בלתי מתפשרת – גם בתוך ארון התקשורת הסגור.
            </p>
          </div>
          {/* Placeholder for Founder Image if needed, or just text for now */}
        </div>
      </Section>

      {/* Core Pillars Section */}
      <Section variant="dark" id="pillars">
        <h2>ה-DNA שלנו</h2>
        <p>ההבדל בין מערכת עובדת למערכת מצוינת טמון בפרטים הקטנים שאף אחד לא רואה. אלו עקרונות הברזל שלנו:</p>

        <div className={styles.pillarsGrid}>
          <PillarCard
            number="01"
            title="תכנון פורנזי"
            titleEn="Forensic Planning"
            description="אנחנו לא קודחים חור אחד לפני שאנחנו מבינים את התמונה המלאה. כל פרויקט מתחיל בניתוח מעמיק של תוכניות האדריכלות, הבנת צרכי הלקוח (הגלויים והסמויים) ותכנון תשתיות הצופות פני עתיד."
          />
          <PillarCard
            number="02"
            title="אסתטיקה טכנולוגית"
            titleEn="Technical Aesthetics"
            description="עבורנו, ארון תקשורת מסודר הוא לא רק עניין של יופי – הוא עניין של אמינות, בטיחות ויכולת תחזוקה. רמת הגימור שלנו, מהנחת הסיב האופטי ועד התקנת ציוד הקצה, היא חסרת פשרות."
          />
          <PillarCard
            number="03"
            title="דוקטרינת הדיסקרטיות"
            titleEn="Doctrine of Discretion"
            description="אנו פועלים בסביבות הרגישות ביותר – ממשרדי הנהלה בכירים ועד בתי יוקרה פרטיים. אמינות וסודיות הם לא רק מילים עבורנו, אלא תנאי סף לעבודה. המידע שלכם, והשקט שלכם, הם הנכס החשוב ביותר שאנו מגנים עליו."
          />
        </div>
      </Section>

      <Section id="stats">
        <div className={styles.statsContainer}>
          <h2 className={styles.sectionTitle}>DMA במספרים</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>שנות ניסיון</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>פרויקטים שהושלמו</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>בתים פרטיים</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>מוקד שירות</span>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="dark" id="partners">
        <div className={styles.partnersContainer}>
          <h2 className={styles.sectionTitle}>הסמכות ושותפויות</h2>
          <p className={styles.partnersSubtitle}>אנחנו שותפים מוסמכים של מותגי העילית בתחום:</p>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerCard}>
              <h3>Axis Communications</h3>
              <p>Certified Partner</p>
            </div>
            <div className={styles.partnerCard}>
              <h3>Control4</h3>
              <p>Authorized Dealer</p>
            </div>
            <div className={styles.partnerCard}>
              <h3>Ubiquiti</h3>
              <p>Enterprise Installer</p>
            </div>
            <div className={styles.partnerCard}>
              <h3>Hikvision</h3>
              <p>Gold Partner</p>
            </div>
            <div className={styles.partnerCard}>
              <h3>KNX</h3>
              <p>Certified Installer</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="contact">
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>מוכנים לשקט נפשי?</h2>
          <p>
            אנחנו מזמינים אתכם להגדיר מחדש את הסטנדרט של המרחב שלכם. לפגישת ייעוץ אסטרטגית ותכנון מערכות, צרו קשר עם המומחים של DMA.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            צרו קשר
          </a>
        </div>
      </Section>
    </main>
  );
}
