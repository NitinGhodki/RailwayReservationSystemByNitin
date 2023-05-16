import React, { useState } from 'react'
import AdminMainScreen from './AdminMainScreen'
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
export default FairDetails;

function FairDetails() {

  const [fromStation, setfromStation] = useState(' ')
  const [toStation_name, settoStation_name] = useState('');
  const [train_number, settrain_number] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8090/fares/${encodeURIComponent(fromStation)}/${encodeURIComponent(toStation_name)}/${encodeURIComponent(train_number)}`);
      console.log(response.data)
      document.log(response.data)
      setResponse(response.data);
    } catch (error) {
      document.error(error);
      console.error(error);
    }
  };

  return (
    <div>

      <Container>
        <Row>
          <Col xs={12} md={4}>
            <img src='https://source.unsplash.com/150x110/?train' alt='train' />
          </Col>
          <Col xs={12} md={6}>
            <h5>Indian Railway</h5>
            <p>
              Indian Railways is the largest rail network in Asia and the world's
              second-largest under NavLink single management system. It operates more than
              20,000 passenger and freight trains daily, connecting over 7,000 stations
              across the country.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1>Fare calculation</h1>
        <Form style={{ width: '50%', margin: 'auto' }} onSubmit={handleSubmit}>
          <Form.Group controlId="sourceStation">
            <Form.Label><h5>Source Station :</h5></Form.Label>
            <Form.Control as="select" value={fromStation} onChange={(event) => setfromStation(event.target.value)}>
              <option value="">Select Source Station</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="destinationStation">
            <Form.Label ><h5>Destination Station :</h5></Form.Label>
            <Form.Control as="select" value={toStation_name} onChange={(event) => settoStation_name(event.target.value)}>
              <option value="">Select Destination Station</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="trainNo">
            <Form.Label><h5>Train No. :</h5></Form.Label>
            <Form.Control as="select" value={train_number} onChange={(event) => settrain_number(event.target.value)}>
              <option value="">Select Train Nunber</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          <Button style={{ margin: "2%", padding: '10px 30px 10px 32px' }} variant="primary" type="submit">Get Fare</Button>
        </Form>
        {response && (
          <div>
            <h2>Result</h2>
            <h1>{JSON.stringify(response, null, 2)}</h1>
          </div>
        )}
      </Container>


      <AdminMainScreen />

    </div>
  )
}


