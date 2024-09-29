import React from "react";
import Particles from "react-tsparticles"; // Importing the Particles component from react-tsparticles library

function Particle() {
  return (
    <Particles
      id="tsparticles" // Setting an ID for the Particles component for potential targeting or styling
      params={{
        // Configuring the particle system's behavior and appearance
        particles: {
          number: {
            value: 160, // The number of particles on the screen
            density: {
              enable: true, // Enables density control, which spreads particles more evenly based on the available space
              value_area: 1500, // The area within which the particles are distributed
            },
          },
          line_linked: {
            enable: false, // Disables lines linking the particles
            opacity: 0.03, // If lines were enabled, they would have this opacity
          },
          move: {
            direction: "right", // Particles move towards the right
            speed: 0.05, // Particles move at a slow speed
          },
          size: {
            value: 1, // Each particle is 1 pixel in size
          },
          opacity: {
            anim: {
              enable: true, // Enables opacity animation for the particles
              speed: 1, // The speed at which opacity changes
              opacity_min: 0.05, // The minimum opacity value during animation
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true, // Enables interaction on mouse click
              mode: "push", // When clicked, particles are added ("pushed")
            },
          },
          modes: {
            push: {
              particles_nb: 1, // On each click, one new particle is added
            },
          },
        },
        retina_detect: true, // Enables high-resolution mode for retina displays
      }}
    />
  );
}

export default Particle;
