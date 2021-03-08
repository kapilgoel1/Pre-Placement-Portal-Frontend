import React, { useState, useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./StudentNavBar.scss";
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

const StudentNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setuser } = useContext(AuthContext);
  let url = "/studentdashboard";
  let history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const onClickHandler = () => {
    history.push(`/editprofile`);
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

  // const onViewResource = (category) => {
  //   history.push(`${url}/files/${category}`);
  // };

  return (
    <>
      <Navbar className="mb-5" dark color="color4" expand="md">
        <NavbarBrand
          onClick={() => {
            history.push("/");
          }}
          className="navbar-logo"
        >
          DASHBOARD
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem
              className="rounded"
              onClick={() => history.push("/studentdashboard")}
            >
              <NavLink>Home</NavLink>
            </NavItem>

            <NavItem
              className="rounded"
              onClick={() => history.push(`${url}/viewjobs`)}
            >
              <NavLink>Jobs</NavLink>
            </NavItem>
            <NavItem
              className="rounded"
              onClick={() => history.push(`${url}/viewtests`)}
            >
              <NavLink> Mock Tests</NavLink>
            </NavItem>
            <NavItem
              className="rounded"
              onClick={() => history.push(`${url}/viewannouncement`)}
            >
              <NavLink>Announcements</NavLink>
            </NavItem> */}

            {/* <UncontrolledDropdown nav inNavbar className="rounded">
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => onViewResource("testpaper")}>
                  Test Papers
                </DropdownItem>
                <DropdownItem onClick={() => onViewResource("assignment")}>
                  Assignments
                </DropdownItem>
                <DropdownItem onClick={() => onViewResource("ppt")}>
                  PPTs
                </DropdownItem>

                <DropdownItem onClick={() => onViewResource("video")}>
                  Video lectures
                </DropdownItem>
                <DropdownItem onClick={() => onViewResource("notes")}>
                  Notes
                </DropdownItem>
                <DropdownItem
                  onClick={() => history.push(`${url}/viewexternallinks`)}
                >
                  External Links
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>

          <NavbarText className="btn-edit">
            <Button color="color5" onClick={onClickHandler}>
              {" "}
              Edit Profile{" "}
            </Button>{" "}
            &nbsp;&nbsp;
          </NavbarText>
          <NavbarText className="btn-logout">
            <Button color="color5" onClick={onLogoutHandler}>
              {" "}
              Logout{" "}
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
};

export default withRouter(StudentNavBar);
