import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SeatAvailable() {
  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [trainNo, setTrainNo] = useState('');
  const [coach, setCoach] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8090/CheckSeatAvailability/${trainNo}/${encodeURIComponent(sourceStation)}/${encodeURIComponent(destinationStation)}/${coach}`);
      console.log(response.data)
      setResponse(response.data);
    } catch (error) {
      document.log(response.data)
      setResponse(response.data);
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
        <h1>Seat Availability</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="sourceStation">
            <Form.Label>Source Station:</Form.Label>
            <Form.Control type="text" value={sourceStation} onChange={(event) => setSourceStation(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="destinationStation">
            <Form.Label>Destination Station:</Form.Label>
            <Form.Control type="text" value={destinationStation} onChange={(event) => setDestinationStation(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="trainNo">
            <Form.Label>Train No.:</Form.Label>
            <Form.Control type="text" value={trainNo} onChange={(event) => setTrainNo(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="coach">
            <Form.Label>Coach:</Form.Label>
            <Form.Control type="text" value={coach} onChange={(event) => setCoach(event.target.value)} />
          </Form.Group>
          <Button style={{margin:"2%"}}variant="dark" type="submit">Check Availability</Button>
        </Form>
        {response && (
          <div>
            <h2>Result</h2>
            <h1>{JSON.stringify(response, null, 2)}</h1>
          </div>
        )}
      </Container>
    </div>
  );
}

export default SeatAvailable;
