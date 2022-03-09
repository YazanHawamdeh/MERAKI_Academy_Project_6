
import React from "react";
import { useState } from "react";


import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Navigation = () => {
  const [active, setActive] = useState(false);


window.onscroll = function() {if (window.scrollY >= 100) {
  setActive(true);
} else {
  setActive(false);
}
};
  return (
    <>
    
      {/* <nav className={`navbar fixed-top navbar-expand-lg navbar-dark ${active&&"bg-dark"} p-md-3`}>
        <div className="container">
        <Button  variant="primary">Button #1</Button>
          <a className="navbar-brand" href="#">
            Good Night
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};
export default Navigation;
