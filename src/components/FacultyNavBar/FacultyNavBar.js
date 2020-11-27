import React, { useState, useContext } from "react";
import AuthContext from "../../AuthContext";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./FacultyNavBar.scss";
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
import { withRouter } from "react-router-dom";
import Logo from "../Logo/Logo";

//This is the navigation bar that will be visible on dashboard

const FacultyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setuser } = useContext(AuthContext);
  let history = useHistory();
  let { url } = useRouteMatch();

  const toggle = () => setIsOpen(!isOpen);

  const onClickHandler = () => {
    history.push(`${url}/editprofile`);
  };

  const onLogoutHandler = () => {
    fetch("http://localhost:4000/user/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setuser({ loggedin: false, role: "" });
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
      <Navbar className="navbar" light expand="md">
        <NavbarBrand
          onClick={() => {
            history.push("/facultydashboard");
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
                  onClick={() => history.push(`${url}/viewexternallinks`)}
                >
                  View weblinks/external resources
                </DropdownItem>
                <DropdownItem onClick={() => history.push(`${url}/viewtests`)}>
                  View All tests
                </DropdownItem>
                <DropdownItem onClick={() => history.push(`${url}/viewjobs`)}>
                  View All jobs
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

export default withRouter(FacultyNavBar);
