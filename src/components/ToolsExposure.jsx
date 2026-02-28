import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './ToolsExposure.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const toolSet1 = [
    { name: "Git", accent: false },
    { name: "GitHub", accent: true },
    { name: "JIRA", accent: false },
    { name: "Bitbucket", accent: false },
    { name: "VS Code", accent: false },
    { name: "Postman", accent: true },
    { name: "Docker", accent: false },
    { name: "AWS", accent: true },
];

const toolSet2 = [
    { name: "Confluence", accent: false },
    { name: "Figma", accent: true },
    { name: "Slack", accent: false },
    { name: "Jenkins", accent: false },
    { name: "Linux Bash", accent: true },
    { name: "SonarQube", accent: false },
    { name: "Azure DevOps", accent: false },
    { name: "MySQL", accent: true },
];

const renderMarqueeItems = (items) => {
    return [...items, ...items, ...items].map((tool, index) => (
        <div key={index} className={`${styles.toolChip} ${tool.accent ? styles.accent : ''}`}>
            {tool.name}
        </div>
    ));
};

const ToolsExposure = () => {
    const [ref, isActive] = useScrollReveal(0.2);

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                    <AnimatedText text="Industry Tools" tag="span" isActive={isActive} delay={0} />
                    {' '}
                    <span style={{ color: 'var(--color-primary-red)' }}>
                        <AnimatedText text="Exposure." tag="span" isActive={isActive} delay={0.1} />
                    </span>
                </h2>
                <p className={`${styles.subtitle} ${isActive ? styles.fadeIn : ''}`}>
                    No more "Hello World" scripts. Experience 20+ professional tools used by senior architects and product managers.
                </p>
            </div>

            <div className={styles.marqueeContainer}>
                <div className={`${styles.marqueeRow} ${styles.scrollLeft}`}>
                    {renderMarqueeItems(toolSet1)}
                </div>

                <div className={`${styles.marqueeRow} ${styles.scrollRight}`}>
                    {renderMarqueeItems(toolSet2)}
                </div>
            </div>
        </section>
    );
};

export default ToolsExposure;
