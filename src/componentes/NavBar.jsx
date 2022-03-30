import { NavLink, Link } from "react-router-dom";
import React from "react";
import logo from "../images/logo.png";
import navBar from "../css/NavBar.css";
import Cart from "./Cart.jsx";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "../css/styles.css";
import CartWidget from "./CartWidget";

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
            <NavLink to="categoria/Vuelos" className="tituloNav">Vuelos</NavLink>
            <NavLink to="categoria/Paquetes" className="tituloNav">Paquetes</NavLink>
          </Nav>
          <Nav>
            <NavLink eventKey={2} to="/cart">
              <CartWidget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
