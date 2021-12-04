import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" className="mb-2">
      <Container>
        <Navbar.Brand as={Link} to="/">RESUME CREATOR</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link  as={Link} to="/Preview">Preview</Nav.Link>
          <Nav.Link  as={Link} to="/new">Create Resume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
