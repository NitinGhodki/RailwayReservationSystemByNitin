import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import GenerateSchedule from './GenerateSchedule';
import AdminViewRoute from './AdminViewRoute';
import AdminViewTrain from './AdminViewTrain';
import AdminViewFare from './AdminViewFare';

function AdminMainScreen() {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showRoute, setShowRoute] = useState(false);
  const [showTrain, setShowTrain] = useState(false);
  const [showFare, setShowFare] = useState(false);

  function handleScheduleClick() {
    setShowSchedule(true);
    setShowRoute(false);
    setShowTrain(false);
    setShowFare(false);
  }

  function handleRouteClick() {
    setShowSchedule(false);
    setShowRoute(true);
    setShowTrain(false);
    setShowFare(false);
  }

  function handleTrainClick() {
    setShowSchedule(false);
    setShowRoute(false);
    setShowTrain(true);
    setShowFare(false);
  }

  function handleFareClick() {
    setShowSchedule(false);
    setShowRoute(false);
    setShowTrain(false);
    setShowFare(true);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button onClick={handleTrainClick} variant="outline-secondary">
<<<<<<< HEAD
              <img src="https://source.unsplash.com/500x200/?rail" alt="Button 1" />
=======
              <img src="https://source.unsplash.com/500x200/?VIEW" alt="Button 1" />
>>>>>>> 1de90c872aef9115d94552c1f1dde9c72d0fb7a2
              <p>VIEW TRAINS</p>
            </Button>
          </Col>
          <Col>
            <Button onClick={handleRouteClick} variant="outline-secondary">
<<<<<<< HEAD
              <img src="https://source.unsplash.com/500x200/?route" alt="Button 2" />
=======

              <img src="https://source.unsplash.com/500x200/?train" alt="Button 2" />
>>>>>>> 1de90c872aef9115d94552c1f1dde9c72d0fb7a2
              <p>VIEW ROUTES</p>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={handleFareClick} variant="outline-secondary">
<<<<<<< HEAD
              <img src="https://source.unsplash.com/500x200/?cash" alt="Button 3" />
=======

              <img src="https://source.unsplash.com/500x200/?train" alt="Button 3" />

>>>>>>> 1de90c872aef9115d94552c1f1dde9c72d0fb7a2
              <p>VIEW FARE</p>
            </Button>
          </Col>
          <Col>
            <Button onClick={handleScheduleClick} variant="outline-secondary">
<<<<<<< HEAD
              <img src="https://source.unsplash.com/500x200/?clock" alt="Button 4" />
              <p>GENERATE SCHEDULES</p>
=======

              <img src="https://source.unsplash.com/500x200/?train" alt="Button 4" />
              <p>VIEW TRAIN SCHEDULES</p>
>>>>>>> 1de90c872aef9115d94552c1f1dde9c72d0fb7a2
            </Button>
          </Col>
        </Row>
        {showTrain && <AdminViewTrain />}
        {showFare && <AdminViewFare />}
        {showRoute && <AdminViewRoute />}
        {showSchedule && <GenerateSchedule />}
      </Container>
    </div>
  );
}

export default AdminMainScreen;
