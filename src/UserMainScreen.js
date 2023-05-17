import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import PNRStatus from './PNRStatus';
import Booking from './Booking';
import SeatAvailable from './SeatAvailable';
import FairDetails from './FairDetails';

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
    // Add code to handle Train Search functionality
  };

  handleSeatAvailability = () => {
    this.setState({ selectedComponent: <SeatAvailable /> });
  };

  handleBooking = () => {
    this.setState({ selectedComponent: <Booking /> });
  };

  handleBookingHistory = () => {
    // Add code to handle Booking History functionality
  };

  handleCancelTicket = () => {
    // Add code to handle Cancel Ticket functionality
  };

  handleTrainFare = () => {
    this.setState({ selectedComponent: <FairDetails /> });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className='containerStyle'>
            <p>"Travel far, worry less. Check PNR status, embrace your journey's progress."</p>
            <Button variant="secondary" onClick={this.handlePNRStatus}>PNR Status</Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={this.handleTrainSearch}>Train Search</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" onClick={this.handleSeatAvailability}>Seat Availability</Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={this.handleBooking}>Booking</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" onClick={this.handleBookingHistory}>Booking History</Button>
          </Col>
          <Col>
            <Button variant="secondary" onClick={this.handleCancelTicket}>Cancel Ticket</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" onClick={this.handleTrainFare}>Train Fare</Button>
          </Col>
        </Row>

        {this.state.selectedComponent}
      </Container>
    );
  }
}

export default RailwayReservationSystem;
