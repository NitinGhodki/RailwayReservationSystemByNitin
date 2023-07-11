import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, NavLink, Row, Table } from 'react-bootstrap'
import "../style/BookingHistory.css"
import axios from 'axios';

function BookingHistory({userId}) {

    const [BookingHistory, setBookingHistory] = useState([]);
    const [Passenger, setPassenger] = useState([]);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    console.log(userId);
    useEffect(() => {
        axios.get(`http://localhost:8090/Booking_History/${encodeURIComponent(userId)}`)
            .then((res) => {
                setBookingHistory(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [userId]);

    const handleButtonClick = (id) => {
        console.log('Button clicked with ID:', id);
        // Perform any desired actions with the ID
        fetch(`http://localhost:8090/getAllPassenger/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Passenger Details:', data);
                setShowPaymentModal(true);
                setPassenger(data);
            })
            .catch((error) => console.log(error));
    };

    const handleClosePaymentModal = () => {
        setShowPaymentModal(false);
      };

    return (
        <div id='BookinghistoryDiv'>

            <Container id='booking'>
                <h1 id='bookingContainer2H1' >Your Booking History</h1>
                <Container>
                <p id='bookingTableP'><span id='bookingTablespan'>Note :- </span> If You want to see Passenger Details Please click on Passenger Number</p>

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
                            {BookingHistory.map(Booking => (
                                <tr key={Booking.id}>
                                    <td>{Booking.id}</td>
                                    <td>{Booking.source_station}</td>
                                    <td>{Booking.destination_station}</td>
                                    <td>{Booking.train_number}</td>
                                    <td>{Booking.travel_date}</td>
                                    <td>{Booking.class1}</td>
                                    <td><Button id='buttonPassenger_no' onClick={() => handleButtonClick(Booking.id)}>
                                        {Booking.passenger_no}
                                    </Button></td>
                                    <td>{Booking.fare}</td>
                                    <td>{Booking.booking_status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                   
                </Container>
            </Container>

            <Modal show={showPaymentModal} id='adminmodelcontainer'>
            <Modal.Header >
              <Modal.Title id='adminmodelH1'><h1 id='bookingPassengerH1'>Passenger Details</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body id='adminmodelbody'>
                {Passenger.length === 0 && (<h3>Passenger detail is not Available.</h3>)}
            {Passenger.length > 0 && (
                <Container id='passenger'>
                    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>PNR Number</th>
                                <th>Passenger Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Mobile Number</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Passenger.map(pass => (
                                <tr key={pass.passenger_id}>
                                    <td>{pass.pnrNo}</td>
                                    <td>{pass.passenger_id}</td>
                                    <td>{pass.firstName}</td>
                                    <td>{pass.lastName}</td>
                                    <td>{pass.age}</td>
                                    <td>{pass.gender}</td>
                                    <td>{pass.mobileNo}</td>
                                    <td>{pass.email}</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Container>
            )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePaymentModal} id='close'>
                Close</Button>
            </Modal.Footer>
          </Modal>
           


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

        </div>
    )
}

export default BookingHistory