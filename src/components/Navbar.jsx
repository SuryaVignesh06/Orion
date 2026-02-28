import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo_container}>
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ textDecoration: 'none' }}>
                    <h1 className={styles.logo_text}>ORION.</h1>
                </a>
            </div>

            <div className={styles.nav_menu}>
                <a href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')} className={styles.nav_item}>Curriculum</a>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={styles.nav_item}>About</a>
            </div>

            <div className={styles.actions}>
                <button className={styles.btnSecondary} onClick={(e) => scrollToSection(e, 'contact')}>
                    Partner With Us
                </button>
                <button className={styles.btnPrimary} onClick={(e) => scrollToSection(e, 'contact')}>
                    APPLY NOW
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
