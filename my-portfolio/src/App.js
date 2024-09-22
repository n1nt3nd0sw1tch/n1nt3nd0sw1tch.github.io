import React, { useEffect, useState } from 'react';
import './App.css'; // Link to your CSS file

function App() {
  const [showButton, setShowButton] = useState(false);

  // Scroll function for Back to Top button
  useEffect(() => {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  // Scroll fade-in effect
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Arina's Portfolio</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="about" className="fade-in">
        <h2>About Me</h2>
        <p>I'm Arina, a mathematician and aspiring AI/ML expert. Here's a little about my journey...</p>
      </section>
      <section id="projects" className="fade-in">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of the project...</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of the project...</p>
        </div>
      </section>
      <section id="contact" className="fade-in">
        <h2>Contact</h2>
        <p>Email: arina@example.com</p>
      </section>
      <footer>
        <p>&copy; 2024 Arina's Portfolio</p>
      </footer>
      {showButton && <button onClick={topFunction} id="topBtn" title="Go to top">Top</button>}
    </div>
  );
}

export default App;