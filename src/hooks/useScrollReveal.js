import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.3) => {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsActive(true);
                    // Optional: we can turn off the observer here if we only want it to animate *once*.
                    // But to replicate Indaco's resetting behavior, we can leave it watching and toggle state
                    // setIsActive(entry.isIntersecting); 
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isActive];
};
