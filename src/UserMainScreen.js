import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import PNRStatus from './PNRStatus';
import Booking from './Booking';
import SeatAvailable from './SeatAvailable';
import FairDetails from './FairDetails';
import Welcome from './welcome';
import Trainbetweenstation from './trainbetweenstation';
import CancelTicket from './CancelTicket';
import BookingHistory from './BookingHistory';

class RailwayReservationSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: null,
    };
  }

  handlePNRStatus = () => {
    this.setState({ selectedComponent: <PNRStatus /> });
  };

  handleTrainSearch = () => {
    this.setState({ selectedComponent: <Trainbetweenstation /> });
  };

  handleSeatAvailability = () => {
    this.setState({ selectedComponent: <SeatAvailable /> });
  };

  handleBooking = () => {
    this.setState({ selectedComponent: <Booking /> });
  };

  handleBookingHistory = () => {
    this.setState({ selectedComponent: <BookingHistory /> });
  };

  handleCancelTicket = () => {
    this.setState({ selectedComponent: <CancelTicket /> });
  };

  handleTrainFare = () => {
    this.setState({ selectedComponent: <FairDetails /> });
  };

  handleLogout = () => {
    this.setState({ selectedComponent: <Welcome /> });
  };

  handleBack = () => {
    this.setState({ selectedComponent: null });
  };

  render() {
    const { selectedComponent } = this.state;

    if (selectedComponent) {
      return (
        <Container>
          <Row>
            <Col>
              <Button variant="secondary" onClick={this.handleBack} className="backButton">
                <span className="buttonText">Return to login</span>
              </Button>
            </Col>
          </Row>
          {selectedComponent}
        </Container>
      );
    }
    return (
      
      <Container>
        <Row>
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

        </Row>
        <Row>
          <Col>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <div className="card-content">
                  <div className="circle"><strong>PNR Status</strong></div>
                  <Card.Title className="card-title">"Travel far, worry less. Check PNR status, embrace your journey's progress."</Card.Title>
                  <Button variant="secondary" onClick={this.handlePNRStatus}>PNR Status</Button>
                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <div className="card-content">
                  <div className="circle"><strong>Train Search</strong></div>
                  <Card.Title className="card-title">"Track your train's path, embark on a seamless ride. Train search unveils destinations with pride."</Card.Title>
                  <Button variant="secondary" onClick={this.handleTrainSearch}>Train Search</Button>

                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <div className="card-content">
                  <div className="circle"><strong>Seat Availability</strong></div>
                  <Card.Title className="card-title">"Seize the moment, claim your seat. Opportunity awaits, don't miss the beat."</Card.Title>
                  <Button variant="secondary" onClick={this.handleSeatAvailability}>Seat Availability</Button>

                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <div className="card-content">
                  <div className="circle"><strong>Booking</strong></div>
                  <Card.Title className="card-title">"Unlock your next adventure with a simple booking. Let the journey begin!"</Card.Title>
                  <Button variant="secondary" onClick={this.handleBooking}>Booking</Button>

                </div>
              </Card.Body>
            </Card>

          </Col>

        </Row>
        <Row>
          <Col>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <div className="card-content">
                  <div className="circle"><strong>Booking History</strong></div>
                  <Card.Title className="card-title">"Each booking tells a story, memories unfold. A history of adventures, waiting to be retold."</Card.Title>
                  <Button variant="secondary" onClick={this.handleBookingHistory}>Booking History</Button>

                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <div className="card-content">
                  <div className="circle"><strong>Cancel Ticket</strong></div>
                  <Card.Title className="card-title">"Sometimes plans change, paths rearrange. Cancel your ticket, new possibilities exchange."</Card.Title>
                  <Button variant="secondary" onClick={this.handleCancelTicket}>Cancel Ticket</Button>

                </div>
              </Card.Body>
            </Card>

          </Col>

        </Row>
        <Row>
          <Col>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <div className="card-content">
                  <div className="circle"><strong>Train Fare</strong></div>
                  <Card.Title className="card-title">"Affordable fares, a ticket to explore. Journey ahead, memories to adore."</Card.Title>
                  <Button variant="secondary" onClick={this.handleTrainFare}>Train Fare</Button>

                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card className="mb-4 custom-card">
              <Card.Body>
                <div className="card-content">
                  <div className="circle"><strong>LogOut</strong></div>
                  <Card.Title className="card-title">"Time to bid farewell, your session complete. Logout with a smile, until we meet."</Card.Title>
                  <Button variant="secondary" onClick={this.handleLogout}>LogOut</Button>

                </div>
              </Card.Body>
            </Card>

          </Col>

        </Row>
      </Container>
    );
  }
}

export default RailwayReservationSystem;
