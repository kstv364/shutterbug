import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form , FormControl, Button} from "react-bootstrap";

import styles from "../styles/navbar.module.css";

export default class extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="light"
          expand="lg"
          style={{ padding: "0.5em 10em" }}
          className=""
        >
          <Navbar.Brand href="#home">Shutterbug</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sign out</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}