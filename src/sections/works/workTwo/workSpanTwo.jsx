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
        <span className={`font-antonio uppercase text-center flex text-white mix-blend-difference text-[22vw] lg:text-[23vw] xl:text-[21vw] xl:leading-[32vw] 2xl:text-[20vw] ${isVisible ? 'visible' : ''}`}>Carcarelt</span>
    )
}