'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    variant?: 'default' | 'dark' | 'hero';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, variant = 'default' }) => {
    const isHero = variant === 'hero';

    return (
        <motion.section
            id={id}
            className={`${styles.section} ${styles[variant]} ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={isHero ? undefined : { opacity: 1, y: 0 }}
            animate={isHero ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className={styles.container}>
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
