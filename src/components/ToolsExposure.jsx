import React from 'react';
import AnimatedText from './AnimatedText';
import styles from './ToolsExposure.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const toolSet1 = [
    { name: "JIRA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Linear", icon: "https://cdn.simpleicons.org/linear/white" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
    { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const toolSet2 = [
    { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Notion", icon: "https://cdn.simpleicons.org/notion/white" },
    { name: "Confluence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
    { name: "Asana", icon: "https://cdn.simpleicons.org/asana" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/white" },
];

const renderMarqueeItems = (items) => {
    return [...items, ...items, ...items].map((tool, index) => (
        <div key={index} className={styles.toolChip}>
            <img src={tool.icon} alt={tool.name} className={`${styles.toolIcon} ${tool.invert ? styles.invertIcon : ''}`} />
            <span className={styles.toolName}>{tool.name}</span>
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
                    <span className={styles.titleAccent}>
                        <AnimatedText text="Exposure." tag="span" isActive={isActive} delay={0.1} />
                    </span>
                </h2>
                <p className={`${styles.subtitle} ${isActive ? styles.fadeIn : ''}`}>
                    Project management systems, version control platforms, code repositories, communication tools, documentation frameworks, and sprint tracking systems.
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
