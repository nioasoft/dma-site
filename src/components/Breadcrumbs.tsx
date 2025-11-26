import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.href ? `https://dma.co.il${item.href}` : undefined
        }))
    };
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    const schema = generateBreadcrumbSchema(items);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
                <ol className={styles.list}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.item}>
                            {item.href && index < items.length - 1 ? (
                                <>
                                    <Link href={item.href} className={styles.link}>
                                        {item.label}
                                    </Link>
                                    <span className={styles.separator}>/</span>
                                </>
                            ) : (
                                <span className={styles.current} aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
