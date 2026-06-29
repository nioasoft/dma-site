import Link from 'next/link';
import { createBreadcrumbSchema } from '@/lib/seo';
import styles from './Breadcrumbs.module.css';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    const schema = createBreadcrumbSchema(items);

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
