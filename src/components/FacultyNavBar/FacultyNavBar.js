import React, { useState, useEffect } from 'react';
import './FacultyNavBar.css';
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
  Button
} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import Auth from '../Auth/Auth';
import Logo from '../Logo/Logo';

//This is the navigation bar that will be visible on dashboard

const FacultyNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const onClickHandler = () => {
        props.history.push('/facultyeditprofile');
    }

    // useEffect(() => {
    //   console.log("mounted");
    //   return () => {
    //     console.log("unmounted");
    //   }
    // }, [])

    const onLogoutHandler = () => {
      Auth.signout();
      fetch('http://localhost:4000/user/logout', {
        method: 'GET',
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((result) => {
          props.history.push('/');
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
               
    return (
      <div>

       <Navbar className="navbar" light expand="md">
            <NavbarBrand href="/"><Logo/></NavbarBrand> 
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
          <DropdownToggle nav caret >
            View Resources
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="/testpaper">
              View test papers
            </DropdownItem>
            <DropdownItem href="/assignment">
              View assignments
            </DropdownItem>
          <DropdownItem href="/ppt">
              View PPTs
            </DropdownItem>
            <DropdownItem href="/announcement">
              View announcements
            </DropdownItem>
            <DropdownItem href="/video">
              View videos
            </DropdownItem>
            <DropdownItem href="/notes">
            View notes
            </DropdownItem>
            <DropdownItem>
              View weblinks/external resources
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        </Nav>

      <NavbarText className="btn-edit">      
      <Button color="success" onClick={onClickHandler}> Edit Profile </Button> &nbsp;
      </NavbarText>
      <NavbarText className="btn-logout">
      <Button color="danger" onClick={onLogoutHandler}> Logout </Button>
      </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(FacultyNavBar);