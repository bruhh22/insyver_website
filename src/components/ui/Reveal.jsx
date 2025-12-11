import React, { useRef, useState, useEffect } from 'react';

const Reveal = ({ children, className = "", delay = 0, threshold = 0.1 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.unobserve(entry.target);
            }
        }, { threshold, rootMargin: '0px 0px -50px 0px' });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay, threshold]);

    return (
        <div ref={ref} className={`reveal-text ${isVisible ? 'visible' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Reveal;