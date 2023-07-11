
import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import AdminMainScreen from './AdminMainScreen'
import { Container, Row, Col, Form, Button, Modal, NavLink } from 'react-bootstrap';
import "../style/FareDetails.css"

export default FareDetails;


function FareDetails() {

  const [fromStation, setfromStation] = useState([])
  const [toStation, settoStation] = useState([]);
  const [train_number, settrain_number] = useState([]);
  const [selectedfromStation, setselectedfromStation] = useState('')
  const [selecttoStation, setselecttoStation] = useState('');
  const [selectedtrain_number, setselectedtrain_number] = useState('');
  const [coach_type, setCoach] = useState('');
  const [response, setResponse] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  // const [paymentType, setPaymentType] = useState('');


  useEffect(() => {
    axios.get('http://localhost:8090/AllStation_Name')
      .then(response => {
        // console.log(response.data);
        setfromStation(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8090/AllStation_Name')
      .then(response => {
        // console.log(response.data);
        settoStation(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8090/admin/getAllTrainsNos')
      .then(response => {
        // console.log(response.data);
        settrain_number(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlefromStationSelection = event => {
    setselectedfromStation(event.target.value);
  };

  const handletoStationSelection = event => {
    setselecttoStation(event.target.value);
  };

  const handletrain_numberSelection = event => {
    setselectedtrain_number(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8090/fares/${encodeURIComponent(selectedfromStation)}/${encodeURIComponent(selecttoStation)}/${selectedtrain_number}/${encodeURIComponent(coach_type)}`);
      console.log(response.data)
      setShowPaymentModal(true);
      // document.log(response.data)
      setResponse(response.data);
    }
    catch (error) {
      // document.error(error);
      console.error(error);
    }
  };

  const result = response ? JSON.stringify(response, null, 2) : '';

  return (
    // <div id = 'main'>

    <div id='welcomeDiv'>

      <div id='welcomeDivimg'>
        <img src='train1.jpeg' id='fareContainerimg' alt='background' />
      </div>

      <Container id='formContainer'>
        <h1 id='ContainerH1'>Fare Enquiry</h1>
        <Form id='from' onSubmit={handleSubmit}>

          <Row>
            <Col>
              <Form.Group controlId="sourceStation" className="farefromGroup">
                <Form.Label class="formLadel"><h5>Source Station :</h5></Form.Label>
                <Form.Control as="select" value={selectedfromStation} onChange={handlefromStationSelection} required className="formInnput">
                  <option value="">Select a Source Station </option>
                  {fromStation.map(fromStationName => (
                    <option key={fromStationName.id} value={fromStationName}>{fromStationName}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="destinationStation" className="farefromGroup">
                <Form.Label class="formLadel"><h5>Destination Station :</h5></Form.Label>
                <Form.Control as="select" value={selecttoStation} onChange={handletoStationSelection} required className="formInnput">
                  <option value="">Select a Destination Station</option>
                  {toStation.map(toStationName => (
                    <option key={toStationName.id} value={toStationName}>{toStationName}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="trainNo" className="farefromGroup">
            <Form.Label class="formLadel"><h5>Train No. :</h5></Form.Label>
            <Form.Control as="select" type='number' value={selectedtrain_number} onChange={handletrain_numberSelection} required className="formInnput">
              <option value="">Select a Train Number</option>
              {train_number.map(trainNo => (
                <option key={trainNo.id} value={trainNo[0]}>{trainNo[0]}-{trainNo[1]}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="Coach_type" className="farefromGroup">
            <Form.Label class="formLadel"><h5>Coach:</h5></Form.Label>
            <Form.Control as="select" value={coach_type} onChange={(event) => setCoach(event.target.value)} required className="formInnput">
              <option value="">Select Coach</option>
              <option value="2A">2A</option>
              <option value="3A">3A</option>
            </Form.Control>
          </Form.Group>

          <Button id='onSubmit' variant="primary" type="submit" onChange={handleSubmit}>Get Fare</Button>
        </Form>
        {/* {response && (
          <div>
            <h2>Result</h2>
            <h1>{result}</h1>
          </div>
        )} */}
      </Container>

      <Modal show={showPaymentModal} onHide={handleClosePaymentModal} id='modalmain'>
        <Modal.Header closeButton>
          <Modal.Title>Fare Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {result === '"Train Between Station is not Available"' ? (
            <h3 id='modelBodyH1'>Train Between Station is not Available</h3>
          ) : result === '"Source and destination station can not be same"' ? (
            <h3 id='modelBodyH1'>Source and destination station can not be same</h3>
          ) :(
            response && (
              <div id='responseDiv'>
                <h2 id='responseH1'>Fare Amount :</h2>
                <h4><span>For {coach_type}</span> :- <span id='resultspan'>{result}</span>
                  <span id='RSspan'>&#x20B9;</span></h4>
              </div>
            )
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePaymentModal} id='close'>
            Close</Button>
        </Modal.Footer>
      </Modal>

      {/* <AdminMainScreen/> */}

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
