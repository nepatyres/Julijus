import React, { useState, useEffect } from 'react';

export default function WorkSpanTwo({ isSwitchChecked }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = .8;
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
        <span className={`worksSpanTwo ${isVisible ? 'visible' : ''}`}>Carcarelt</span>
    )
}