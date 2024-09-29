import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Importing layout components from React Bootstrap
import { AiFillGithub } from "react-icons/ai"; // Importing GitHub icon from react-icons library
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa"; // Importing LinkedIn and Email icons from react-icons library

function Footer() {
  // Getting the current year dynamically
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      {/* Using Bootstrap's grid system to arrange the content in rows and columns */}
      <Row>
        {/* Empty column for spacing the content properly */}
        <Col md="4" />

        {/* Center column displaying the copyright text */}
        <Col md="4" className="footer-copywright text-center">
          <h3>© {year} Arina B.</h3> {/* Displays the current year dynamically */}
        </Col>

        {/* Right-aligned column containing the social media icons */}
        <Col md="4" className="footer-body d-flex justify-content-end">
          <ul className="footer-icons d-flex list-unstyled mb-0">
            {/* GitHub Icon with a link */}
            <li className="social-icons">
              <a
                href="https://github.com/n1nt3nd0sw1tch"
                style={{ color: "white" }} // Sets the color of the icon
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Ensures security when opening a new tab
              >
                <AiFillGithub /> {/* GitHub icon */}
              </a>
            </li>
            {/* LinkedIn Icon with a link */}
            <li className="social-icons mx-2">
              <a
                href="https://www.linkedin.com/in/arinabk/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn /> {/* LinkedIn icon */}
              </a>
            </li>
            {/* Email Icon with a mailto link */}
            <li className="social-icons">
              <a
                href="mailto:arinabk@protonmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope /> {/* Email icon */}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;