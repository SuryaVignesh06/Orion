import React from 'react';
import styles from './CollegeBenefits.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CollegeBenefits = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    const benefits = [
        {
            title: "Enhanced Placement Readiness",
            desc: "Produces execution-ready candidates, immediately improving pre-placement and day-zero hiring metrics."
        },
        {
            title: "Elevated Industry Credibility",
            desc: "Positions the institution as a forward-thinking academic center running rigorous corporate-level simulation programs."
        },
        {
            title: "Zero Operational Overhead",
            desc: "Orionac provides the infrastructure, trainers, and workflows. Institutions simply provide the motivated student base."
        }
    ];

    return (
        <section ref={ref} className={styles.benefitsSection} id="institutions">
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.sectionLabel} style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease'
                    }}>9. Benefits for Institutions</span>
                    <h2 className={styles.title} style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s'
                    }}>
                        Why <span className={styles.highlight}>Colleges</span> Partner With Us
                    </h2>
                    <p className={styles.subtitle} style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s'
                    }}>
                        Bridging the gap between the campus and the corporate world elevates the institution's standing and directly impacts career outcomes.
                    </p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={`${styles.benefitCard} ${isActive ? styles.show : ''}`} style={{ transitionDelay: `${0.2 + index * 0.1}s` }}>
                            <div className={styles.cardNumber}>0{index + 1}</div>
                            <h3 className={styles.cardTitle}>{benefit.title}</h3>
                            <p className={styles.cardDesc}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CollegeBenefits;
