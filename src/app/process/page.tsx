import Section from '@/components/Section';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'תהליך העבודה | DMA',
    description: 'כך אנחנו עובדים: מתכנון הנדסי מדויק ועד למסירה והדרכה. תהליך עבודה סדור ומקצועי.',
};

export default function Process() {
    return (
        <main>
            <Section variant="hero" className={styles.hero}>
                <h1 className={styles.heroTitle}>תהליך העבודה</h1>
                <p className={styles.heroSubtitle}>
                    סדר, דיוק ושקיפות. כך אנחנו הופכים חזון למציאות.
                </p>
            </Section>

            <Section className={styles.timelineSection}>
                <div className={styles.timeline}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>01</div>
                        <div className={styles.stepContent}>
                            <h2>פגישת היכרות וייעוץ (ללא עלות)</h2>
                            <div className={styles.stepDetails}>
                                <div className={styles.detail}>
                                    <strong>מה קורה?</strong>
                                    <p>נפגש בבית או במשרד שלכם לשיחת היכרות. נבין את הצרכים, החלומות והאתגרים. נסקור את התוכניות (אם יש) ונזהה הזדמנויות ובעיות פוטנציאליות.</p>
                                </div>
                                <div className={styles.detail}>
                                    <strong>כמה זמן?</strong>
                                    <p>שעה עד שעתיים.</p>
                                </div>
                                <div className={styles.detail}>
                                    <strong>מה תקבלו?</strong>
                                    <p>הבנה ראשונית של מה אפשרי, מה מומלץ, וטווחי תקציב כלליים.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepNumber}>02</div>
                        <div className={styles.stepContent}>
                            <h2>סקר טכני ותכנון</h2>
                            <div className={styles.stepDetails}>
                                <div className={styles.detail}>
                                    <strong>מה קורה?</strong>
                                    <p>אנחנו מבצעים סקר מעמיק של המבנה - מדידות, בדיקת תשתיות קיימות, מיפוי נקודות תקשורת וחשמל. אם זה בית בבנייה, אנחנו עובדים ישירות מול התוכניות האדריכליות.</p>
                                </div>
                                <div className={styles.detail}>
                                    <strong>מה תקבלו?</strong>
                                    <ul className={styles.list}>
                                        <li>תוכנית תשתיות מפורטת (שרטוט)</li>
                                        <li>רשימת ציוד מומלץ</li>
                                        <li>הצעת מחיר מפורטת ומחייבת</li>
                                        <li>לוח זמנים משוער</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepNumber}>03</div>
                        <div className={styles.stepContent}>
                            <h2>התקנת תשתיות (שלב השלד)</h2>
                            <p className={styles.stepNote}>*רלוונטי לבנייה חדשה או שיפוץ כללי</p>
                            <div className={styles.stepDetails}>
                                <div className={styles.detail}>
                                    <strong>מה קורה?</strong>
                                    <p>נכנסים לאתר הבנייה בשלב השלד. מעבירים צנרת, כבלים, סיבים אופטיים והכנות לפני שהקירות נסגרים. זה השלב הכי קריטי - מה שלא יעשה עכשיו, יהיה יקר מאוד לתקן אחר כך.</p>
                                </div>
                                <div className={styles.detail}>
                                    <strong>תיאום:</strong>
                                    <p>עובדים בצמוד עם הקבלן, החשמלאי והאדריכל.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepNumber}>04</div>
                        <div className={styles.stepContent}>
                            <h2>התקנת ציוד (שלב הגימור)</h2>
                            <div className={styles.stepDetails}>
                                <div className={styles.detail}>
                                    <strong>מה קורה?</strong>
                                    <p>מתקינים את ציוד הקצה: מצלמות, נקודות גישה, בקרים, רמקולים, מתגים חכמים, ועוד. מגדירים ומכוונים הכל.</p>
                                </div>
                                <div className={styles.detail}>
                                    <strong>כמה זמן?</strong>
                                    <p>יום אחד עד שבוע, בהתאם להיקף.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepNumber}>05</div>
                        <div className={styles.stepContent}>
                            <h2>הדרכה ומסירה</h2>
                            <div className={styles.stepDetails}>
                                <div className={styles.detail}>
                                    <strong>מה קורה?</strong>
                                    <p>הדרכה מלאה על כל המערכות. מסבירים איך להפעיל, איך לפתור בעיות פשוטות, ומתי לפנות אלינו. מוסרים תיק פרויקט מסודר עם תוכניות, סיסמאות, ואחריות.</p>
                                </div>
                                <div className={styles.detail}>
                                    <strong>מה תקבלו?</strong>
                                    <ul className={styles.list}>
                                        <li>הדרכה פנים אל פנים (ניתן להקליט)</li>
                                        <li>תיק פרויקט דיגיטלי</li>
                                        <li>גישה לאפליקציות שליטה</li>
                                        <li>קו ישיר לתמיכה</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <div className={styles.stepNumber}>06</div>
                        <div className={styles.stepContent}>
                            <h2>תמיכה שוטפת</h2>
                            <div className={styles.stepDetails}>
                                <div className={styles.detail}>
                                    <strong>מה מקבלים?</strong>
                                    <ul className={styles.list}>
                                        <li>30 ימי תמיכה מלאה ללא עלות אחרי המסירה</li>
                                        <li>אפשרות להסכם SLA לתמיכה מתמשכת</li>
                                        <li>ניטור מרחוק של המערכות (בחבילות מסוימות)</li>
                                        <li>עדכוני תוכנה ואבטחה</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
