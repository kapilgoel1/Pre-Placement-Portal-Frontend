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
      <Navbar id="ii" color="color4" dark expand="md" className="nn">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="">Developer Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="">Forgot Password</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="left-container">
        <div className="about-portal">
          <h1 className="px-2 my-2">PrePlacement Portal</h1>
          <h5 className="px-2 ">(Developed By Kapil Goel and Neha Goel</h5>
          <h5 className="px-2 mb-3">Documentation by Sonali Prajapati)</h5>

          <p className="px-2 my-2 lead">
            JIMS welcomes all eligible students to the placement season. We
            strive to extend all possible support to provide the right career
            opportunities to our students to fruitfully pursue their career
            interests.
          </p>

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
