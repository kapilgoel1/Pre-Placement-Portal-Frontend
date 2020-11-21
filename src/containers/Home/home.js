import React, {useState} from 'react'
import Login from '../Login/Login';
import {Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button} from 'reactstrap'
import './home.css'

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="full-container">
        <Navbar id="ii" color="" light expand="md" className="nn">
{
        // <NavbarBrand href="/">reactstrap</NavbarBrand>
}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink className="custom-navlink" href="/components/" >About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="custom-navlink" href="https://github.com/reactstrap/reactstrap">Contact Us</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="custom-navlink" href="https://github.com/reactstrap/reactstrap">Developer Team</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="custom-navlink" href="https://github.com/reactstrap/reactstrap">Forgot Password</NavLink>
          </NavItem>
         
          </Nav>
          <Nav className="ml-auto" navbar>
          <NavItem>
          <NavLink className="custom-navlink" href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink>
        </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
      <div className="left-container">
      <div className="about-portal">
      <h1 className="px-2 my-3">
      JIMS MCA PrePlacement Portal
      
      </h1>
      <p className="px-2 my-2 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores, odio ut totam repellendus earum doloribus recusandae voluptatem vel aut alias iste? Est, ab pariatur officia optio eos iste cumque.</p>
      <Button className="py-2 my-4" size="lg" >Sign Up</Button>
      </div>
        </div>
        <div className="right-container">
            
            <Login />
        </div>
        
        </div>
    )
}

export default Home

