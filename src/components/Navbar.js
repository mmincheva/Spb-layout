import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink      
  } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';


const HeaderNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
       
      <Navbar color="dark" dark expand="md">
          
          <div className="container">
              <NavbarBrand href="/">
              <img src="https://www.sportwetten24.com/wp-content/uploads/2018/10/sportsbetio_logo_review.png"></img>
          </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink 
                      tag={RRNavLink} 
                      exact 
                      to="/" 
                      activeClassName="active"
                      >Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink 
                       tag={RRNavLink} 
                       to="/gallery"
                       activeClassName="active"
                      >Gallery</NavLink>
                  </NavItem>  
                               
              </Nav>              
              </Collapse>
          </div>
      </Navbar>
      
    );
  }
  
  export default HeaderNavbar;