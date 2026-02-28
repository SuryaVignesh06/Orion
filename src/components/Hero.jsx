import React from 'react';
import styles from './Hero.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImg from '/hero.png';

const Hero = () => {
    const [ref, isActive] = useScrollReveal(0.1);

    return (
        <section ref={ref} className={styles.hero_section}>

            {/* Decorative random animated lines */}
            <svg className={`${styles.line_svg} ${isActive ? styles.draw : ''}`} viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                {/* Sweeping curves — top left area */}
                <path className={styles.line_a} d="M -20 200 Q 180 120 400 180 Q 550 220 600 300" />
                <path className={styles.line_b} d="M -40 280 Q 150 200 350 240 Q 480 270 560 330" />

                {/* Sweeping curves — top right area */}
                <path className={styles.line_a} style={{ animationDelay: '0.4s' }} d="M 1460 120 Q 1250 180 1080 240 Q 950 290 880 350" />
                <path className={styles.line_b} style={{ animationDelay: '0.6s' }} d="M 1460 200 Q 1300 230 1150 280 Q 1020 320 920 380" />

                {/* Bottom flowing curves */}
                <path className={styles.line_a} style={{ animationDelay: '0.8s' }} d="M -30 650 Q 200 600 400 580 Q 550 570 650 560" />
                <path className={styles.line_b} style={{ animationDelay: '1s' }} d="M 800 560 Q 1000 570 1200 610 Q 1350 640 1470 680" />

                {/* Growth curve — prominent */}
                <path className={styles.growth_curve} d="M 60 780 Q 250 700 440 600 Q 630 500 820 420 Q 1010 340 1200 280 Q 1320 240 1400 210" />

                {/* Small scattered lines */}
                <line className={styles.scatter_line} x1="120" y1="140" x2="180" y2="130" style={{ animationDelay: '1.5s' }} />
                <line className={styles.scatter_line} x1="200" y1="160" x2="240" y2="145" style={{ animationDelay: '1.7s' }} />
                <line className={styles.scatter_line} x1="1250" y1="150" x2="1310" y2="140" style={{ animationDelay: '1.9s' }} />
                <line className={styles.scatter_line} x1="1300" y1="180" x2="1350" y2="165" style={{ animationDelay: '2.1s' }} />
                <line className={styles.scatter_line} x1="150" y1="600" x2="210" y2="585" style={{ animationDelay: '2.3s' }} />
                <line className={styles.scatter_line} x1="1280" y1="620" x2="1340" y2="605" style={{ animationDelay: '2.5s' }} />

                {/* Decorative dots */}
                <circle className={`${styles.dot} ${isActive ? styles.dot_show : ''}`} cx="400" cy="180" r="3" style={{ animationDelay: '1.2s' }} />
                <circle className={`${styles.dot} ${isActive ? styles.dot_show : ''}`} cx="1080" cy="240" r="3" style={{ animationDelay: '1.4s' }} />
                <circle className={`${styles.dot} ${isActive ? styles.dot_show : ''}`} cx="440" cy="600" r="3" style={{ animationDelay: '1.8s' }} />
                <circle className={`${styles.dot} ${isActive ? styles.dot_show : ''}`} cx="1200" cy="610" r="3" style={{ animationDelay: '2s' }} />
                <circle className={`${styles.dot} ${isActive ? styles.dot_show : ''}`} cx="820" cy="420" r="4" style={{ animationDelay: '2.2s' }} />

                {/* Moving dot along growth curve */}
                <circle className={styles.traveling_dot} r="4">
                    <animateMotion dur="6s" begin="1s" repeatCount="indefinite" path="M 60 780 Q 250 700 440 600 Q 630 500 820 420 Q 1010 340 1200 280 Q 1320 240 1400 210" />
                </circle>
            </svg>

            {/* Connected nodes — top left */}
            <div className={`${styles.node_group} ${styles.nodes_tl} ${isActive ? styles.nodes_show : ''}`}>
                <span className={styles.node}></span>
                <span className={styles.node_line}></span>
                <span className={styles.node}></span>
                <span className={styles.node_line} style={{ width: '30px' }}></span>
                <span className={styles.node_dashed}></span>
            </div>

            {/* Headline + description — LEFT, stacked */}
            <div className={`${styles.text_block} ${isActive ? styles.elevate : ''}`}>
                <h1 className={styles.main_title}>
                    Experience the{' '}
                    <span className={styles.highlight_line}>corporate<br />engineering</span>{' '}
                    floor —{' '}
                    <span className={styles.italic_accent}>before</span>{' '}
                    graduation.
                </h1>
                <p className={`${styles.subtitle} ${isActive ? styles.sub_show : ''}`}>
                    Ship real products. Run agile sprints. Review production code. Build your portfolio with a structured, corporate-grade pipeline — in just 15 days.
                </p>
            </div>

            {/* Central Circle with Image */}
            <div className={`${styles.circle_wrapper} ${isActive ? styles.circle_show : ''}`}>
                <div className={styles.circle_ring}>
                    <div className={styles.pulse_ring}></div>
                    <div className={styles.pulse_ring2}></div>
                    <img src={heroImg} alt="Team building production-grade software" className={styles.hero_image} />
                </div>
            </div>

            {/* Floating cards */}
            <div className={`${styles.float_card} ${styles.float_top_right} ${isActive ? styles.card_show : ''}`} style={{ transitionDelay: '0.5s' }}>
                <div className={styles.card_check}>✓</div>
                <div>
                    <div className={styles.card_value}>15-Day Intensive</div>
                    <div className={styles.card_sub}>✓ Completed</div>
                </div>
            </div>

            <div className={`${styles.float_card} ${styles.float_mid_right} ${isActive ? styles.card_show : ''}`} style={{ transitionDelay: '0.65s' }}>
                <div className={styles.card_check}>✓</div>
                <div>
                    <div className={styles.card_value}>20+ Industry Tools</div>
                    <div className={styles.card_sub}>✓ Completed</div>
                </div>
            </div>

            <div className={`${styles.float_card} ${styles.float_bottom_left} ${isActive ? styles.card_show : ''}`} style={{ transitionDelay: '0.8s' }}>
                <div className={styles.card_label}>Career Growth</div>
                <div className={styles.card_value}>100%</div>
                <div className={styles.card_sub}>Placement Ready</div>
            </div>

            {/* CTA */}
            <div className={`${styles.cta_row} ${isActive ? styles.cta_show : ''}`}>
                <button className={styles.btn_primary} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply for Next Cohort
                </button>
            </div>

            {/* Bottom labels */}
            <div className={`${styles.bottom_labels} ${isActive ? styles.labels_show : ''}`}>
                <span className={styles.label_item}>Agile Sprints</span>
                <span className={styles.label_divider}>○</span>
                <span className={styles.label_item}>Code Reviews</span>
                <span className={styles.label_divider}>○</span>
                <span className={styles.label_item}>Deployment</span>
            </div>

        </section>
    );
};

export default Hero;
