import React, { useEffect, useState } from 'react';
import WorkSpanOne from './workSpanOne';
import Arrow from '../../../components/svg/arrow';
import { skillsOne } from '../../../constants';

export default function WorkOne({ isSwitchChecked }) {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const startScroll = 0.80 * viewportHeight;
            const scalingFactor = 1250;
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
            <span className={`absolute left-5 top-2.5 opacity-[.1] text-[9vw] font-lato ${isSwitchChecked ? 'blackS' : 'whiteS'}`}>01</span>
            <div className='worksPhotoOneMain absolute justify-center text-center flex opacity-1 bottom-auto'
                style={{
                    opacity: 1,
                    height: `${Math.min(55, scrollPercentage)}%`,
                }} >
                <div className="worksPhotoOne bg-cover z-[2] rounded"></div>
            </div>
            <div className="flex flex-col z-[1] h-full w-full inset-0 justify-center items-center absolute overflow-hidden mix-blend-difference">
                <div>
                    <WorkSpanOne />
                    <div className='w-full flex relative mx-auto items-center mt-[-1.5rem] justify-between text-white mix-blend-difference z-[9] gap-[70] sm:w-[95%]'>
                        <a href="https://github.com/nepatyres/GeoQuiz" target="_blank" className='worksA text-white font-switzerL mix-blend-difference no-underline items-center flex cursor-pointer'>Github
                            <Arrow />
                        </a>
                        <a href="https://geoquiz-ila7.onrender.com/" target="_blank" className='worksA text-white font-switzerL mix-blend-difference no-underline items-center flex cursor-pointer'>View Website
                            <Arrow />
                        </a>
                    </div>
                    <div className='relative flex justify-center w-full'>
                        <ul className='flex flex-row justify-center gap-1 p-0'>
                            {skillsOne.map((skill) => (
                                <li key={skill} className={`worksSkillsLi ${skill === skillsOne[skillsOne.length - 1] ? 'bg-dot8 text-black font-robotoM' : ''}`}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
