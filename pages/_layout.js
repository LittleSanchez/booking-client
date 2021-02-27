import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import React from "react";

function Layout({children}) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">DreamFlat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/listposts">Posts</Nav.Link>
            <Nav.Link href="/create">Create post</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/registration">Sign up</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </>
  );
}

export default Layout;
