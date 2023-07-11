import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col, Modal, NavLink } from 'react-bootstrap';
import "../style/Booking.css";
import Ticket from './Ticket';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking({ userId }) {
  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [trainNo, setTrainNo] = useState('');
  const [coach, setCoach] = useState('');
  const [date, setDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  // const [userId, setUserId] = useState('');
  const [response, setResponse] = useState('');
  const [submittedForms, setSubmittedForms] = useState([]);
  const [fareResponse, setFareResponse] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentType, setPaymentType] = useState('');
  const [stationList, setStationList] = useState([]);
  const [trainNumbers, setTrainNumbers] = useState([]);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [PNRNo, setPNRNo] = useState(0);
  const [ticket, setTicket] = useState(false);
  const [showBookingForm, setshowBookingForm] = useState(true);
  const[CardNumber, setCardNumber] = useState('');
  const[Upi, setUpi] = useState('');


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
        const response = await axios.get('http://localhost:8090/admin/getAllTrainsNos');
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
      const response = await axios.get(`http://localhost:8090/CheckSeatAvailability2/${trainNo}/${encodeURIComponent(sourceStation)}/${encodeURIComponent(destinationStation || '')}/${coach}/${date}`);

      setResponse(response.data);
      setshowBookingForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit2 = async (event, index) => {
    event.preventDefault();

    try {
      const firstName = document.getElementById(`firstName-${index}`).value;
      const lastName = document.getElementById(`lastName-${index}`).value;
      const age = document.getElementById(`age-${index}`).value;
      const gender = document.getElementById(`gender-${index}`).value;
      const mono = document.getElementById(`mobile-${index}`).value;
      const email = document.getElementById(`email-${index}`).value;

      await axios.get(`http://localhost:8090/Add/Passdetails/${encodeURIComponent(firstName)}/${encodeURIComponent(lastName)}/${age}/${encodeURIComponent(gender)}/${mono}/${encodeURIComponent(email)}`);

      const newSubmittedForms = [...submittedForms];
      newSubmittedForms[index] = true;
      setSubmittedForms(newSubmittedForms);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakePayment = async () => {
    try {
      const fareResponse = await axios.get(`http://localhost:8090/fares/${encodeURIComponent(sourceStation)}/${encodeURIComponent(destinationStation)}/${trainNo}/${coach}`);
      const PNRNo = await axios.get(`http://localhost:8090/Get/PNR/No`);
      setPNRNo(PNRNo.data + 1);
      setFareResponse(fareResponse.data);
      setShowPaymentModal(true);
    } catch (error) {
      console.error(error);
    }

  };


  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };
  const handleTicketModalClose = () => {
    // setShowTicketModal(false);
    // setSourceStation('');
    // setDestinationStation('');
    // setTrainNo('');
    // setCoach('');
    // setDate('');
    // setPassengerCount('');
  };

  const isAllFormsSubmitted = submittedForms.length === passengerCount && submittedForms.every((form) => form);
  // console.log(userId);
  const handleBookingTicket = async () => {
    if (!paymentType.trim()) {
      toast.warning('Please select payment type.');
      return;
    }
    // if (!CardNumber.trim()) {
    //   toast.warning('Please provide card Number.');
    //   return;
    // }
    // if (!Upi.trim()) {
    //   toast.warning('Please provide UPI Id.');
    //   return;
    // }
    try {
      setShowPaymentModal(false);
      axios.get(`http://localhost:8090/Add/PassDetails`);
      axios.get(`http://localhost:8090/Add/Bookings/${encodeURIComponent(sourceStation)}/${encodeURIComponent(destinationStation)}/${trainNo}/${date}/${coach}/${passengerCount}/${encodeURIComponent(userId)}/${fareResponse}`);
      setShowTicketModal(true);
      setTicket(true);

    } catch (error) {
      console.error(error);
    }
  };

  // const handleClosePaymentModal2 = () => {
  //   setShowPaymentModal2(false);
  // };

  if (ticket) {

    return <Ticket PNRNo={PNRNo} userId={userId} trainNo={trainNo} fareResponse={fareResponse} passengerCount={passengerCount} sourceStation={sourceStation} destinationStation={destinationStation} date={date} paymentType={paymentType} coach={coach} />
  }

  return (
    <div id='welcomeDiv'>
      <div id='bookingDivimg'>
        <img src='train1.jpeg' id='bookingContainerimg12' alt='background' />
      </div>
      {showBookingForm && (
        <Container id='bookingFormContainer'>
          <h1 id='bookingContainerH1'>Train Ticket Booking</h1>
          <Form onSubmit={handleSubmit} id='bookingForm'>
            <Row>
              <Col>
                <Form.Group controlId="sourceStation" className="bookingFormControl">
                  <Form.Label className="bookingforrmLabel">Source Station:</Form.Label>
                  <Form.Control as="select" size="md" value={sourceStation} onChange={(event) => setSourceStation(event.target.value)} required className="bookingformInput">
                    <option value="">Select Source Station</option>
                    {stationList.map((station) => (
                      <option key={station} value={station}>{station}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="destinationStation" className="bookingFormControl">
                  <Form.Label className="bookingforrmLabel">Destination Station:</Form.Label>
                  <Form.Control as="select" size="md" value={destinationStation} onChange={(event) => setDestinationStation(event.target.value)} required className="bookingformInput">
                    <option value="">Select Destination Station</option>
                    {stationList.map((station) => (
                      <option key={station} value={station}>{station}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="trainNo" className="bookingFormControl">
              <Form.Label className="bookingforrmLabel">Train No.:</Form.Label>
              <Form.Control as="select" size="md" value={trainNo} onChange={(event) => setTrainNo(event.target.value)} required className="bookingformInput">
                <option value="">Select Train Number</option>
                {trainNumbers.map((trainNumber) => (
                  <option key={trainNumber[0]} value={trainNumber[0]}>{trainNumber[0]}- {trainNumber[1]}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="date" className="bookingFormControl">
                  <Form.Label className="bookingforrmLabel">Date:</Form.Label>
                  <Form.Control size="md" type="date" value={date} onChange={(event) => setDate(event.target.value)} required className="bookingformInput" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="passengerCount" className="bookingFormControl">
                  <Form.Label className="bookingforrmLabel">Passenger Count:</Form.Label>
                  <Form.Control size="md" type="number" min="1" max="3" value={passengerCount} onChange={(event) => setPassengerCount(parseInt(event.target.value))} className="bookingformInput" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="coach" className="bookingFormControl">
              <Form.Label className="bookingforrmLabel">Coach:</Form.Label>
              <Form.Control as="select" size="md" value={coach} onChange={(event) => setCoach(event.target.value)} required className="bookingformInput">
                <option value="">Select Coach</option>
                <option value="2A">2A</option>
                <option value="3A">3A</option>
              </Form.Control>
            </Form.Group>

            <Button style={{ margin: "2%" }} variant="dark" type="submit" id='bookingsubmit'>Add Passenger Details</Button>
          </Form>
        </Container>
      )}


      {/* 
      <Modal show={showPaymentModal2} id='adminmodelcontainer'>
        <Modal.Header >
          <Modal.Title id='adminmodelH1'></Modal.Title>
        </Modal.Header>
        <Modal.Body id='adminmodelbody'> */}
      {typeof response === 'string' && (
        <div>
          <Container id='bookingPassengerDetails'>
            <h1 style={{ color: "white" }}><strong>{response}</strong></h1>
          </Container>
        </div>
      )}
      {/* </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePaymentModal2} id='close'>
            Close</Button>
        </Modal.Footer>
      </Modal> */}

      {typeof response === 'number' && (
        <div>
          <Container id='bookingPassengerDetails'>
            {[...Array(passengerCount)].map((_, i) => (
              <div key={i}>
                <form onSubmit={(event) => handleSubmit2(event, i)}>
                  <h1 id='PassengerContainerH1'>Add Passenger Details</h1>

                  <Row>
                    <Col>
                      <Form.Group className="bookingFormControl">
                        <Form.Label className="bookingforrmLabel">First Name :</Form.Label>
                        <Form.Control size="md" placeholder="First Name" type="text" id={`firstName-${i}`} name={`firstName-${i}`} required className="bookingformInput" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="bookingFormControl">
                        <Form.Label className="bookingforrmLabel">Last Name :</Form.Label>
                        <Form.Control size="md" placeholder="Last Name" type="text" id={`lastName-${i}`} name={`lastName-${i}`} required className="bookingformInput" />
                      </Form.Group>
                    </Col>
                  </Row>


                  <Row>
                    <Col>
                      <Form.Group className="bookingFormControl">
                        <Form.Label className="bookingforrmLabel">Gender :</Form.Label>
                        <Form.Control as="select" size="md" id={`gender-${i}`} name={`gender-${i}`} required className="bookingformInput">
                          <option value="">Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="other">Other</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="bookingFormControl">
                        <Form.Label className="bookingforrmLabel">Age :</Form.Label>
                        <Form.Control size="md" placeholder="Age" type="number" id={`age-${i}`} name={`age-${i}`} min="0" max="120" required className="bookingformInput" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="bookingFormControl">
                        <Form.Label className="bookingforrmLabel">Email :</Form.Label>
                        <Form.Control size="md" placeholder="Email" type="email" id={`email-${i}`} name={`email-${i}`} required className="bookingformInput" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="bookingFormControl">
                        <Form.Label className="bookingforrmLabel">Mobile Number :</Form.Label>
                        <Form.Control size="md" placeholder="Mobile Number" type="tel" id={`mobile-${i}`} name={`mobile-${i}`} pattern="[0-9]{10}" required className="bookingformInput" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <button type="submit" variant="dark" id='bookingPassengersubmit'>Submit</button>
                </form>
                {/* <hr></hr> */}
              </div>
            ))}
            {isAllFormsSubmitted && (
              <div>
                {<Button style={{ margin: "2%" }} variant="dark" onClick={handleMakePayment} id='bookingPassengerPayment'>Make Payment</Button>}
              </div>
            )}
          </Container>
        </div>
      )}




      <Modal show={showPaymentModal} onHide={handleClosePaymentModal} id="bookingmodel">
        <Modal.Header closeButton>
          <Modal.Title>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Payment Amount :- <span>{fareResponse * passengerCount} </span><span id='bookinngRupee'>&#x20B9;</span></h5>

          <Form.Group controlId="paymentType" className='bookingPaymentType'>
            <Form.Label className="loginformLadel">Payment Type:</Form.Label>
            <Form.Control as="select" value={paymentType} onChange={handlePaymentTypeChange} required className="formInnput">
              <option value="">Payment Type</option>
              <option value="creditDebitCard">Credit Card/Debit Card</option>
              <option value="upi">UPI</option>
            </Form.Control>
          </Form.Group>
          {paymentType === 'creditDebitCard' && (
            <Form.Group controlId="cardNo" className='bookingPaymentType'>
              <Form.Label className="loginformLadel">Card Number:</Form.Label>
              <Form.Control type="text" pattern="[0-9]{12}" placeholder='Enter your Card Number .' value={CardNumber} onChange={(event) => setCardNumber(event.target.value)} required className="formInnput" />
              <Form.Control.Feedback type="invalid">
                Please enter a 12-digit card number.
              </Form.Control.Feedback>
            </Form.Group>
          )}
          {paymentType === 'upi' && (
            <Form.Group controlId="upiId" className='bookingPaymentType'>
              <Form.Label className="loginformLadel">UPI ID:</Form.Label>
              <Form.Control type="text" pattern="[0-9]{10}@[a-zA-Z]{3}" placeholder='Enter your UPI Id' value={Upi} onChange={(event) => setUpi(event.target.value)} required className="formInnput" />
              <Form.Control.Feedback type="invalid">
                Please enter a valid UPI ID (e.g., 1234567890@upi).
              </Form.Control.Feedback>
            </Form.Group>
          )}
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBookingTicket} id='bookingPay'>
            Pay
          </Button>
          <Button variant="secondary" onClick={handleClosePaymentModal} id='bookingClose'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {showTicketModal && (
        <Modal show={showTicketModal} onHide={handleTicketModalClose} id="bookingmodel">
          <Modal.Header closeButton>
            <Modal.Title>Ticket</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div id='bookingTicket'>
              <div id='bookingTicketheader'>
                <Row>
                  {/* <Col>
                    <img src='train logo4.png' alt='logo' id='bookinghomeimg' />
                  </Col> */}
                  <Col>
                    <p>PNR No. : {PNRNo - 1}</p>
                  </Col>
                </Row>
              </div>
              <div id='bookingTicketbody'>
                <Row>
                  <Col>
                    <p>Name of Passenger : {userId}</p>
                  </Col>
                  <Col>
                    <p>Train Number : {trainNo}</p>
                  </Col>
                  <Col>
                    <p>Pay Amount : {fareResponse * passengerCount} <span id='bookinngRupee'>&#x20B9;</span></p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>From : {sourceStation} </p>
                  </Col>
                  <Col></Col>
                  <Col>
                    <p>Payment Type : {paymentType}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>To : {destinationStation}</p>
                  </Col>
                  <Col></Col>
                  <Col>
                    <p>Passenger Count : {passengerCount}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Date : {date}</p>
                  </Col>
                  <Col>
                    <p>Depature :</p>
                  </Col>
                  <Col>
                    <p>Arrive :</p>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
              <div id='bookingTicketfooter'>
                <p id='bookingTicketfooterP'>Class : {coach}</p>
              </div>
            </div>
            {/* <h4>Booking Details:</h4>
            <p>PNR No. : {PNRNo - 1}</p>
            <p>Train Number: {trainNo}</p>
            <p>Date: {date}</p>
            <p>From : {sourceStation} To : {destinationStation}</p>
            <p>Class : {coach}</p>
            <p>Passenger Count: {passengerCount}</p>
            <h4>Payment Details:</h4>
            <p>Payment Type: {paymentType}</p>
            <p>Fare Amount: {fareResponse * passengerCount}</p> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleTicketModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <footer className="py-5">
        <Container className='bookingfooterContainer12'>
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
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Booking;