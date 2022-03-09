import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/Navbar";

function Nav() {
  return (
    <header>
      <Navbar bg="light">
        <Container>
          <NavbarBrand href="/">Patricia Cancio</NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link href="../About">About Me</Nav.Link>
            <Nav.Link href="../Contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Nav;
