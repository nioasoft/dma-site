'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    variant?: 'default' | 'dark' | 'hero';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, variant = 'default' }) => {
    const isHero = variant === 'hero';
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(isHero);

    useEffect(() => {
        if (isHero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '-100px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isHero]);

    return (
        <section
            ref={ref}
            id={id}
            className={`${styles.section} ${styles[variant]} ${className} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
};

export default Section;
