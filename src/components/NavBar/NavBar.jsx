import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../assets/logonav.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="NavBar">
        <Container>
          <Link to="/inicio">
            <img src={logo} alt="Logo Sweetly" className="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto letras-nav ">
              <Link to="/">Inicio</Link>
              <Link to="/productos">Productos</Link>
            </Nav>
            <Link to="/cart">
              <button>
                <CartWidget />
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
