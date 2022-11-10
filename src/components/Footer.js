import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer(){

    return(
        <Navbar bg="danger">
            <Container>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
        </Navbar>
    )
}