import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './ProductSimulation.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
    { text: "2 Serious Experiential Projects", color: 'var(--color-text-main)' },
    { text: "Structured Repository Pipeline", color: 'var(--color-primary-red)' },
    { text: "Defined Sprint Roles", color: 'var(--color-text-main)' },
    { text: "Live Execution Tracking", color: 'var(--color-primary-red)' },
];

const ProductSimulation = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.product_simulation}>
            <div className={styles.featureList}>
                {features.map((feat, i) => (
                    <div key={i} className={styles.featureItem} style={{ color: feat.color }}>
                        <AnimatedText text={feat.text} tag="h3" isActive={isActive} delay={i * 0.1} />
                    </div>
                ))}
            </div>

            <p className={`${styles.footerText} ${isActive ? styles.show : ''}`}>
                No vague assignments. No theoretical-only learning.
            </p>
        </section>
    );
};

export default ProductSimulation;
