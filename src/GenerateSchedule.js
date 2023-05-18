import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function GenerateSchedule() {
  const [trainNumbers, setTrainNumbers] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8090/admin/getAllTrains')
      .then(response => {
        console.log(response.data);
        setTrainNumbers(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8090/admin/getAllRoutes')
      .then(response => {
        console.log(response.data);
        setRoutes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleTrainSelection = event => {
    setSelectedTrain(event.target.value);
  };

  const handleRouteSelection = event => {
    setSelectedRoute(event.target.value);
  };

  const handleTimeInput = event => {
    setDepartureTime(event.target.value);
  };

  const handleScheduleGeneration = () => {
    if (!selectedTrain || !selectedRoute || !departureTime) {
      alert('Please select a train number, route, and departure time.');
      return;
    }

    axios.get(`http://localhost:8090/admin/generateSchedule/${selectedTrain}/${selectedRoute}/${departureTime}`)
      .then(response => {
        console.log(response.data);
        alert(response.data);
      })
      .catch(error => {
        console.error(error);
        alert('Error generating schedule.');
      });
  };
  return (
    <div>
                              <Container>
      <Row>
  <Col xs={12} md={4}>
    <img src='TitleRail.png' alt='train'  />
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
        <Row>
          <Col xs={12} md={6}>
            <h1>Generate Schedule</h1>
            <h3 style={{textAlign:'left' }}>Select Train Number:</h3>
            <Form.Control as="select" value={selectedTrain} onChange={handleTrainSelection}>
              <option value="">Select a train number</option>
              {trainNumbers.map(train => (
                <option key={train.id} value={train}>{train}</option>
              ))}
            </Form.Control>
            {selectedTrain && <p>You have selected train number: {selectedTrain}</p>}

            <h3 style={{textAlign:'left' }}>Select Route:</h3>
            <Form.Control as="select" value={selectedRoute} onChange={handleRouteSelection}>
              <option value="">Select a route</option>
              {routes.map(route => (
                <option key={route.id} value={route}>{route}</option>
              ))}
            </Form.Control>
            {selectedRoute && <p>You have selected route: {selectedRoute}</p>}

            <h3 style={{textAlign:'left' }}>Enter Departure Time:</h3>
            <Form.Control type="time" value={departureTime} onChange={handleTimeInput} />
            <Form.Control type="text" value={departureTime} onChange={handleTimeInput} />
            {departureTime && <p>Departure Time: {departureTime}</p>}

            <br /><br />
            <Button variant="primary" onClick={handleScheduleGeneration}>Generate Schedule</Button>
            
          </Col>
          
          <Col xs={12} md={6}>
            <img src="Generate Schedule.png" alt="train" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GenerateSchedule;
