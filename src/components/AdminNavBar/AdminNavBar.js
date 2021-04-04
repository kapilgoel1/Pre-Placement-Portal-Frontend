import React, { useContext, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import AuthContext from "../../AuthContext";
import "./AdminNavBar.scss";

const FacultyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setuser } = useContext(AuthContext);
  let history = useHistory();

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
            <NavItem className="rounded" onClick={() => history.push("/")}>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem
              className="rounded"
              onClick={() => history.push(`/createaccount`)}
            >
              <NavLink>Create Accounts</NavLink>
            </NavItem>
            <NavItem
              className="rounded"
              onClick={() => history.push(`/manageaccounts`)}
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
