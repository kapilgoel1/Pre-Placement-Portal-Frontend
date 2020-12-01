import React, { useState } from "react";
import Login from "../Login/Login";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import "./home.scss";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="full-container">
      <Navbar id="ii" color="" light expand="md" className="nn">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="custom-navlink">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="custom-navlink">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="custom-navlink">Developer Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="custom-navlink">Forgot Password</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="custom-navlink">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="left-container">
        <div className="about-portal">
          <h1 className="px-2 my-3">JIMS MCA PRE-PLACEMENT PORTAL</h1>
          <h2 className="px-2 my-3 lead">
            The Placement Cell works to ensure that the recruitment process is a
            successful one for the students of JIMS.
          </h2>
          <Button className="py-2 my-4" color="color4" size="lg">
            Sign Up
          </Button>
        </div>
      </div>
      <div className="right-container">
        <Login />
      </div>
    </div>
  );
}

export default Home;
