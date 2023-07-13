import React from 'react';
import { Button, Container, Row, Col, Card, NavLink } from 'react-bootstrap';
import Booking from './Booking';
import SeatAvailable from './SeatAvailable';
import FareDetails from './FareDetails';
import CancelBooking from './CancelBooking';
import BookingHistory from './BookingHistory';
import "../style/UserMainScreen.css"
import PNRStatusInput from './PNRStatusInput';
import TrainBetweenStationInput from './TrainBetweenStationInput';
import TrainScheduleInput from './TrainScheduleInput';

class RailwayReservationSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: null,
    };
  }

  handlePNRStatus = () => {
    this.setState({ selectedComponent: <PNRStatusInput /> });
  };

  handleTrainSearch = () => {
    this.setState({ selectedComponent: <TrainBetweenStationInput /> });
  };

  handleTrainSchedule = () => {
    this.setState({ selectedComponent: <TrainScheduleInput /> })
  };

  handleSeatAvailability = () => {
    this.setState({ selectedComponent: <SeatAvailable /> });
  };

  handleBooking = () => {
    this.setState({ selectedComponent: <Booking userId={this.props.userId} /> });
  };

  handleBookingHistory = () => {
    this.setState({ selectedComponent: <BookingHistory userId={this.props.userId} /> });
  };

  handleCancelTicket = () => {
    this.setState({ selectedComponent: <CancelBooking /> });
  };

  handleTrainFare = () => {
    this.setState({ selectedComponent: <FareDetails /> });
  };

  handleLogout = () => {
    window.location.href = '/welcome';
  };

  handleBack = () => {
    this.setState({ selectedComponent: null });
  };

  render() {
    const { selectedComponent } = this.state;
    const { userId } = this.props;


    if (selectedComponent) {
      return (
        <Container id='homeContainer'>
          <Row id='homerow'>
            <Col>
              <div>
                <img src='http://localhost:3000/RailwayReservationSystemByNitin/static/media/train%20logo2.5ae3fd3d90e087dfcda2.png' alt='logo' id='homeimg' />
              </div>
            </Col>
            <Col>
              <p id='homewelcomeP'><span id='homewelcomespan'>Hii </span> {userId}</p>
            </Col>
            <Col>
              <Button variant="secondary" onClick={this.handleBack} className="backButton homebutton">
                <span className="buttonText ">Home</span>
              </Button>
            </Col>
          </Row>
          {selectedComponent}
        </Container>
      );
    }

    return (
      <div id='usermsinpageDiv' >
        
        <Container id='homeContainer2'>
          <Row id='mainhomerow2'>
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
              <Button variant="secondary" onClick={this.handleLogout} className=" homebuttonlogout">LogOut</Button>
              <Button id='homeImeButton'><img src='	http://localhost:3000/RailwayReservationSystemByNitin/static/media/prologo.5d47b97e36010bb0831e.png' alt='proLogo' id='proLogo'/></Button>
            </Col>
          </Row>
          {/* {selectedComponent} */}
        </Container>
        <div className ='bigimg'></div>
        <Container>
          <Container id='userCotainerHeader'>
            <h1 id='mainslideH1' >Indian Railway</h1>
            <p id='welcomeslideP' ><strong>"Indian Railways is the largest rail network in Asia and the world's
              second-largest under NavLink single management system. It operates more than
              20,000 passenger and freight trains daily, connecting over 7,000 stations
              across the country."</strong></p>
          </Container>
          <Container id='usercon'>
            <Row className="userrow2" >
              <Col>
                <Card className="mb-4 custom-card bg-light text-dark">
                  <Card.Body className="userMaincardBody" style={{height: '255px'}}>
                    <div className="card-content">
                      <div className="circle userMainHeading">PNR Status</div>
                      <Card.Title className="card-title userMainCardTitle">
                        "Travel far, worry less. Check PNR status, embrace your journey's progress."
                      </Card.Title>
                      <Button variant="secondary" onClick={this.handlePNRStatus} className="userMainCardButton" style={{marginTop:'10%'}}>PNR Status</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="mb-4 custom-card bg-light text-dark">
                  <Card.Body className="userMaincardBody">
                    <div className="card-content">
                      <div className="circle userMainHeading">Train Schedule</div>
                      <Card.Title className="card-title userMainCardTitle">
                        "Trains are the threads that connect cities and people, weaving a tapestry of schedules and destinations."

                      </Card.Title>
                      <Button variant="secondary" onClick={this.handleTrainSchedule} className="userMainCardButton">Train Schedule</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="userrow2">
              <Col>
                <Card className="mb-4 custom-card bg-light text-dark">
                  <Card.Body className="userMaincardBody">
                    <div className="card-content">
                      <div className="circle userMainHeading">Train Between Station</div>
                      <Card.Title className="card-title userMainCardTitle">
                        "Track your train's path, embark on a seamless ride. Train search unveils destinations with pride."
                      </Card.Title>
                      <Button variant="secondary" onClick={this.handleTrainSearch} className="userMainCardButton">Train Between Station</Button>
                    </div>
                  </Card.Body>
                </Card>

              </Col>
              <Col>
                <Card className="mb-4 custom-card bg-light text-dark">
                  <Card.Body className="userMaincardBody" style={{height: '255px'}}>
                    <div className="card-content">
                      <div className="circle userMainHeading">Seat Availability</div>
                      <Card.Title className="card-title userMainCardTitle">
                        "Seize the moment, claim your seat. Opportunity awaits, don't miss the beat."
                      </Card.Title>
                      <Button variant="secondary" onClick={this.handleSeatAvailability} className="userMainCardButton" style={{marginTop:'10%'}}>Seat Availability</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="userrow2">
              <Col>
                <Card className="mb-4 custom-card bg-light text-dark">
                  <Card.Body className="userMaincardBody">
                    <div className="card-content">
                      <div className="circle userMainHeading">Train Fare</div>
                      <Card.Title className="card-title userMainCardTitle">
                        "Affordable fares, a ticket to explore. Journey ahead, memories to adore."
                      </Card.Title>
                      <Button variant="secondary" onClick={this.handleTrainFare} className="userMainCardButton">Train Fare</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="mb-4 custom-card bg-light text-dark">
                  <Card.Body className="userMaincardBody">
                    <div className="card-content">
                      <div className="circle userMainHeading">Booking</div>
                      <Card.Title className="card-title userMainCardTitle">
                        "Unlock your next adventure with a simple booking. Let the journey begin!"
                      </Card.Title>
                      <Button variant="secondary" onClick={this.handleBooking} className="userMainCardButton">Booking</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="userrow2">
              <Col>
                <Card className="mb-4 custom-card bg-light text-dark">
                  <Card.Body className="userMaincardBody">
                    <div className="card-content">
                      <div className="circle userMainHeading">Cancel Ticket</div>
                      <Card.Title className="card-title userMainCardTitle">
                        "Sometimes plans change, paths rearrange. Cancel your ticket, new possibilities exchange."
                      </Card.Title>
                      <Button variant="secondary" onClick={this.handleCancelTicket} className="userMainCardButton">Cancel Ticket</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="mb-4 custom-card bg-light text-dark">
                  <Card.Body className="userMaincardBody">
                    <div className="card-content">
                      <div className="circle userMainHeading">Booking History</div>
                      <Card.Title className="card-title userMainCardTitle">
                        "Each booking tells a story, memories unfold. A history of adventures, waiting to be retold."
                      </Card.Title>
                      <Button variant="secondary" onClick={this.handleBookingHistory} className="userMainCardButton">Booking History</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* <Row className="userrow3">
            <Col>
              <Card className="mb-4 custom-card bg-light text-dark">
                <Card.Body className="userMaincardBody">
                  <div className="card-content">
                    <div className="circle userMainHeading">LogOut</div>
                    <Card.Title className="card-title userMainCardTitle">
                      "Time to bid farewell, your session complete. Logout with a smile, until we meet."
                    </Card.Title>
                    <Button variant="secondary" onClick={this.handleLogout} className="userMainCardButton">LogOut</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
          </Container>
        </Container>

        <footer className="py-5" style={{position: "relative"}}>
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
              <Col xs={10} md={4}>
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
              <Col xs={6} md={2}>
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

    );
  }
}

export default RailwayReservationSystem;