import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Button, Col, Container, Form, Modal, NavLink, Row, Table } from 'react-bootstrap'
import "../style/CancelBooking.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CancelBooking() {

    const resultRef = useRef(null);
    const [id, setid] = useState(' ');
    const [cancellation, setcancellation] = useState([]);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showFinalModal, setShowFinalModal] = useState(false);
    const [response, setResponse] = useState(null);
    const [showPaymentModal2, setShowPaymentModal2] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response1 = await axios.get(`http://localhost:8090/checkingpnrNo/${id}`)
            console.log(response1.data)
            if (response1.data) {
                try {
                    const response = await axios.get(`http://localhost:8090/cancellation/${id}`);
                    setcancellation(response.data);
                    setShowPaymentModal2(true);
                }
                catch (error) {
                    console.error(error);
                }
            }
            else {
                toast.warning('Wrong PNR Number ');
            }
        } catch (error) {
            console.error(error);
        }
    };


    const handleFinalCancellation = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8090/CancelBooking/${id}`);
            console.log(response.data)
            setShowFinalModal(true);
            setShowPaymentModal(false);
            setResponse(response.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    const handleCancelBooking = () => {
        setShowPaymentModal(true);
        setShowPaymentModal2(false);
    }

    const handleClosePaymentModal = () => {
        setShowPaymentModal(false);
    };

    const handleCloseFinalModal = () => {
        setShowFinalModal(false);
    };
    const handleClosePaymentModal2 = () => {
        setShowPaymentModal2(false);
    };

    const result = response ? JSON.stringify(response, null, 2) : '';

    return (
        <div id='welcomeDiv'>
            <div id='welcomeDivimg'>
                <img src='http://localhost:3000/RailwayReservationSystemByNitin/static/media/train1.14e33dc855b358a5c6ab.jpeg' id='fareContainerimg' alt='background' />
            </div>

            <Container id='cancelbookingCotainer'>
                <h1 variant="dark" id='cancelbookingCotainerH1'>Booking cancellation</h1>
                <div >
                    <Form id='cancelbookingForm' onSubmit={handleSubmit}>
                        <Form.Group id='cancelbookingcontrolId'>
                            <Form.Label id='cancelbookingLabelPNR'>Enter PNR No. : </Form.Label>
                            <Form.Control type="number" value={id} placeholder='Enter PNR Nunber' onChange={(event) => setid(event.target.value)} required id='cancelbookinginput' />
                        </Form.Group>
                        <Button variant="dark" type="submit" onChange={handleSubmit} id='cancelbookingsearch'>search</Button>
                    </Form>

                </div>
            </Container>

            <Modal show={showPaymentModal2} id='adminmodelcontainer'>
                <Modal.Header >
                    <Modal.Title id='adminmodelH1'><h1 id='cancelTableH1'>Your Booking Details</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body id='adminmodelbody'>
                    {cancellation.length > 0 && (
                        <Container>

                            <Container ref={resultRef} id='cancelbooking'>

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>PNR Number</th>
                                            <th>Source Station</th>
                                            <th>Destination Station</th>
                                            <th>Train Number</th>
                                            <th>Travel Date</th>
                                            <th>Class</th>
                                            <th>Number of Passenger</th>
                                            <th>Fare   </th>
                                            <th>Booking Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cancellation.map(Booking => (
                                            <tr key={Booking.id}>
                                                <td>{Booking.id}</td>
                                                <td>{Booking.source_station}</td>
                                                <td>{Booking.destination_station}</td>
                                                <td>{Booking.train_number}</td>
                                                <td>{Booking.travel_date}</td>
                                                <td>{Booking.class1}</td>
                                                <td>{Booking.passenger_no}</td>
                                                <td>{Booking.fare}</td>
                                                <td>{Booking.booking_status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <p id='cancelTableP'><span id='cancelTablespan'>Note :- </span> If You want to cancel Booking Please click on Cancel Booking Button</p>
                            </Container>
                            <div>
                                <Button variant="dark" type="button" onClick={handleCancelBooking} id='CancelBooking'>Cancel Booking</Button>
                            </div>
                        </Container>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePaymentModal2} id='close'>
                        Close</Button>
                </Modal.Footer>
            </Modal>


            <Modal show={showPaymentModal} onHide={handleClosePaymentModal} id = 'WARNING'>
                <Modal.Header closeButton>
                    <Modal.Title id='cancelWarning'>WARNING !!!!!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 id='cancelWarningH2'>Do you really want to Cancel this Booking ???</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="cancelYesNo" type='submit' onClick={handleFinalCancellation}>Yes</Button>
                    <Button variant="secondary" className="cancelYesNo" onClick={handleClosePaymentModal}>No</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showFinalModal} onHide={handleCloseFinalModal} id = 'WARNING'>
                <Modal.Header >
                    <Modal.Title> Your Booking Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {result === '"Wrong PNR Number"' && (
                        <div className="cancelResultDiv">
                            {/* <h2 style={{ marginBottom: '15px', color: '#adadad', textShadow: '2px 2px black' }}>Booking Status :</h2> */}
                            <h2 className="cancelResultH2">Result :</h2>
                            <h4><span id='cancelspan1'>Wrong PNR Number</span></h4>
                            <h6>Please Enter Correct PNR Number</h6>
                        </div>
                    )}
                    {result === '"Your booking already cancelled"' && (
                        <div className="cancelResultDiv">
                            {/* <h2 className="cancelResultH2">Result :</h2> */}
                            <h4><span id='cancelspan2'>Your booking already cancelled</span></h4>
                        </div>
                    )}
                    {result === '"Your ticket has been cancelled"' && (
                        <div className="cancelResultDiv">
                            {/* <p>{fareResponse * passengerCount}</p> */}
                            {/* <h2 className="cancelResultH2">Result :</h2> */}
                            <h4><span id='cancelspan3'>Your ticket has been cancelled</span></h4>
                        </div>
                    )}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFinalModal} id='cancelclose'>
                        Close</Button>
                </Modal.Footer>
            </Modal>

            <footer className="py-5">
                <Container className='welcomefooterContainer'>
                    <Row>
                        <Col xs={12} md={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false">
                                <title>Product</title>
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
                            </svg>
                            <small className="d-block mb-3 text-muted">© 2023-2024</small>
                        </Col>
                        <Col xs={6} md={3}>
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
    )
}

export default CancelBooking