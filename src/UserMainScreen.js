import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Booking from './Booking';
import PNRStatus from './PNRStatus'
import Trainbetweenstation from './trainbetweenstation';
import SeatAvailable from './SeatAvailable'
import FairDetails from './FairDetails'
import Welcome from './welcome';
import './UserMainScreen.css'; 

function UserMainScreen() {
  const options = [
    {
      id: 1,
      lines: "Travel far, worry less. Check PNR status, embrace your journey's progress.",
      name: 'PNR Status',
      component: 1
    },
    {
      id: 2,
      lines: "Track your train's path, embark on a seamless ride. Train search unveils destinations with pride.",
      name: 'Train Search',
      component:2
    },
    {
      id: 3,
      lines: "Seize the moment, claim your seat. Opportunity awaits, don't miss the beat.",
      name: 'Seat Availability',
      component: 3
    },
    {
      id: 4,
      lines: "Unlock your next adventure with a simple booking. Let the journey begin!",
      name: 'Booking',
      component: 4
    },
    {
      id: 5,
      lines: "Each booking tells a story, memories unfold. A history of adventures, waiting to be retold.",
      name: 'Booking History',
      component: 5
    },
    {
      id: 6,
      lines: "Sometimes plans change, paths rearrange. Cancel your ticket, new possibilities exchange.",
      name: 'Cancel Ticket',
      component: 6
    },
    {
      id: 7,
      lines: "Affordable fares, a ticket to explore. Journey ahead, memories to adore.",
      name: 'Train Fare',
      component: 7
    },
    {
      id: 8,
      lines: "Time to bid farewell, your session complete. Logout with a smile, until we meet.",
      name: 'LogOut',
      component: 8
    },
  ];

  const handleOptionClick = (component) => {
    console.log('Open component:', component);
    if(component === 1)
    <PNRStatus></PNRStatus>
    else if(component==='2')
    <Trainbetweenstation></Trainbetweenstation>
    else if(component==='3')
    <SeatAvailable></SeatAvailable>
    else if(component==='4')
    <Booking></Booking>
    else if(component==='5')
    <SeatAvailable></SeatAvailable>
    else if(component==='6')
    <SeatAvailable></SeatAvailable>
    else if(component==='7')
    <FairDetails></FairDetails>
    else if(component==='8')
    <Welcome></Welcome>


  };

  return (
<Container className="custom-container">

  <Row className="justify-content-center">
    {options.map((option) => (
      <Col key={option.id} xs={12} sm={6} md={4} lg={3}>
        <Card className="mb-4 custom-card">
          <Card.Body>
            <div className="card-content">
              <div className="circle"><strong>{option.name}</strong></div>
              <Card.Title className="card-title">{option.lines}</Card.Title>
              <p></p>
            </div>
            <div className="button-container">
              <Button
                variant="secondary"
                onClick={() => handleOptionClick(option.component)}
              >
                {option.name}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
  );
}

export default UserMainScreen;
