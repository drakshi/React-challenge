import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Button, Navbar, Container, Nav,  Form } from 'react-bootstrap'

function Header(props) {
    return (
        <div>
            <Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand href="App.js">DEMO Streaming</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       
        
      </Nav>
      <Form className="d-flex">
      <Nav.Link href="#">
          Log in
        </Nav.Link>
        <Button variant="outline-success">Start your free Trial</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
<Navbar bg="dark" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Popular {props.title}</Navbar.Brand>
    </Container>
    </Navbar>
        </div>
    )
}

export default Header;
