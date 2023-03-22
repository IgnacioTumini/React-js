import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/Logo_nuevo.png";
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
              <Nav.Link href="#Inicio" className="letras-nav">
                Inicio
              </Nav.Link>
              <Nav.Link href="#Productos" className="letras-nav">
                Productos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button>
            <AiOutlineShoppingCart />3
          </button>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
