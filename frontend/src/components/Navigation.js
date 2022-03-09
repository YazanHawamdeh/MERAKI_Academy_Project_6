import React from "react";
import { useState } from "react";
import { link, useNavigate } from "react-router-dom";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  window.onscroll = function () {
    if (window.scrollY >= 100) {
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

      <Navbar bg={active && "light"} expand="lg" className="px-4 fixed-top ">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll " className="py-2 mt-2 ">
            {/* <Form className="d-flex ms-auto ">
              
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}

            <div
              className="header-search  d-flex ms-auto d-md-inline-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#headerSearchModal"
              onClick={() => setShow(true)}
            >
              <span class="ps-3"> Start your search </span>
              <Button
                variant="success"
                className="d-flex ms-auto rounded-circle p-2"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </div>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
      </Modal>
    
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Log in</Nav.Link>
              <Nav.Link href="#action2">Sign up</Nav.Link>

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
         */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
