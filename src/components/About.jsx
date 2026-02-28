import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './About.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.about_section} id="about">
            <div className={styles.container}>

                <div className={styles.left_content}>
                    <h2 className={styles.sectionHeading}>
                        <AnimatedText text="Who We Are" tag="span" isActive={isActive} delay={0} />
                    </h2>
                    <p className={`${styles.body_text} ${isActive ? styles.show : ''}`}>
                        Orionac is a next-generation <span className="highlight-yellow">technology company</span> focused on building intelligent systems, product ecosystems, and industry-driven solutions.
                        <br /><br />
                        We operate at the intersection of: Product Development, Artificial Intelligence, Startup Ecosystem Enablement, and Industry Simulation Learning.
                        <br /><br />
                        Through Orionac Education, we introduce real-world corporate experience into academic institutions.
                    </p>
                </div>

                <div className={styles.right_content}>
                    <h2 className={styles.sectionHeading} style={{ color: 'var(--color-primary-red)' }}>
                        <AnimatedText text="Supported By" tag="span" isActive={isActive} delay={0.15} />
                    </h2>
                    <p className={`${styles.body_text} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.3s' }}>
                        Orionac is part of global startup support ecosystems including major technology and cloud innovation programs.
                        <br /><br />
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>(Official co-branding logos to be placed here.)</span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
