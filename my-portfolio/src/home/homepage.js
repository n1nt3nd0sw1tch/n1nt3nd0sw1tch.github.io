import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../web/particle";
import Home2 from "./homebot";
import IconList from "./logo";
import pdf from "../files/cv.pdf"; // Make sure the PDF is placed correctly

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={20} className="home-header">
              <h1 className="heading">
                Arina Bekenova
              </h1>
              <div className="icon-list-container">
                <IconList />
              </div>
              <h2 className="heading-part">
                Mathematician with a love for <br />
                algorithms and puzzles solving.
              </h2>
              {/* Download Button */}
              <div className="download-btn">
                <a href={pdf} target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
