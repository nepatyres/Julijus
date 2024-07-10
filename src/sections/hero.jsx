import React from 'react';
import videoFile from '../assets/videos/hero2.mp4';

export default function Hero({ isSwitchChecked }) {
    return (
        <div className='sticky top-0 flex z-0 overflow-hidden'>
            <video autoPlay muted loop className='w-lvw h-lvh z-5 object-cover brightness-[.4]'>
                <source src={videoFile} type="video/mp4" />
            </video>
            <div className="absolute h-lvh w-screen flex flex-col z-10 mix-blend-difference justify-center">
                <div className='w-[90%] ml-auto mr-auto justify-center flex flex-col sm:items-center xl:items-start'>
                    <span className='text-white text-[10vw] leading-[10vw] flex m-0 ml-2.5 mix-blend-difference uppercase sm:leading-[10vw] sm:ml-[-150px] xl:ml-[-50px] xl:text-[7vw] xl:leading-[8vw] font-Lato'>Hi There,</span>
                    <span className='text-white text-[10vw] leading-[10vw] flex m-0 mix-blend-difference uppercase sm:leading-[10vw] xl:text-[7vw] xl:leading-[8vw] font-Lato'>I'm Julijus.</span>
                    <h2 className='text-dot7 text-[4vw] font-latoR m-0 mix-blend-difference w-10/12 sm:text-center sm:ml-8 xl:text-[2.5vw] xl:text-start'>A front-end developer, <br />who is trying to become full stack.</h2>
                </div>
            </div>
        </div>
    )
}
