import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer(){

    return(
        <Navbar bg="danger">
            <Container>
                <Navbar.Brand href="https://www.linkedin.com/in/mason-anthony-ortiz/">linkedin</Navbar.Brand>
                <Navbar.Brand href="https://github.com/WeWantSomeMo">Github</Navbar.Brand>
            </Container>
        </Navbar>
    )
}