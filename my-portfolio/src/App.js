import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three'; // Import three.js from the local node_modules
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import FOG from './vanta.fog.min.js'; // Import the Vanta.js fog effect
import './App.css';

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const mountRef = useRef(null); // Ref for Three.js

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x30e1cc,
          midtoneColor: 0xff004b,
          lowlightColor: 0x7261dc,
          blurFactor: 0.5,
          zoom: 1.5,
        })
      );
    }

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50; // Adjust camera distance

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting for 3D text
    const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Load font and create 3D text
    const loader = new FontLoader();
    loader.load('./helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry('Arina', {
        font: font,
        size: 10, // Text size
        height: 5, // Thickness of the text
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // Create bubble-like material with a soft pink color
      const textMaterial = new THREE.MeshPhongMaterial({
        color: 0xff69b4, // Pink color
        shininess: 100, // Make it shiny like a bubble
        specular: 0xffffff, // White highlights
      });

      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-30, 0, 0); // Center the text
      scene.add(textMesh);

      const animate = () => {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.01; // Rotate the text for a 3D effect
        renderer.render(scene, camera);
      };
      animate();
    });

    // Clean up on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      mountRef.current.removeChild(renderer.domElement); // Remove the canvas
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: '100vw', height: '100vh' }}>
      <div className="content">
        <div ref={mountRef}></div> {/* 3D text goes here */}
        <h2 className="sub-text">Mathematician and Genius in Maths</h2>
      </div>
    </div>
  );
};

export default App;
