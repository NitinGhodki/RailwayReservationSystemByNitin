import { Container ,Row,Col} from "react-bootstrap"
import React from 'react'

function TrainSchedule() {
  return (
    <div>
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

      <h1>Train Schedule</h1>
    </div>
  )
}

export default TrainSchedule
