import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
             <Navbar bg="" variant="dark">
    <Container className="justify-content-center">
    <Nav className="  ml-auto">
      <Nav.Link href="#home" className="text-primary">Home</Nav.Link>
      <Nav.Link href="#features" className="text-primary">About</Nav.Link>
      <Nav.Link href="#pricing" className="text-primary">Portfolio</Nav.Link>
      <Nav.Link href="#pricing" className="text-primary">Contact</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>         
    
        </div>
        
    );
};

export default Header;