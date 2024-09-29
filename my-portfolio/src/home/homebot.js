import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import myImg from "../files/avatar.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  const navigate = useNavigate(); // Initialize useNavigate

  const navigateToContact = () => {
    navigate("/contact"); // This navigates to the contact page
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "1.2em" }}>Hi There!</h1>
            <p className="home-about-body">
              I hold a Mathematics degree from the University of St Andrews, with experience in solving practical, data-driven problems. My focus has been on improving efficiency and finding better ways to manage complex information.
              <br /><br />
              During my internship at Argus Media, I developed AI-driven tools that streamlined workflows and reduced manual effort in content management. This hands-on experience gave me valuable insights into real-world applications of machine learning and how it can be used to tackle industry challenges effectively.
              <br /><br />
              I’m driven by opportunities to tackle complex problems and refine them into workable solutions. Continuous learning and improvement are what drive me forward in my path.
            </p>
            {/* Centered Button */}
            <div className="text-center">
              <button onClick={navigateToContact} className="contact-btn">
                Send me a message
              </button>
            </div>
          </Col>
          <Col md={4} className="myAvtar text-center">
            <img src={myImg} className="img-fluid avatar" alt="avatar" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/n1nt3nd0sw1tch"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arinabk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:arinabk@protonmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
