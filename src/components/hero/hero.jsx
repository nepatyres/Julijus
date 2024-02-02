import React from 'react';
import videoFile from '../../assets/videos/hero2-CMtEUjRq.mp4';
import './hero.css';

export default function Hero({ isSwitchChecked }) {
    return (
        <div className='heroContainer'>
            <video autoPlay muted loop>
                <source src={videoFile} type="video/mp4" />
            </video>
            <div className="heroContent">
                <div className='heroText'>
                    <span className='heroSpan'>Hi There,</span>
                    <span className='heroSpanTwo'>I'm Julijus.</span>
                    <h2>A front-end developer, <br/>who is trying to become full stack.</h2>
                </div>
            </div>
        </div>
    )
}
