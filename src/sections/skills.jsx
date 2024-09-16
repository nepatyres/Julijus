import React, { useRef } from 'react';
import { footer, skills } from '../constants';
import Text3d from '../components/3d';
import LinkedinSvg from '../components/svg/linkedin';
import GithubSvg from '../components/svg/github';

export default function Footer({ isSwitchChecked }) {

    const plane = useRef(null);
    const maxRotate = 45;
    const manageMouseMove = (e) => {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight
        const perspective = window.innerWidth * 4;
        const rotateX = maxRotate * x - maxRotate / 2;
        const rotateY = (maxRotate * y - maxRotate / 2) * -1;
        plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
    }

    return (
        <>
            <div className={`min-h-screen w-full absolute mix-blend-difference flex flex-col ${isSwitchChecked ? 'bg-footBW' : 'bg-footBB'}`}>

                <span className={`flex opacity-[.1] lg:pl-10 top-[10px] font-switzer text-5xl lg:text-[60px] py-8 md-pl-10 ${isSwitchChecked ? 'text-whiteS' : 'text-blackS'}`}>Working with</span>

                <div onMouseMove={(e) => { manageMouseMove(e) }} className='h-auto flex w-[80%] lg:w-[70%] mx-auto'>
                    <div ref={plane} className='flex flex-col lg:py-20'>
                        {skills.map((skill, i) => (
                            <Text3d key={i} primary={skill.toUpperCase()} secondary={skill.toUpperCase()} />
                        ))}
                    </div>
                </div>

                <div className='inset-x-0 bottom-0 w-full lg:w-[90%] mx-auto bg-transparent text-center px-5 lg:px-10 pb-0 mt-auto  mix-blend-difference'>
                    <div className='footerTag border-t-white-1 py-2.5 width-full items-center m-0 flex-col '>
                        <span className='justify-start flex font-switzerL text-[15px] ml-[15px] text-dot9'>contactjulijus@gmail.com</span>
                        <span className='text-dot6 font-switzerL text-[15px]'>Designed and developed by <a className='dot9 decoration-none cursor-pointer text-white/75' target='_blank' rel="noreferrer" href='https://julijus.com'>Julijus</a></span>
                        <div className='text-white justify-end flex gap-[5px] mr-[15px]'>
                            <a className='fill-white cursor-pointer decoration-none' href="https://www.linkedin.com/in/nepatyres/" target='_blank' rel="noreferrer">
                                <LinkedinSvg />
                            </a>
                            <a className='fill-white decoration-none cursor-pointer' href="https://github.com/nepatyres" target='_blank' rel="noreferrer">
                                <GithubSvg />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}