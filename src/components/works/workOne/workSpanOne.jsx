import React, { useState, useEffect } from 'react';

export default function WorkSpanOne({ isSwitchChecked }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 0.5;
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;
            const triggerPosition = documentHeight * threshold - windowHeight;

            setIsVisible(scrollPosition > triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <span className={`worksSpanOne ${isVisible ? 'visible' : ''}`}>GeoQuiz</span>
    );
}