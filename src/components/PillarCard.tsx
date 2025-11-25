import React from 'react';
import styles from './PillarCard.module.css';

interface PillarCardProps {
    number: string;
    title: string;
    titleEn: string;
    description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ number, title, titleEn, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.number}>{number}</span>
                <h3 className={styles.title}>
                    {title}
                    <span className={styles.subtitle}>{titleEn}</span>
                </h3>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default PillarCard;
