import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../assets/Logo_nuevo.png";
import CartWidget from "../CartWidget/CartWidget";
function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="NavBar">
        <Container>
          <a href="#">
            <img src={logo} alt="Logo empanadas" className="logo" />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a href="#">
                <Nav.Link href="#Inicio" className="letras-nav">
                  Inicio
                </Nav.Link>
              </a>
              <Nav.Link href="#Productos" className="letras-nav">
                Productos
              </Nav.Link>
              <button>
                <CartWidget />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
