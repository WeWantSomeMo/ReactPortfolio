import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ResumePic from "../assets/Resume.png"

export default function Resume(){
  return(
    <Container className='setCustomHeight'>
      <Row className="mt-5 mb-3">
        <Col>
          <img id="Resume" src={ResumePic} alt = "Resume" />
        </Col>
      </Row>
    </Container>
  )
}
