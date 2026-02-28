import React from 'react';
import styles from './ContactFooter.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactFooter = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <footer ref={ref} className={styles.footer} id="contact">
            {/* CTA Banner */}
            <div className={styles.ctaBanner}>
                <p className={styles.ctaText} style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease'
                }}>
                    Transform academic talent into corporate capability.<br />Bring LiftUp to your institution.
                </p>
                <a href="mailto:support@orionac.in" className={styles.ctaBtn} style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
                    textDecoration: 'none', display: 'inline-block'
                }}>
                    Partner With Us
                </a>
            </div>

            {/* Footer Grid */}
            <div className={styles.footerGrid}>
                <div className={styles.footerCol}>
                    <h3 className={styles.footerLogo}>ORION.</h3>
                    <p className={styles.footerTagline}>
                        Orionac – Education Wing
                    </p>
                    <p className={styles.footerDesc}>
                        Next-generation technology company building intelligent systems, product ecosystems, and industry-driven solutions.
                    </p>
                </div>

                <div className={styles.footerCol}>
                    <h4 className={styles.colTitle}>Quick Links</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#curriculum">Curriculum</a></li>
                        <li><a href="#eligibility">Eligibility</a></li>
                        <li><a href="#certification">Certification</a></li>
                    </ul>
                </div>

                <div className={styles.footerCol}>
                    <h4 className={styles.colTitle}>Contact</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <span className={styles.contactLabel}>Email</span>
                            <a href="mailto:support@orionac.in">support@orionac.in</a>
                        </li>
                        <li>
                            <span className={styles.contactLabel}>Website</span>
                            <a href="https://www.orionac.in" target="_blank" rel="noopener noreferrer">www.orionac.in</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerCol}>
                    <h4 className={styles.colTitle}>Address</h4>
                    <p className={styles.addressText}>
                        A1, Amirtham Nagar<br />
                        Tirunelveli – Kanyakumari<br />
                        627016<br />
                        Tamil Nadu, India
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} Orionac. All rights reserved.</p>
                <div className={styles.bottomLinks}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
