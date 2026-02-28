import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './ExecutionTimeline.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ExecutionTimeline = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.container}>

                <div className={styles.headingWrapper}>
                    <h2 className={styles.title}>
                        <AnimatedText text="How LiftUp Works" tag="span" isActive={isActive} delay={0} />
                        {' '}
                        <span style={{ color: 'var(--color-primary-red)' }}>
                            <AnimatedText text="(15-Day Structure)" tag="span" isActive={isActive} delay={0.1} />
                        </span>
                    </h2>
                </div>

                <div className={styles.timeline}>

                    <div className={`${styles.timelineItem} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.15s' }}>
                        <span className={styles.itemLabel}>Execution Model</span>
                        <h3 className={styles.itemTitle}>2 On-Site Industry Trainers</h3>
                        <p className={styles.itemDesc}>
                            Conduct daily standups, assign sprint tasks, monitor project execution, and evaluate discipline and performance directly on-campus.
                        </p>
                    </div>

                    <div className={`${styles.timelineItem} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.3s' }}>
                        <span className={styles.itemLabel}>Leadership Review</span>
                        <h3 className={styles.itemTitle}>1 Senior Simulation Manager</h3>
                        <p className={styles.itemDesc}>
                            Evaluates students as active contributors via online monitoring, providing industry-grade feedback and appraisal-style assessment.
                        </p>
                    </div>

                    <div className={`${styles.timelineItem} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.45s' }}>
                        <span className={styles.itemLabel}>Student Experience</span>
                        <h3 className={styles.itemTitle}>Corporate Exposure</h3>
                        <p className={styles.itemDesc}>
                            Direct exposure to senior-level corporate expectations, structured review mechanisms, and professional performance evaluation.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ExecutionTimeline;
