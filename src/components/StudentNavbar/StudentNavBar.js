import React, { useState, useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./StudentNavBar.css";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import AuthContext from "../../AuthContext";
import { withRouter } from "react-router-dom";
import Logo from "../Logo/Logo";

//This is the navigation bar that will be visible on dashboard

const StudentNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setloggedin } = useContext(AuthContext);
  let { url } = useRouteMatch();
  let history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const onClickHandler = () => {
    history.push("/studenteditprofile");
  };

  const onLogoutHandler = () => {
    fetch("http://localhost:4000/user/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setloggedin(false);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onViewResource = (category) => {
    history.push(`${url}/files/${category}`);
  };

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand
          onClick={() => {
            history.push("/");
          }}
          className="navbar-logo"
        >
          <Logo />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/about">View test score</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                View Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => onViewResource("testpaper")}>
                  View test papers
                </DropdownItem>
                <DropdownItem onClick={() => onViewResource("assignment")}>
                  View assignments
                </DropdownItem>
                <DropdownItem onClick={() => onViewResource("ppt")}>
                  View PPTs
                </DropdownItem>
                <DropdownItem
                  onClick={() => history.push(`${url}/viewannouncement`)}
                >
                  View announcements
                </DropdownItem>
                <DropdownItem onClick={() => onViewResource("video")}>
                  View videos
                </DropdownItem>
                <DropdownItem onClick={() => onViewResource("notes")}>
                  View notes
                </DropdownItem>
                <DropdownItem
                  onClick={() => history.push(`${url}/viewexternalres`)}
                >
                  View weblinks/external resources
                </DropdownItem>
                <DropdownItem
                  onClick={() => history.push(`${url}/viewalltests`)}
                >
                  View All tests
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="btn-edit">
            <Button color="success" onClick={onClickHandler}>
              {" "}
              Edit Profile{" "}
            </Button>{" "}
            &nbsp;
          </NavbarText>
          <NavbarText className="btn-logout">
            <Button color="danger" onClick={onLogoutHandler}>
              {" "}
              Logout{" "}
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(StudentNavBar);
