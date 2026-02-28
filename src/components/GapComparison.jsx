import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './GapComparison.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const GapComparison = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.gapSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionLabel}>Why Orionac Started the Education Wing</span>
                    <h2 className={styles.title}>
                        <AnimatedText text="Students graduate with degrees." tag="span" isActive={isActive} delay={0} />
                        {' '}
                        <span className={styles.highlight}>
                            <AnimatedText text="Companies Hire" tag="span" isActive={isActive} delay={0.1} />
                        </span>
                        <br />
                        <AnimatedText text="based on experience." tag="span" isActive={isActive} delay={0.2} />
                    </h2>
                </div>

                <div className={styles.body} style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
                }}>
                    <p>There is a structural gap between academic learning and industry execution.</p>
                    <p style={{ marginTop: '1rem' }}>Traditional education emphasizes theory. Industry demands delivery, accountability, and tool-based workflow.</p>
                    <p style={{ marginTop: '1rem', color: 'var(--color-primary-red)' }}>LiftUp VIBE Coding was created to bridge that gap through structured corporate simulation.</p>
                </div>
            </div>
        </section>
    );
};

export default GapComparison;
