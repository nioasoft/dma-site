'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Handle Escape key to close mobile menu
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Desktop Nav */}
                <nav className={styles.nav} aria-label="ניווט ראשי">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                            aria-current={pathname === item.href ? 'page' : undefined}
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
                    aria-label={isMobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>

                {/* Mobile Nav Overlay */}
                <nav
                    id="mobile-menu"
                    className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}
                    aria-label="תפריט נייד"
                    aria-hidden={!isMobileMenuOpen}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                            onClick={closeMobileMenu}
                            aria-current={pathname === item.href ? 'page' : undefined}
                            tabIndex={isMobileMenuOpen ? 0 : -1}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={styles.ctaButton}
                        onClick={closeMobileMenu}
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                        צור קשר
                    </Link>
                </nav>

                <Link href="/" className={styles.logo} aria-label="DMA - חזרה לדף הבית">
                    <Image
                        src="/logo-transparent.webp"
                        alt="DMA - בית חכם, אבטחה ותשתיות תקשורת"
                        width={150}
                        height={60}
                        className={styles.logoImage}
                        priority
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
