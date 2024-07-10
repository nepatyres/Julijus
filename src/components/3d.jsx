import React, { useRef } from "react";
import gsap from "gsap";

export default function Text3d({ primary, secondary }) {

    const text1 = useRef(null);
    const text2 = useRef(null);

    return (
        <div className='textContainer'>
            <p className='primary font-switzer' ref={text1}>{primary}</p>
            <p className='secondary font-switzer' ref={text2}>{secondary}</p>
        </div>
    )
}