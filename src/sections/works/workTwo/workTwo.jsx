import React, { useEffect, useState } from 'react';
import WorkSpanTwo from './workSpanTwo';
import Arrow from '../../../components/svg/arrow';
import { skillsTwo } from '../../../constants';

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
        <div className={`h-screen w-full justify-center items-center flex sticky top-0 ${isSwitchChecked ? 'slideLight' : 'slideDark'}`}>
            <span className={`absolute left-5 top-2.5 opacity-[.1] text-[9vw] font-lato ${isSwitchChecked ? 'blackS' : 'whiteS'}`}>02</span>
            <div className="worksPhotoTwoMain absolute justify-center text-center flex opacity-1 bottom-auto"
                style={{
                    opacity: 1,
                    height: `${Math.min(55, scrollPercentage)}%`,
                }}>
                <div className="worksPhotoTwo z-[2] bg-cover rounded"></div>
            </div>
            <div className="flex flex-col z-[1] h-full w-full inset-0 justify-center items-center absolute overflow-hidden mix-blend-difference">
                <div>
                    <WorkSpanTwo />
                    <div className='w-full flex relative mx-auto items-center mt-[-1.5rem] justify-between text-white mix-blend-difference z-[9] gap-[70] sm:w-[95%]'>
                        <a href="https://github.com/nepatyres/Carcarelt" target="_blank" className='worksA text-white font-switzerL mix-blend-difference no-underline items-center flex cursor-pointer'>Github
                            <Arrow />
                        </a>
                        <a href="https://nepatyres.github.io/Carcarelt/" target="_blank" className='worksA text-white font-switzerL mix-blend-difference no-underline items-center flex cursor-pointer'>View Website
                            <Arrow />
                        </a>
                    </div>
                    <div className='relative flex justify-center w-full'>
                        <ul className='flex flex-row justify-center gap-1 p-0'>
                            {skillsTwo.map((skill) => (
                                <li key={skill} className={`worksSkillsLi ${skill === skillsTwo[skillsTwo.length - 1] ? 'bg-dot8 text-black font-robotoM' : ''}`}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}