import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from './vanta.fog.min.js';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x65de65,
          midtoneColor: 0x9b8dc8,
          lowlightColor: 0xa20ceb,
          blurFactor: 0.50,
          speed: 2.00,
          zoom: 2.50
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><button onClick={() => setActiveSection('home')}>Home</button></li>
          <li><button onClick={() => setActiveSection('projects')}>Projects</button></li>
          <li><button onClick={() => setActiveSection('resume')}>Resume</button></li>
          <li><button onClick={() => setActiveSection('contact')}>Contact</button></li>
        </ul>
      </nav>
      {/* The Vanta background should be separate and cover the full screen */}
      <div ref={vantaRef} className="vanta-bg" />
      <div className="content-container">
        {renderSection()}
      </div>
    </div>
  );
};

export default App;
