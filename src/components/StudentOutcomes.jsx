import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './StudentOutcomes.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StudentOutcomes = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.container}>

                <div className={styles.headingWrapper}>
                    <h2 className={styles.title}>
                        <AnimatedText text="Student" tag="span" isActive={isActive} delay={0} />
                        {' '}
                        <span style={{ color: 'var(--color-primary-red)' }}>
                            <AnimatedText text="Outcomes." tag="span" isActive={isActive} delay={0.1} />
                        </span>
                    </h2>
                    <p className={`${styles.subtitle} ${isActive ? styles.fadeIn : ''}`}>
                        By the end of this intensive 15-day sprint, you won't just have theoretical knowledge. You will have a tangible shift in capability.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={`${styles.outcomeCard} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.15s' }}>
                        <div className={styles.cardNumber}>01</div>
                        <h3 className={styles.cardTitle}>Structured Project Output</h3>
                        <p className={styles.cardDesc}>
                            Complete 2 real-world product projects with properly documented, production-ready code.
                        </p>
                    </div>

                    <div className={`${styles.outcomeCard} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.25s' }}>
                        <div className={styles.cardNumber}>02</div>
                        <h3 className={styles.cardTitle}>Corporate Workflow Mastery</h3>
                        <p className={styles.cardDesc}>
                            Understand sprint-based development, daily standup synchronization, precise code reviews, and remote version control.
                        </p>
                    </div>

                    <div className={`${styles.outcomeCard} ${styles.highlightCard} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.35s' }}>
                        <div>
                            <h3 className={styles.cardTitle} style={{ fontSize: '1.75rem' }}>Proof of Execution</h3>
                            <p className={styles.cardDesc} style={{ marginBottom: '0' }}>
                                A verifiable Performance Evaluation Report demonstrating active completion of industry tasks.
                            </p>
                        </div>
                        <ul className={styles.highlightList}>
                            <li>Professional Git History</li>
                            <li>Jira/Linear Ticket Resolution Metrics</li>
                            <li>Live Deployed Links</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StudentOutcomes;
