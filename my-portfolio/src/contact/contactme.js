import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../web/particle";

function ContactMe() {
  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the contact section
    }
  }, []); // Empty dependency array ensures this runs on component mount

  return (
    <Container fluid className="contact-section" id="contact">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 className="contact-heading">Say Hello</h1>
            <form className="contact-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactMe;
