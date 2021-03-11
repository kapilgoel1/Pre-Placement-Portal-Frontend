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

  // const onViewResource = (category) => {
  //   history.push(`${url}/files/${category}`);
  // };

  return (
    <>
      <Navbar className="mb-5" dark color="color4" expand="md">
        {
          <NavbarBrand
            onClick={() => {
              history.push("/");
            }}
            className="navbar-logo"
          >
            DASHBOARD
          </NavbarBrand>
        }
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem
              className="rounded"
              onClick={() => history.push("/facultydashboard")}
            >
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem
              className="rounded"
              onClick={() => history.push(`${url}/viewstudent`)}
            >
              <NavLink>Students</NavLink>
            </NavItem> */}

            {/* <UncontrolledDropdown nav inNavbar className="rounded">
              <DropdownToggle nav caret>
                Job Postings
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => history.push(`${url}/addjob`)}>
                  Add Job Posting
                </DropdownItem>
                <DropdownItem onClick={() => history.push(`${url}/viewjobs`)}>
                  View Job Postings
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="rounded">
              <DropdownToggle nav caret>
                Tests
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => history.push(`${url}/addtest`)}>
                  Add Mock Test
                </DropdownItem>
                <DropdownItem onClick={() => history.push(`${url}/viewtests`)}>
                  View Mock Tests
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="rounded">
              <DropdownToggle nav caret>
                Announcements
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => history.push(`${url}/addannouncement`)}
                >
                  Add Announcement
                </DropdownItem>
                <DropdownItem
                  onClick={() => history.push(`${url}/viewannouncement`)}
                >
                  View Announcements
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            {/* <UncontrolledDropdown nav inNavbar className="rounded">
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => history.push(`${url}/addfile`)}>
                  Add Files
                </DropdownItem>
                <DropdownItem
                  onClick={() => history.push(`${url}/addexternallink`)}
                >
                  Add External Links
                </DropdownItem>
                <DropdownItem divider />
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

export default withRouter(FacultyNavBar);
