import React, { useLayoutEffect, useRef } from 'react';
import Arrow from '../components/svg/arrow';
import { works } from '../constants';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Works({ isSwitchChecked }) {

    const refs = useRef(works.map(() => ({ image: null, name: null })));

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        refs.current.forEach((ref, i) => {
            const imageWidth = ref.image.offsetWidth;
            const top = { 250: '350', 300: '325', 350: '300', 400: '275', 450: '250', 500: '230' }
            const imageTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.image,
                    start: 'bottom bottom',
                    end: `top-=${top[imageWidth] || ''} top`,
                    scrub: 1,
                    // markers: true
                }
            });

            imageTimeline.fromTo(ref.image,
                { clipPath: 'inset(0 0 100% 0)' },
                { clipPath: 'inset(0 0 0% 0)' }
            );

            const nameTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.name,
                    start: 'top-=700 center',
                    end: '+=400px',
                    scrub: 1,
                    // markers: true
                }
            });

            nameTimeline.fromTo(ref.name,
                { y: '40vh' },
                { y: '0vh' }
            );

        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className='h-full block'>
            <div className={`h-full relative w-full z-10 ${isSwitchChecked ? 'bg-[#fcfcfc]' : 'bg-[#030303]'}`}>
                {works.map((work, i) => (
                    <div key={i} className="h-full top-0 flex-col mx-auto flex justify-center items-center sticky">
                        <div className={`h-screen w-full justify-center items-center flex sticky top-0 ${isSwitchChecked ? 'slideLight' : 'slideDark'}`}>
                            <span className='absolute left-5 top-2.5 text-[8rem] xl:text-[10rem] font-lato text-white/[.05] mix-blend-difference'>{work.number}</span>
                            <div className="flex flex-col z-10 h-full my-auto w-[90%] mx-auto inset-0 justify-center items-center absolute overflow-hidden mix-blend-difference">

                                <span ref={el => refs.current[i].name = el} className={`flex absolute font-antonio text-white/90 uppercase text-center text-[22vw] xl:text-[23vw] 2xl:[22vw]`}>{work.name}</span>

                                <div></div>
                                <div className='w-full flex mx-auto items-center pt-[22rem] md:pt-[25rem] lg:pt-[30rem] xl:pt-[30rem] 2xl:pt-[35rem] justify-between'>
                                    {work.links.map((link, i) => (
                                        <a key={i += 1} href={link.link} target="_blank" className='rotate text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] text-white/90 font-switzerL mix-blend-difference no-underline items-center flex cursor-pointer'>{link.name}
                                            <Arrow />
                                        </a>
                                    ))}
                                </div>

                                <div className='flex justify-center w-full'>
                                    <ul className='flex flex-row justify-center gap-1 p-0'>
                                        {work.skills.map((s, i) => (
                                            <li key={i} className={`py-[.3rem] px-[.6rem] mt-[1rem] text-[0.7rem] md:text-[1rem] worksSkillsLi uppercase border border-white/30 no-underline rounded-full ${s === work.skills[work.skills.length - 1] ? 'font-robotoM bg-white/90' : 'text-white/90 font-switzerL'}`}>{s}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                            <div ref={el => refs.current[i].image = el} className='absolute z-20 justify-center text-center flex opacity-1 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px]'>
                                <img src={`${work.bg}`} className='bg-cover rounded-lg w-full h-full mix-blend-normal' alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}



