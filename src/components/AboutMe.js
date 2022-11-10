import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import headshot from "../assets/headshot.jpg"

const AboutMe = () => {
  return (
    <Container className='setCustomHeight' id='about'>
      <Row className='mt-5'>
        <Col md={12}>
          <h2>About Me</h2>
        </Col>
        <Col md={12} className="mt-5">
          <div>
            <img id="me" src={headshot} alt="Headshot"/>
          </div>
        </Col>
        <Col md={12} className="mt-5">
          <div className="p-4">
            <p>Extraordinarily driven leader with specializations in mass communication, and interpersonal connection.</p>
            <p>Graduated with a Bachelor's in Acting, Directing, and Design from TAMUCC with a certification in Fullstack Web Development from SMU.</p>
            <p>This includes skills in Javascript, Html, React, NoSql, Node.js, and CSS.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutMe
