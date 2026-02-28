import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './Curriculum.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Curriculum = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.section} id="curriculum">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <AnimatedText text="What you'll learn in this Cohort" tag="span" isActive={isActive} delay={0} />
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* Card 1: Hero Span — Tool Integration Pipeline */}
                    <div className={`${styles.card} ${styles.heroCard} ${isActive ? styles.visible : ''}`} style={{ transitionDelay: '0.1s' }}>
                        <div className={styles.bgGlow}></div>
                        <div>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardNumber}>1</span>
                                <h3 className={styles.cardTitle}>Tool Integration<br />Pipeline</h3>
                            </div>
                            <p className={styles.cardDesc}>
                                Master the exact developer toolchain used by product teams at top tech companies — from day one.
                            </p>
                            <button className={styles.joinBtn} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Apply Now</button>
                        </div>

                        <div>
                            <div className={styles.iconsRow}>
                                <div className={styles.toolIcon} style={{ color: '#f34f29', borderColor: '#3d2017' }}>Git</div>
                                <div className={styles.toolIcon} style={{ color: '#2496ed', borderColor: '#173a5e' }}>{'\u{1F433}'}</div>
                                <div className={styles.toolIcon} style={{ color: '#0052cc', borderColor: '#1a2a4a' }}>Jira</div>
                            </div>
                            <div className={styles.innerBox}>
                                <ul className={styles.bulletList}>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletIcon}>+</span>
                                        <span>Professional Git & GitHub workflows</span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletIcon}>+</span>
                                        <span>Environment configuration (Docker/AWS)</span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletIcon}>+</span>
                                        <span>Jira/Linear agile sprint setup</span>
                                    </li>
                                    <li className={styles.bulletItem}>
                                        <span className={styles.bulletIcon}>+</span>
                                        <span>API testing & Postman standardizations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Core Execution Sprints */}
                    <div className={`${styles.card} ${styles.subCard} ${isActive ? styles.visible : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <div className={styles.bgLine}></div>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardNumber}>2</span>
                            <h3 className={styles.cardTitle}>Core Execution<br />Sprints</h3>
                        </div>
                        <ul className={styles.bulletList}>
                            <li className={styles.bulletItem}>
                                <span className={styles.bulletIcon}>+</span>
                                <span>Translating Figma UI into production code</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <span className={styles.bulletIcon}>+</span>
                                <span>Backend orchestration &<br />DB connection</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <span className={styles.bulletIcon}>+</span>
                                <span>Handling Git merge conflicts</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <span className={styles.bulletIcon}>+</span>
                                <span>Daily velocity tracking</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 3: Corporate Review */}
                    <div className={`${styles.card} ${styles.subCard} ${isActive ? styles.visible : ''}`} style={{ transitionDelay: '0.3s' }}>
                        <div className={styles.bgGlow}></div>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardNumber}>3</span>
                            <h3 className={styles.cardTitle}>Corporate Review<br />& Deployment</h3>
                        </div>
                        <ul className={styles.bulletList}>
                            <li className={styles.bulletItem}>
                                <span className={styles.bulletIcon}>+</span>
                                <span>Appraisal-style code review</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <span className={styles.bulletIcon}>+</span>
                                <span>Senior Manager feedback loop</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <span className={styles.bulletIcon}>+</span>
                                <span>Live deployment verification</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <span className={styles.bulletIcon}>+</span>
                                <span>Final "Go/No-Go" delivery</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 4: Product Simulation */}
                    <div className={`${styles.card} ${styles.subCard} ${isActive ? styles.visible : ''}`} style={{ transitionDelay: '0.4s' }}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardNumber}>4</span>
                            <h3 className={styles.cardTitle}>
                                Real Product<br />
                                <span className={styles.creativeStudio}>Simulation</span>
                            </h3>
                        </div>
                        <p className={styles.studioDesc}>
                            Build 2 serious experiential projects with structured repository pipelines, defined sprint roles, and live execution tracking.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Curriculum;
