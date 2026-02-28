import React from 'react';
import styles from './Certification.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Certification = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.certSection} id="certification">
            <div className={styles.container}>

                <div className={styles.content}>
                    <span className={styles.sectionLabel} style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                        transition: 'opacity 0.6s ease, transform 0.6s ease'
                    }}>Industry Certification</span>
                    <h2 className={styles.title} style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s'
                    }}>
                        Proof of <span className={styles.highlight}>Execution</span>
                    </h2>
                    <p className={styles.subtitle} style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s'
                    }}>
                        Upon successful completion, participants receive a verifiable credential backed by Orionac matching actual industry thresholds.
                    </p>

                    <ul className={styles.featuresList} style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s'
                    }}>
                        <li>Unique Output Reference Links</li>
                        <li>Simulation Manager Assessment</li>
                        <li>Corporate-Grade Endorsement</li>
                    </ul>
                </div>

                <div className={styles.visual} style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
                }}>
                    <div className={styles.certificateMockup}>
                        <div className={styles.certHeader}>
                            <div className={styles.certLogo}>ORIONAC</div>
                            <div className={styles.certId}>ID: VIBE-202X-9482A</div>
                        </div>
                        <div className={styles.certBody}>
                            <h5>CERTIFICATE OF EXECUTION</h5>
                            <h2>This confirms that</h2>
                            <div className={styles.certName}>[ Participant Name ]</div>
                            <p>Has successfully completed the 15-Day LiftUp VIBE Coding Industrial Simulation Program, demonstrating proficiency in Agile workflows, team collaboration, and modern software deployment.</p>
                        </div>
                        <div className={styles.certFooter}>
                            <div className={styles.signatureBlock}>
                                <div className={styles.signature}>Validated</div>
                                <div className={styles.signName}>Dr. K. C. Ganesh</div>
                                <div className={styles.signTitle}>Program Director</div>
                            </div>
                            <div className={styles.seal}>
                                <div className={styles.sealInner}>VIBE<br />VERIFIED</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certification;
