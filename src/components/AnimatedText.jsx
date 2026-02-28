import React from 'react';

const AnimatedText = ({ text = "", highlight = false, isActive = false, delay = 0, tag = 'h1' }) => {
    const Tag = tag;
    const style = {
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}s`,
        willChange: 'transform, opacity',
    };

    const className = highlight ? 'clip_on_enter' : '';

    return (
        <Tag className={className} style={style}>
            {text}
        </Tag>
    );
};

export default AnimatedText;
