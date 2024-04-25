import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from './features/authSlice';
import { LogOut } from './features/authSlice';

function NavbarComponent(args) {

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const navigate =useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    setIsOpen(false);
  }

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
              to={"/courses"}
              style={{ textDecoration: "none" }}
            >
              Courses
            </NavLink>
          </Nav>
          {
            user? (
              <button onClick={logout} className="button is-light">Logout</button>
            ) : (
              <NavLink to={"/login"}>
              <button class="button is-light">Login</button>
              </NavLink>
            )
          }
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;