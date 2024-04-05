import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="bg-primary navbar-dark">
        <NavbarBrand href="/" className="fw-bold">Jual-in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink
              className="text-light mx-3"
              to={"/"}
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              className="text-light mx-3"
              to={"/dashboard"}
              style={{ textDecoration: "none" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              className="text-light mx-3"
              to={"/top"}
              style={{ textDecoration: "none" }}
            >
              Top Rated
            </NavLink>
          </Nav>
          <NavLink to={"/login"}>
          <button class="button is-light">Login</button>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
