import React from "react";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <header>
      <Navbar bg="light">
        <Container>
          <NavbarBrand href="/">Patricia Cancio</NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#my-portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#my-resume">Resume</Nav.Link>
            <Nav.Link href="#contact-me">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
