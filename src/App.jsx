'use client';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './sections/navbar';
import Hero from './sections/hero';
import Works from './sections/works';
import Footer from './sections/skills';
import './App.css';

function App() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  const [isSwitchChecked, setIsSwitchChecked] = useState(true);
  const handleSwitchChange = () => {
    setIsSwitchChecked((prev) => !prev);
  };

  return (
    <div className='appContainer'>
      <Navbar isSwitchChecked={isSwitchChecked} onSwitchChange={handleSwitchChange} />
      <Hero isSwitchChecked={isSwitchChecked} onSwitchChange={handleSwitchChange} />
      <Works isSwitchChecked={isSwitchChecked} onSwitchChange={handleSwitchChange} />
      <Footer isSwitchChecked={isSwitchChecked} onSwitchChange={handleSwitchChange} />
    </div>
  );
}

export default App;