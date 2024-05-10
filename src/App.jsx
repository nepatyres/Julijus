import React, { useState, useRef, useEffect } from 'react';
import Navbar from './sections/navbar/navbar';
import Hero from './sections/hero/hero';
import Works from './sections/works/works';
import Footer from './sections/skills/skills';
import './App.css';

function App() {
  const [isSwitchChecked, setIsSwitchChecked] = useState(true);

  const handleSwitchChange = () => {
    setIsSwitchChecked((prev) => !prev);
  };

  document.documentElement.style.setProperty(
    '--scrollbar-color',
    isSwitchChecked ? '#cccccc #f1f1f1' : '#333 #121212'
  );

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