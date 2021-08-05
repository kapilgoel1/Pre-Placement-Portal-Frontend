import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import Login from "../Login/Login";
import "./home.scss";
import swal from "sweetalert";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let history = useHistory();

  return (
    <div className="full-container">
      <Navbar id="ii" color="color4" dark expand="md" className="nn">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem
              className="rounded"
              // onClick={() =>
              //   swal(
              //     "Sorry for your inconvenience!",
              //     "This page will soon be visible to you."
              //   )
              // }
              onClick={() => history.push(`/contactus`)}
            >
              <NavLink>Contact Us</NavLink>
            </NavItem>

           

            <NavItem
              className="rounded"
              onClick={() =>
                swal(
                  "Sorry for your inconvenience!",
                  "This page will soon be visible to you."
                )
              }
            >
              <NavLink className="">Forgot Password</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="left-container">
        <div className="about-portal">
          <h1 className="px-2 my-2">PrePlacement Portal</h1>


          <p className="px-2 my-2 lead">
            JIMS welcomes all eligible students to the placement season. We
            strive to extend all possible support to provide the right career
            opportunities to our students to fruitfully pursue their career
            interests.
          </p>

          <Button
            className="py-2 my-4"
            color="color4"
            size="lg"
            onClick={() => history.push(`/aboutus`)}
            // onClick={() =>
            //   swal(
            //     "Sorry for your inconvenience!",
            //     "This page will soon be visible to you."
            //   )
            // }
          >
            About Us
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
