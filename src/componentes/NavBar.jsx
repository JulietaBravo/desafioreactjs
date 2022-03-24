import { NavLink, Link } from "react-router-dom";
import React from "react";
import logo from "../images/logo.png";
import navBar from "../css/NavBar.css";
import CartWidget from "./CartWidget.jsx";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <NavLink to='/'>
          <img src={logo} className="logo-imagen"></img>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="categoria/Vuelos">Vuelos</NavLink>
            <NavLink to="categoria/Paquetes">Paquetes</NavLink>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
