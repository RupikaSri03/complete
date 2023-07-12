import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <Form>
      <Row className="mb-3 bg-color text-white">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value="rupikasri@gmail.com" />
        </Form.Group>

        
      </Row>

      <Form.Group className="mb-3 text-white" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control value="KPHB 9th Phase" />
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control value="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3 text-white">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control value ="Hyderabad"/>
        </Form.Group>

        

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control value = "500085"/>
        </Form.Group>
      </Row>

      

      
    </Form>
  );
}

export default GridComplexExample;