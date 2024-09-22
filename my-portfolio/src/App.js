import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'; // Import three.js from the local node_modules
import FOG from './vanta.fog.min.js'; // Import the Vanta.js fog effect
import './App.css'; // Your existing styles

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(null); // Manage the Vanta effect state
  const vantaRef = useRef(null); // Create a ref to attach Vanta.js

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current, // Attach the Vanta fog effect to the div
          THREE: THREE, // Pass the custom THREE instance
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x65de65,
          midtoneColor: 0x9b8dc8,
          lowlightColor: 0xa20ceb,
          blurFactor: 0.51,
          speed: 1.90,
          zoom: 3.00,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="App" ref={vantaRef} style={{ width: '100vw', height: '100vh' }}>
      <div className="content">
        <h1 className="animated-text">Arina Bekenova</h1>
        <h2 className="sub-text">Mathematician and Genius in Maths</h2>
      </div>
    </div>
  );
};

export default App;
