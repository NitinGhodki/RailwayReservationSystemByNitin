import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Modal} from 'react-bootstrap';
import GenerateSchedule from './GenerateSchedule';
import AdminViewRoute from './AdminViewRoute';
import AdminViewTrain from './AdminViewTrain';
import AdminViewFare from './AdminViewFare';
import "../style/AdminMainScreen.css";
import AdminTrainSchedule from './AdminTrainSchedule';

function AdminMainScreen(props) {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showRoute, setShowRoute] = useState(false);
  const [showTrain, setShowTrain] = useState(false);
  const [showFare, setShowFare] = useState(false);
  const [showTrainSchedule, setShowTrainSchedule] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { userId } = props;

  function handleScheduleClick() {
    setShowSchedule(true);
    setShowRoute(false);
    setShowTrain(false);
    setShowFare(false);
    setShowTrainSchedule(false);
    setShowPaymentModal(true);
  }

  function handleTrainScheduleClick() {
    setShowSchedule(false);
    setShowRoute(false);
    setShowTrain(false);
    setShowFare(false);
    setShowTrainSchedule(true);
    setShowPaymentModal(true);
  }

  function handleRouteClick() {
    setShowSchedule(false);
    setShowRoute(true);
    setShowTrain(false);
    setShowFare(false);
    setShowTrainSchedule(false);
    setShowPaymentModal(true);
  }

  function handleTrainClick() {
    setShowSchedule(false);
    setShowRoute(false);
    setShowTrain(true);
    setShowFare(false);
    setShowTrainSchedule(false);
    setShowPaymentModal(true);
  }

  function handleFareClick() {
    setShowSchedule(false);
    setShowRoute(false);
    setShowTrain(false);
    setShowFare(true);
    setShowTrainSchedule(false);
    setShowPaymentModal(true);
  }

  const handelLogout = () => {
    window.location.href = '/welcome';
  }

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };
  return (
    <div id="adminmain">
      <Container id='logoutContainer'>
        <Row id='adminrow'>
          <Col>
            <div>
              <img src='http://localhost:3000/RailwayReservationSystemByNitin/static/media/train%20logo2.5ae3fd3d90e087dfcda2.png' alt='logo' id='homeimg' />
              {/* <div id='homediv'>Indian Railway</div> */}
            </div>
          </Col>
          <Col>
            <p id='homewelcomeP'><span id='homewelcomespan'>WELCOME :- </span> {userId}</p>
          </Col>
          <Col>
            <Button variant="secondary" onClick={handelLogout} className="backButton homebutton">
              <span className="buttonText ">LogOut</span>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container id='maincontainer'>
        <Row className="adminrow">
          <Col >
            <Button onClick={handleTrainClick} variant="outline-secondary" className="adminrowcol">
              <img src="http://localhost:3000/RailwayReservationSystemByNitin/static/media/AdminTrain.cfab4750b0e79f9af064.png" alt="Button 1" className='adminimg' />
              <p className="adminrowcolP">VIEW TRAINS</p>
            </Button>
          </Col>
          <Col >
            <Button onClick={handleRouteClick} variant="outline-secondary" className="adminrowcol">
              <img src="http://localhost:3000/RailwayReservationSystemByNitin/static/media/AdminRoute.379038ba675cc72933ff.png" alt="Button 2" className='adminimg' />
              <p className="adminrowcolP">VIEW ROUTES</p>
            </Button>
          </Col>
        </Row>
        <Row className="adminrow">
          <Col >
            <Button onClick={handleFareClick} variant="outline-secondary" className="adminrowcol">
              <img src="http://localhost:3000/RailwayReservationSystemByNitin/static/media/AdminFare.7ba9396679eb610fd60f.png" alt="Button 3" className='adminimg' />
              <p className="adminrowcolP">VIEW FARE</p>
            </Button>
          </Col>
          <Col >
            <Button onClick={handleScheduleClick} variant="outline-secondary" className="adminrowcol">
              <img src="	http://localhost:3000/RailwayReservationSystemByNitin/static/media/Schedule.a8a05e1bdbb7c5065774.png" alt="Button 4" className='adminimg' />
              <p className="adminrowcolP">GENERATE SCHEDULES</p>
            </Button>
          </Col>
        </Row>
        <Row className="adminrow">
          <Col >
            <Button onClick={handleTrainScheduleClick} variant="outline-secondary" className="adminrowcol">
              <img src="http://localhost:3000/RailwayReservationSystemByNitin/static/media/ViewSchedule.2167c6fd47fa72ffd7a7.png" alt="Button 5" className='adminimg' />
              <p className="adminrowcolP">VIEW SCHEDULE</p>
            </Button>
          </Col>
        </Row>
        {showTrain &&
          <Modal show={showPaymentModal} id='adminmodelcontainer'>
            <Modal.Header >
              <Modal.Title id='adminmodelH1'><h1>Trains</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body id='adminmodelbody'>
              <AdminViewTrain />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePaymentModal} id='close'>
                Close</Button>
            </Modal.Footer>
          </Modal>
        }


        {showFare &&
          <Modal show={showPaymentModal} id='adminmodelcontainer'>
            <Modal.Header >
              <Modal.Title id='adminmodelH1'><h1>Fares</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body id='adminmodelbody'>
              <AdminViewFare />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePaymentModal} id='close'>
                Close</Button>
            </Modal.Footer>
          </Modal>
        }
        {showRoute &&
          <Modal show={showPaymentModal} id='adminmodelcontainer'>
            <Modal.Header >
              <Modal.Title id='adminmodelH1'><h1>Routes</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body id='adminmodelbody'>
              <AdminViewRoute />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePaymentModal} id='close'>
                Close</Button>
            </Modal.Footer>
          </Modal>}
        {showSchedule &&
          <Modal show={showPaymentModal} id='Generatemodelcontainer'>
            <Modal.Header >
              <Modal.Title id='adminmodelH1'><h1>Generate Schedule</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body id='adminmodelbody'>
              <GenerateSchedule />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePaymentModal} id='close'>
                Close</Button>
            </Modal.Footer>
          </Modal>}


        {showTrainSchedule && <Modal show={showPaymentModal} id='adminmodelcontainer'>
          <Modal.Header >
            <Modal.Title id='adminmodelH1'><h1>Train schedules</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body id='adminmodelbody'>
            <AdminTrainSchedule />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClosePaymentModal} id='close'>
              Close</Button>
          </Modal.Footer>
        </Modal>}
      </Container>

      
    </div>
  );
}

export default AdminMainScreen;
