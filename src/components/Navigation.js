import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default function Navigation(){

    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mason Anthony Ortiz Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/resume'>Resume</Link>
          </Nav>
        </Container>
      </Navbar>
    )
}