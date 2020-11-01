import React, { useState } from 'react';
import './StudentNavBar.css';
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
import Logo from '../Logo/Logo';

//This is the navigation bar that will be visible on dashboard

const StudentNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const onClickHandler = () => {
    props.history.push('/studenteditprofile');
  }

  const onLogoutHandler = () => {
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
      <Navbar light expand="md">
        <NavbarBrand href="/"><Logo/></NavbarBrand> 
        <NavbarToggler onClick={toggle}/>
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
              <DropdownItem>
                View test papers
              </DropdownItem>
              <DropdownItem>
                View assignments
              </DropdownItem>
              <DropdownItem>
                View PPTs
              </DropdownItem>
              <DropdownItem>
                View announcements
              </DropdownItem>
              <DropdownItem>
                View videos
              </DropdownItem>
              <DropdownItem>
                View weblinks/external resources
              </DropdownItem>
              <DropdownItem>
                View notes
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

export default withRouter(StudentNavBar);