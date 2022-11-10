import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default function Navigation(){

    return(
        <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mason Anthony Ortiz Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="custom-link-style" to='/'>Home</Link>
            <Link className="custom-link-style" to='/projects'>Projects</Link>
            <Link className="custom-link-style" to='/contact'>Contact</Link>
            <Link className="custom-link-style" to='/resume'>Resume</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}