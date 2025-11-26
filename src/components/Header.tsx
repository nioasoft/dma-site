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

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Desktop Nav */}
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

                {/* Mobile Menu Toggle */}
                <button
                    className={`${styles.toggleButton} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={styles.ctaButton}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        צור קשר
                    </Link>
                </div>

                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo-transparent.webp"
                        alt="DMA - בית חכם, אבטחה ותשתיות תקשורת"
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
