import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contact(){
    return (
      <Container className="setCustomHeight">
        <Row className="mt-5">
          <Col md={10} className="mx-auto">
            <Card className="p-4">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary">Send Message</Button>
              </Form>
              <Form.Text muted className="mt-3">
                Note: This feature does not work
              </Form.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}
