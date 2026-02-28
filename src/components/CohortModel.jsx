import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './CohortModel.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CohortModel = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.cohortSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <AnimatedText text="Why this cohort?" tag="span" isActive={isActive} delay={0} />
                    </h2>
                </div>

                <div className={`${styles.diagramWrapper} ${isActive ? styles.visible : ''}`}>
                    {/* Left Node */}
                    <div className={styles.nodeLeft}>
                        <span className={styles.nodeTop}>Learn the</span>
                        <span className={styles.nodeBottom}>Skill</span>
                    </div>

                    {/* Left to Middle SVGs */}
                    <svg className={styles.svgConnectors} viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Static Background Paths */}
                        <path className={styles.staticPath} d="M 0 50 C 50 50, 50 12.5, 100 12.5" />
                        <path className={styles.staticPath} d="M 0 50 C 50 50, 50 37.5, 100 37.5" />
                        <path className={styles.staticPath} d="M 0 50 C 50 50, 50 62.5, 100 62.5" />
                        <path className={styles.staticPath} d="M 0 50 C 50 50, 50 87.5, 100 87.5" />

                        {/* Animated Foreground Paths */}
                        <path className={`${styles.animatedPath} ${styles.path1}`} d="M 0 50 C 50 50, 50 12.5, 100 12.5" pathLength="100" strokeDasharray="30 100" />
                        <path className={`${styles.animatedPath} ${styles.path2}`} d="M 0 50 C 50 50, 50 37.5, 100 37.5" pathLength="100" strokeDasharray="30 100" />
                        <path className={`${styles.animatedPath} ${styles.path3}`} d="M 0 50 C 50 50, 50 62.5, 100 62.5" pathLength="100" strokeDasharray="30 100" />
                        <path className={`${styles.animatedPath} ${styles.path4}`} d="M 0 50 C 50 50, 50 87.5, 100 87.5" pathLength="100" strokeDasharray="30 100" />
                    </svg>

                    {/* Middle Nodes */}
                    <div className={styles.nodesMiddle}>
                        <div className={styles.midNode}>Accountability</div>
                        <div className={styles.midNode}>Team Collaboration</div>
                        <div className={styles.midNode}>Deadline Discipline</div>
                        <div className={styles.midNode}>Real Execution Pressure</div>
                    </div>

                    {/* Middle to Right SVGs */}
                    <svg className={styles.svgConnectors} viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Static Background Paths */}
                        <path className={styles.staticPath} d="M 0 12.5 C 50 12.5, 50 50, 100 50" />
                        <path className={styles.staticPath} d="M 0 37.5 C 50 37.5, 50 50, 100 50" />
                        <path className={styles.staticPath} d="M 0 62.5 C 50 62.5, 50 50, 100 50" />
                        <path className={styles.staticPath} d="M 0 87.5 C 50 87.5, 50 50, 100 50" />

                        {/* Animated Foreground Paths */}
                        <path className={`${styles.animatedPath} ${styles.path1}`} d="M 0 12.5 C 50 12.5, 50 50, 100 50" pathLength="100" strokeDasharray="30 100" />
                        <path className={`${styles.animatedPath} ${styles.path2}`} d="M 0 37.5 C 50 37.5, 50 50, 100 50" pathLength="100" strokeDasharray="30 100" />
                        <path className={`${styles.animatedPath} ${styles.path3}`} d="M 0 62.5 C 50 62.5, 50 50, 100 50" pathLength="100" strokeDasharray="30 100" />
                        <path className={`${styles.animatedPath} ${styles.path4}`} d="M 0 87.5 C 50 87.5, 50 50, 100 50" pathLength="100" strokeDasharray="30 100" />
                    </svg>

                    {/* Right Node */}
                    <div className={styles.nodeRight}>
                        <span className={styles.nodeTop}>Career</span>
                        <span className={styles.nodeBottom}>Growth</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CohortModel;
