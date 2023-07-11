import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Modal, NavLink } from 'react-bootstrap';
import "../style/SeatAvailable.css"

function SeatAvailable() {
  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [trainNo, setTrainNo] = useState('');
  const [coach, setCoach] = useState('');
  const [date, setDate] = useState('');
  const [response, setResponse] = useState(null);
  const [stationList, setStationList] = useState([]);
  const [trainNumbers, setTrainNumbers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStationList = async () => {
      try {
        const response = await axios.get('http://localhost:8090/AllStation_Name');
        setStationList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTrainNumbers = async () => {
      try {
        const response = await axios.get('http://localhost:8090/getAllTrainNumber');
        setTrainNumbers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStationList();
    fetchTrainNumbers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8090/CheckSeatAvailability2/${trainNo}/${encodeURIComponent(sourceStation)}/${encodeURIComponent(destinationStation || '')}/${coach}/${date}`
      );
      console.log(response.data);
      setResponse(response.data);
      setShowModal(true);
    } catch (error) {
      console.error(error);
      setResponse(null);
    }
  };

  const handleStationChange = (event, setStation) => {
    const selectedStation = event.target.value;
    setStation(selectedStation);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div id='welcomeDiv'>

      <div id='welcomeDivimg'>
        <img src='train1.jpeg' id='fareContainerimg' alt='background' />
      </div>

      <Container id='seatformContainer'>
        <h1 id='seatContainerH1'>Seat Availability</h1>
        <Form id='seatfrom' onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="sourceStation" className="seatfromControl">
                <Form.Label className="seatFromLabel">Source Station:</Form.Label>
                <Form.Control as="select" value={sourceStation} onChange={(event) => handleStationChange(event, setSourceStation)} required className="seatFormInput">
                  <option value="">Select Source Station</option>
                  {stationList.map((station) => (
                    <option key={station} value={station}>{station}</option>))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="destinationStation" className="seatfromControl">
                <Form.Label className="seatFromLabel">Destination Station:</Form.Label>
                <Form.Control as="select" value={destinationStation} onChange={(event) => handleStationChange(event, setDestinationStation)} required className="seatFormInput">
                  <option value="">Select Destination Station</option>
                  {stationList.map((station) => (
                    <option key={station} value={station}>{station}</option>))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="trainNo" className="seatfromControl">
            <Form.Label className="seatFromLabel">Train No.:</Form.Label>
            <Form.Control as="select" value={trainNo} onChange={(event) => setTrainNo(event.target.value)} required className="seatFormInput">
              <option value="">Select Train Number</option>
              {trainNumbers.map((trainNumber) => (
                <option key={trainNumber.train_number} value={trainNumber.train_number}>{trainNumber.train_number} - {trainNumber.train_name}</option>))}
            </Form.Control>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId="coach" className="seatfromControl">
                <Form.Label className="seatFromLabel">Coach:</Form.Label>
                <Form.Control as="select" value={coach} onChange={(event) => setCoach(event.target.value)} required className="seatFormInput">
                  <option value="">Select Coach</option>
                  <option value="2A">2A</option>
                  <option value="3A">3A</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="date" className="seatfromControl">
                <Form.Label className="seatFromLabel">Date:</Form.Label>
                <Form.Control size="md" type="date" value={date} onChange={(event) => setDate(event.target.value)} required className="seatFormInput"/>
              </Form.Group>
            </Col>
          </Row>

          <Button variant="dark" type="submit" id='seatsubmit'>Check Availability</Button>
        </Form>

        {typeof response === 'number' && (
          <Modal show={showModal} onHide={handleCloseModal} id = 'seatModalMain'>
            <Modal.Header closeButton>
              <Modal.Title>Total Seats</Modal.Title>
            </Modal.Header>
            <Modal.Body id='seatmodelBody'>
            <h4 id='seatbodyh4'>{date}</h4>
              <h4 id='seatbodyh4'><pre>Total Seats Available for {coach}:- </pre><span>{response}</span></h4>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}
        {typeof response === 'string' && (
          <Modal show={showModal} onHide={handleCloseModal} id = 'seatModalMain'>
            <Modal.Header closeButton>
              <Modal.Title>Not Available </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4 id='seatmodelbodyh4'>{response}</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}

      </Container>
      <footer className="py-5">
        <Container className='welcomefooterContainer'>
          <Row>
            <Col xs={6} md={2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false">
                <title>Product</title>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
              </svg>
              <small className="d-block mb-3 text-muted">© 2023-2024</small>
            </Col>
            <Col xs={13} md={4}>
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li><NavLink className="text-muted" href="#">Cool stuff</NavLink></li>
                <li><NavLink className="text-muted" href="#">Random feature</NavLink></li>
                <li><NavLink className="text-muted" href="#">Team feature</NavLink></li>
                <li><NavLink className="text-muted" href="#">Stuff for developers</NavLink></li>
                <li><NavLink className="text-muted" href="#">Another one</NavLink></li>
                <li><NavLink className="text-muted" href="#">Last time</NavLink></li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li><NavLink className="text-muted" href="#">Resource</NavLink></li>
                <li><NavLink className="text-muted" href="#">Resource name</NavLink></li>
                <li><NavLink className="text-muted" href="#">Another resource</NavLink></li>
                <li><NavLink className="text-muted" href="#">Final resource</NavLink></li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><NavLink className="text-muted" href="#">Team</NavLink></li>
                <li><NavLink className="text-muted" href="#">Locations</NavLink></li>
                <li><NavLink className="text-muted" href="#">Privacy</NavLink></li>
                <li><NavLink className="text-muted" href="#">Terms</NavLink></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div >
  );
}

export default SeatAvailable;