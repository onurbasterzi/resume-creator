import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="md" className="mb-2">
      <Container>
        <Navbar.Brand as={Link} to="/">RESUME CREATOR</Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
