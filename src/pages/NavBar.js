import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const NavBar = ({title, headerLinks}) => {
  return (
    <Navbar className="border-bottom" bg="transparent" expand="lg">
      <Navbar.Brand>{title} <Spinner animation="grow" variant="danger" /> </Navbar.Brand>

      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
          {headerLinks.map((link, i) => {
            return (
              <Link className="nav-link" key={i} to={link.path}>
                {link.title}
              </Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar