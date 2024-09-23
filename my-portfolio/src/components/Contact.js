import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/arinabk/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/n1nt3nd0s1tch" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="mailto:ab466@st-andrews.ac.uk" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={40} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
