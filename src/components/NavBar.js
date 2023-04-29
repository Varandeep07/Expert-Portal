import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar className="navbar navbar-light shadow rounded-lg" style={{backgroundColor:"#eee7b2"}}>
      <Navbar.Brand href="/" style={{marginLeft: "10px"}}><bold>Expert Portal</bold></Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
