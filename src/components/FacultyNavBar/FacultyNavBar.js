import React, { useState, useContext } from "react";
import AuthContext from "../../AuthContext";
import { useHistory } from "react-router-dom";
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

const FacultyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setuser } = useContext(AuthContext);
  let history = useHistory();
  let url = "/facultydashboard";

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

  const onViewResource = (category) => {
    history.push(`${url}/files/${category}`);
  };

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
            {
              // <NavItem className="rounded" onClick={() => history.push('/')}>
              //   <NavLink>Home</NavLink>
              // </NavItem>
            }
            <NavItem
              className="rounded"
              onClick={() => history.push(`/addcontent`)}
            >
              <NavLink>Add Content</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="rounded">
              <DropdownToggle nav caret>
                Prepare for Placement
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => history.push("/files/notes")}>
                  Notes
                </DropdownItem>
                <DropdownItem onClick={() => history.push("/files/video")}>
                  Video Lectures
                </DropdownItem>
                <DropdownItem
                  onClick={() => history.push("/viewexternallinks")}
                >
                  Online Resources
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="rounded">
              <DropdownToggle nav caret>
                Practice Tests
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => history.push("/files/testpaper")}>
                  Sample Test Papers
                </DropdownItem>
                <DropdownItem onClick={() => history.push("/viewtests")}>
                  Online Mock Tests
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem
              className="rounded"
              onClick={() => history.push(`/files/assignment`)}
            >
              <NavLink>Assignments</NavLink>
            </NavItem>

            <NavItem
              className="rounded"
              onClick={() => history.push(`/viewjobs`)}
            >
              <NavLink>Jobs</NavLink>
            </NavItem>
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

export default withRouter(FacultyNavBar);
