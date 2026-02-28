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
                    <p className={`${styles.body_text} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.3s', marginBottom: '2rem' }}>
                        Orionac is part of global startup support ecosystems including major technology and cloud innovation programs.
                    </p>
                    <div className={`${styles.partner_logos} ${isActive ? styles.show : ''}`} style={{ transitionDelay: '0.4s' }}>
                        <div className={styles.partner_logo}>
                            <img src="https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" alt="NVIDIA" />
                        </div>
                        <div className={styles.partner_logo}>
                            <img src="https://www.gstatic.com/devrel-devsite/prod/v0e0f589edd85502a40d78d7d0825db8ea5ef3b99ab4070381ee86977c9168730/cloud/images/cloud-logo.svg" alt="Google Cloud" />
                        </div>
                        <div className={styles.partner_logo}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
