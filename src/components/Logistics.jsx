import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './Logistics.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Logistics = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.logisticsSection} id="logistics">
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.sectionLabel}>For Host Institution</span>
                    <h2 className={styles.title}>
                        <AnimatedText text="Logistics & " tag="span" isActive={isActive} delay={0} />
                        <span className={styles.highlight}>
                            <AnimatedText text="Requirements" tag="span" isActive={isActive} delay={0.1} />
                        </span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    <div className={`${styles.logisticCard} ${isActive ? 'scroll-reveal visible' : ''}`} style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease 0.1s' }}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>01</div>
                            <h3>Infrastructure</h3>
                        </div>
                        <ul className={styles.requirementsList}>
                            <li>Computer Lab Access</li>
                            <li>Seminar Hall</li>
                            <li>Writing Board / Smart Board</li>
                        </ul>
                    </div>

                    <div className={`${styles.logisticCard}`} style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease 0.2s' }}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>02</div>
                            <h3>Hardware & Connectivity</h3>
                        </div>
                        <ul className={styles.requirementsList}>
                            <li>Student Laptops</li>
                            <li>Stable Internet Connectivity</li>
                        </ul>
                    </div>

                    <div className={`${styles.logisticCard}`} style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease 0.3s' }}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>03</div>
                            <h3>Batch Size</h3>
                        </div>
                        <ul className={styles.requirementsList}>
                            <li><strong>30–40 Students</strong> recommended</li>
                            <li>Ensures precise 1-on-1 performance review</li>
                        </ul>
                    </div>

                    <div className={`${styles.logisticCard}`} style={{ opacity: isActive ? 1 : 0, transform: isActive ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease 0.4s' }}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>04</div>
                            <h3>Duration</h3>
                        </div>
                        <ul className={styles.requirementsList}>
                            <li>15-day on-campus program</li>
                            <li>Full-time engagement required</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Logistics;
