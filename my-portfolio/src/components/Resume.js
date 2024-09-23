import React from 'react';
import CV from './CV - Arina_Bekenova .pdf'; // Your CV file

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <a href={CV} className="cv-button" download>Download CV</a>
    </div>
  );
};

export default Resume;

