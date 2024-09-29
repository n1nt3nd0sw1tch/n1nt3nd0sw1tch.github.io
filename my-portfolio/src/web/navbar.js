import React, { useState } from "react"; // Importing React and useState hook for managing state
import Navbar from "react-bootstrap/Navbar"; // Importing Navbar component from React Bootstrap
import Nav from "react-bootstrap/Nav"; // Importing Nav component from React Bootstrap
import Container from "react-bootstrap/Container"; // Importing Container component from React Bootstrap for layout structure
import logo from "../files/logo.png"; // Importing the logo image
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for client-side navigation

function NavBar() {
  // State to control whether the navbar is expanded (for mobile views)
  const [expand, updateExpanded] = useState(false);
  
  // State to manage the navbar color (e.g., changing color when scrolling)
  const [navColour, updateNavbar] = useState(false);

  // Function to handle scroll events - changes the navbar color when scrolled down 20px or more
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true); // Changes the state, applying a 'sticky' class when scrolling down
    } else {
      updateNavbar(false); // Resets the state, returning to the default navbar class when at the top
    }
  }

  // Attaching the scroll event listener to the window to track scrolling
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand} // Controls whether the navbar is expanded (primarily for mobile devices)
      fixed="top" // Fixes the navbar to the top of the viewport
      expand="md" // Specifies the breakpoint for when the navbar becomes collapsible (md = medium screen)
      className={navColour ? "sticky" : "navbar"} // Dynamically applies a 'sticky' class based on the scroll position
    >
      <Container>
        {/* Brand logo with link to home */}
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="logo" alt="brand" /> {/* Displays the logo image */}
        </Navbar.Brand>
        
        {/* Hamburger menu toggle button for mobile views */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav" // Controls the collapsible section
          onClick={() => {
            updateExpanded(expand ? false : "expanded"); // Toggles the expand state on click
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        {/* Collapsible section containing the navigation links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Aligns the navigation items to the right using ms-auto */}
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* Home link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> {/* Link to the home route */}
                Home
              </Nav.Link>
            </Nav.Item>

            {/* About link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/education" onClick={() => updateExpanded(false)}> {/* Link to the about route */}
                Education
              </Nav.Link>
            </Nav.Item>

            {/* Projects link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}> {/* Link to the projects route */}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* Contact link */}
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}> {/* Link to the about route */}
                Contact
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;