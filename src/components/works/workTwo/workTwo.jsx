import React, { useEffect, useState } from 'react';
import './workTwo.css';
import WorkSpanTwo from './workSpanTwo';

export default function workOne({ isSwitchChecked }) {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const startScroll = viewportHeight + 0.8 * viewportHeight;
            const scalingFactor = 550;
            const maxScroll = document.documentElement.scrollHeight - viewportHeight;
            const percentage = ((scrollY - startScroll) / (maxScroll - startScroll)) * scalingFactor;

            setScrollPercentage(Math.max(0, Math.min(100, percentage)));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`worksSlideContainer ${isSwitchChecked ? 'slideLight' : 'slideDark'}`}>
            <span className={`workOneSpan ${isSwitchChecked ? 'blackS' : 'whiteS'}`}>02</span>
            <div className="worksPhotoTwoMain"
                style={{
                    opacity: 1,
                    height: `${Math.min(55, scrollPercentage)}%`,
                }}>
                <div className="worksPhotoTwo"></div>
            </div>
            <div className="worksContent">
                <div>
                    <WorkSpanTwo />
                    <div className='worksContentLinks'>
                        <a href="https://github.com/nepatyres/Carcarelt" target="_blank" className='worksA'>Github
                            <svg className='worksContentSvg' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill='#fff' margin='0'>
                                <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" strokeWidth="1" />
                            </svg>
                        </a>
                        <a href="https://nepatyres.github.io/Carcarelt/" target="_blank" className='worksA'>View Website
                            <svg className='worksContentSvg' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill='#fff' margin='0'>
                                <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" strokeWidth="1" />
                            </svg>
                        </a>
                    </div>
                    <div className='worksSkills'>
                        <ul className='worksSkillsUl'>
                            <li className='worksSkillsLiTwo'>Design</li>
                            <li className='worksSkillsLiTwo'>Development</li>
                            <li className={`worksSkillsLiTwo ${isSwitchChecked ? 'yearLight' : 'yearDark'}`}>2023</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}