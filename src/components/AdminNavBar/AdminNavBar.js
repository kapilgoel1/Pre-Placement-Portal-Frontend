import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../AuthContext";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./AdminNavBar.scss";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { withRouter } from "react-router-dom";

//This is the navigation bar that will be visible on dashboard

const FacultyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setuser } = useContext(AuthContext);
  let history = useHistory();
  let { url } = useRouteMatch();

  let path = "/admindashboard";

  useEffect(() => {
    history.replace(path);
  });

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

  return (
    <>
      <Navbar className="mb-5" dark color="color4" expand="md">
        {
          <NavbarBrand
            onClick={() => {
              history.push("/facultydashboard");
            }}
            className="navbar-logo"
          >
            DASHBOARD
          </NavbarBrand>
        }
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem
              className="rounded"
              onClick={() => history.push("/admindashboard")}
            >
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem
              className="rounded"
              onClick={() => history.push(`${url}/createaccount`)}
            >
              <NavLink>Create Account</NavLink>
            </NavItem>
            <NavItem
              className="rounded"
              onClick={() => history.push(`${url}/manageaccounts`)}
            >
              <NavLink>Manage Accounts</NavLink>
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
