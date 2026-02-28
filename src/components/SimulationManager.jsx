import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './About.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SimulationManager = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.about_section}>
            <div className={styles.container}>

                <div className={styles.left_content}>
                    <h2 className={styles.sectionHeading} style={{ color: 'var(--color-primary-red)' }}>
                        <AnimatedText text="Dr. K. C. Ganesh" tag="span" isActive={isActive} delay={0} />
                    </h2>
                    <p className={`${styles.body_text} ${isActive ? styles.show : ''}`}>
                        Senior engineering leader with over 15 years of experience in R&D, simulation, and advanced product development within high-performance manufacturing environments.
                        <br /><br />
                        Currently serving as Senior Manager – R&D at AVTEC Limited, he leads enterprise CAE strategy, transmission development, and cross-functional engineering programs for global customers.
                    </p>
                </div>

                <div className={styles.right_content}>
                    <h2 className={styles.sectionHeading}>
                        <AnimatedText text="Online Simulation Manager" tag="span" isActive={isActive} delay={0.15} />
                    </h2>
                    <p className={`${styles.body_text} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.3s' }}>
                        <span className="highlight-yellow">In LiftUp VIBE Coding, he serves as the Online Simulation Manager, where he:</span><br /><br />
                        • Conducts corporate-style review meetings.<br />
                        • Assigns strategic-level deliverables.<br />
                        • Monitors performance through professional project tools.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default SimulationManager;
