export type ServiceSeo = {
    title: string;
    description: string;
    path: string;
    name: string;
    serviceType: string[];
    image?: string;
    keywords?: string[];
};

export const servicesSeo = {
    consulting: {
        title: 'ייעוץ ותכנון מערכות מתח נמוך',
        description: 'ייעוץ מקצועי ותכנון הנדסי של מערכות מתח נמוך: תקשורת, אבטחה, בקרת כניסה ואודיו-וידאו. תכנון מותאם לפרויקט שלכם.',
        path: '/services/consulting',
        name: 'ייעוץ ותכנון מערכות מתח נמוך',
        serviceType: ['ייעוץ מתח נמוך', 'תכנון תשתיות תקשורת', 'תכנון מערכות אבטחה'],
        image: '/og-image.png',
        keywords: ['ייעוץ מתח נמוך', 'תכנון מערכות מתח נמוך', 'תכנון תקשורת', 'תכנון אבטחה'],
    },
    security: {
        title: 'מערכות אבטחה מתקדמות',
        description: 'פתרונות אבטחה מתקדמים: מצלמות AI, אבטחה היקפית, ומוקד ניטור 24/7. Axis, Hikvision Pro, Hanwha ו-Bosch.',
        path: '/services/security',
        name: 'מערכות אבטחה מתקדמות עם AI',
        serviceType: ['מצלמות אבטחה', 'אבטחה היקפית', 'מוקד ניטור', 'אזעקה'],
        image: '/images/services/security/security-camera.webp',
        keywords: ['מצלמות אבטחה', 'אבטחה היקפית', 'מצלמות AI', 'מערכת אזעקה'],
    },
    networking: {
        title: 'תשתיות תקשורת ורשת WiFi מקצועית',
        description: 'תשתיות רשת מתקדמות: סיבים אופטיים, WiFi Enterprise, וארונות תקשורת מדוגמים. Ubiquiti, Ruckus, Cisco ו-Aruba.',
        path: '/services/networking',
        name: 'תשתיות תקשורת ורשת WiFi מקצועית',
        serviceType: ['תשתיות תקשורת', 'WiFi מקצועי', 'סיבים אופטיים', 'ארונות תקשורת'],
        image: '/images/services/networking/wifi-enterprise.webp',
        keywords: ['WiFi מקצועי', 'תשתיות תקשורת', 'סיבים אופטיים', 'רשת לבית ולעסק'],
    },
    accessControl: {
        title: 'בקרת כניסה וזיהוי פנים',
        description: 'מערכות בקרת כניסה מתקדמות: זיהוי פנים ביומטרי, אינטרקום חכם, כרטיסי עובד וקודים זמניים. שליטה מלאה מהנייד.',
        path: '/services/access-control',
        name: 'בקרת כניסה וזיהוי פנים',
        serviceType: ['בקרת כניסה', 'אינטרקום וידאו', 'זיהוי פנים', 'מנעול חכם'],
        image: '/images/services/access-control/facial-recognition.webp',
        keywords: ['בקרת כניסה', 'זיהוי פנים', 'אינטרקום חכם', 'מפתח דיגיטלי'],
    },
    audioVideo: {
        title: 'מערכות אודיו וידאו וקולנוע ביתי',
        description: 'רמקולים נסתרים, קולנוע ביתי 4K, מערכות Multi-Room וחדרי ישיבות מקצועיים. סאונד שמרגישים, ציוד שלא רואים.',
        path: '/services/audio-video',
        name: 'מערכות אודיו וידאו וקולנוע ביתי',
        serviceType: ['אודיו וידאו', 'קולנוע ביתי', 'רמקולים נסתרים', 'Multi-Room Audio'],
        image: '/images/services/audio-video/home-cinema.webp',
        keywords: ['אודיו וידאו', 'קולנוע ביתי', 'רמקולים נסתרים', 'מערכת מולטירום'],
    },
    cyber: {
        title: 'סייבר ופרטיות לבית ולעסק',
        description: 'הגנת סייבר לרשת הביתית והעסקית: הפרדת רשתות, חומות אש, VPN מאובטח וייעוץ אבטחת מידע. הפרטיות שלכם בראש סדר העדיפויות.',
        path: '/services/cyber',
        name: 'סייבר ופרטיות לבית ולעסק',
        serviceType: ['אבטחת רשת', 'הפרדת VLAN', 'VPN מאובטח', 'הקשחת מערכות IoT'],
        image: '/images/services/cyber/firewall-hardware.webp',
        keywords: ['סייבר לבית', 'אבטחת רשת', 'VLAN', 'VPN מאובטח'],
    },
    smartHome: {
        title: 'מערכות בית חכם יוקרתיות',
        description: 'מערכות בית חכם יוקרתיות: תאורה, אקלים, וילונות ומולטימדיה בשליטה אחת. KNX, Control4, Loxone ו-Crestron.',
        path: '/services/smart-home',
        name: 'מערכות בית חכם יוקרתיות',
        serviceType: ['בית חכם', 'KNX', 'Control4', 'אוטומציה לבית'],
        image: '/images/services/smart-home/control-panel.webp',
        keywords: ['בית חכם', 'KNX', 'Control4', 'אוטומציה לבית'],
    },
} satisfies Record<string, ServiceSeo>;
