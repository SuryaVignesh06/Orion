import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './Eligibility.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Eligibility = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.section} id="eligibility">
            <div className={styles.container}>
                <h2 className={styles.title}>
                    <AnimatedText text="Eligibility" tag="span" isActive={isActive} delay={0} />
                    {' '}
                    <span style={{ color: 'var(--color-primary-red)' }}>
                        <AnimatedText text="Criteria." tag="span" isActive={isActive} delay={0.1} />
                    </span>
                </h2>

                <div className={styles.grid}>
                    <div className={`${styles.card} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.15s' }}>
                        <span className={styles.cardNumber}>01</span>
                        <h3 className={styles.cardTitle}>Academic Programs</h3>
                        <p className={styles.cardDesc}>
                            Students currently pursuing B.Tech, M.Tech, BCA, or MCA.
                        </p>
                    </div>

                    <div className={`${styles.card} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.25s' }}>
                        <span className={styles.cardNumber}>02</span>
                        <h3 className={styles.cardTitle}>Branches</h3>
                        <p className={styles.cardDesc}>
                            Primarily tailored for CSE, IT, and related tech domains.
                        </p>
                    </div>

                    <div className={`${styles.card} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.35s' }}>
                        <span className={styles.cardNumber}>03</span>
                        <h3 className={styles.cardTitle}>Prerequisites</h3>
                        <p className={styles.cardDesc}>
                            Basic programming knowledge is expected. Selected via an internal college screening process if required.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Eligibility;
