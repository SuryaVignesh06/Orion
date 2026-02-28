import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './TalentNetwork.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TalentNetwork = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.section} id="talent-network">
            <div className={styles.container}>

                <div className={styles.leftColumn}>
                    <h2 className={styles.title}>
                        <AnimatedText text="Talent Pool &" tag="span" isActive={isActive} delay={0} />
                        <br />
                        <span style={{ color: 'var(--color-primary-red)' }}>
                            <AnimatedText text="Startup Network." tag="span" isActive={isActive} delay={0.1} />
                        </span>
                    </h2>
                    <p className={styles.subtitle} style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
                    }}>
                        Orionac acts as a bridge. We connect high-performing, execution-proven students directly with:
                    </p>
                    <div className={styles.listContainer}>
                        <div className={`${styles.listItem} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.25s' }}>• Seed & Series-A Startup Founders</div>
                        <div className={`${styles.listItem} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.3s' }}>• Emerging Deep-Tech Ventures</div>
                        <div className={`${styles.listItem} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.35s' }}>• Early-stage companies seeking pre-trained, adaptable engineering talent</div>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <h2 className={styles.title}>
                        <AnimatedText text="The Value Exchange." tag="span" isActive={isActive} delay={0.15} />
                    </h2>
                    <div className={styles.listContainer}>
                        <div className={`${styles.listItem} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.3s', color: 'var(--color-primary-red)' }}>
                            1. Startups bypass the training and onboarding phase and get candidates who already know the workflow.
                        </div>
                        <div className={`${styles.listItem} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.4s', color: 'var(--color-primary-red)' }}>
                            2. Students gain exclusive placement opportunities and valuable startup exposure.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TalentNetwork;
