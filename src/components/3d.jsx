import React, { useRef } from "react";
import gsap from "gsap";

export default function Text3d({ primary, secondary }) {

    const text1 = useRef(null);
    const text2 = useRef(null);

    return (
        <div className='textContainer relative'>
            <p className='primary font-switzer text-[8vw] leading-[8vw] tracking-wider font-bold m-0 text-white' style={{ transition: 'opacity .4s, transform .4s', willChange: 'opacity, transform' }} ref={text1}>{primary}</p>
            <p className='secondary absolute top-0 text-white/50 opacity-0 font-switzer text-[8vw] leading-[8vw] tracking-wider font-bold m-0' style={{ transition: 'opacity .4s, transform .4s', willChange: 'opacity, transform' }} ref={text2}>{secondary}</p>
        </div>
    )
}