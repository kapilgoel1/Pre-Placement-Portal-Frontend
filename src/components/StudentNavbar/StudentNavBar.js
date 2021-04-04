import React, { useContext, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import AuthContext from "../../AuthContext";
import "./StudentNavBar.scss";

const StudentNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setuser } = useContext(AuthContext);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const onClickHandler = () => {
    history.push(`/editprofile`);
  };

  const onLogoutHandler = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/logout`, {
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
              onClick={() => history.push(`/viewassignments`)}
            >
              <NavLink>Assignments</NavLink>
            </NavItem>
            <NavItem
              className="rounded"
              onClick={() => history.push(`/resumebuilder`)}
            >
              <NavLink>Resume Builder</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar className="rounded">
              <DropdownToggle nav caret>
                Jobs
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => history.push("/viewinternships")}>
                  Internships
                </DropdownItem>
                <DropdownItem onClick={() => history.push("/viewjobs")}>
                  Jobs
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
