import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../assets/navbar.css";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/portal logo.png";

function NavbarMain() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/login">
            <button className="btn-border">Login</button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
