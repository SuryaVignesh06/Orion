import React from 'react';
import styles from './Hero.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
    const [ref, isActive] = useScrollReveal(0.1);

    return (
        <section ref={ref} className={styles.hero_section}>
            <div className={styles.hero_content}>



                <h1 className={styles.main_title}>
                    <span className={`${styles.word} ${isActive ? styles.elevate : ''}`} style={{ transitionDelay: '0.1s' }}>AN INDUSTRY-SIMULATED</span>
                    <br />
                    <span className={`${styles.word} ${isActive ? styles.elevate : ''} ${styles.highlightSerif}`} style={{ transitionDelay: '0.2s' }}>cohort</span>
                    <span className={`${styles.word} ${isActive ? styles.elevate : ''}`} style={{ transitionDelay: '0.3s' }}> EXPERIENCE.</span>
                </h1>

                <p className={`${styles.subtitle} ${isActive ? styles.fade_in : ''}`}>
                    By Orionac – For Education.
                    <br />Experience corporate life before graduation. <span className="highlight-yellow">15-Day Product Development Simulation Program for UG & PG Students.</span>
                </p>

                <div className={`${styles.cta_container} ${isActive ? styles.fade_in : ''}`}>
                    <button className={styles.btn_primary} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Apply for Next Cohort</button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
