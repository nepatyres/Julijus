import React, { useRef } from "react";
import gsap from "gsap";

export default function Text3d({ primary, secondary }) {

    const text1 = useRef(null);
    const text2 = useRef(null);

    return (
        <div className='textContainer relative w-min h-min flex'>
            <p className='primary font-switzer text-[65px] md:text-[80px] lg:text-[90px] leading-[70px] md:leading-[80px] lg:leading-[90px] tracking-[normal] font-bold m-0 text-white mix-blend-difference hover:text-[70px] hover:md:text-[85px] hover:lg:text-[95px]' ref={text1}>{primary}</p>
        </div>
    )
}