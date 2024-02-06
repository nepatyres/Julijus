import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Works from './components/works/works';
import Footer from './components/skills/skills';
// import Cursor from './components/cursor/cursor';
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
      {/* <Cursor /> */}
    </div>
  );
}

export default App;