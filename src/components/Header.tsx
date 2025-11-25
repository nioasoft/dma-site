'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'בית', href: '/' },
        { label: 'אודות', href: '/about' },
        { label: 'שירותים', href: '/services' },
        { label: 'עדויות', href: '/testimonials' },
        { label: 'ידע', href: '/blog' },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/contact" className={styles.ctaButton}>
                        צור קשר
                    </Link>
                </nav>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo-transparent.webp"
                        alt="DMA Logo"
                        width={250}
                        height={100}
                        className={styles.logoImage}
                        priority
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
