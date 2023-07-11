import { Container, Row, Col, Table, NavLink } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/TrainSchedule.css";

function TrainSchedule({ selectedTrainNumber }) {

  const [trainSchedule, setTrainSchedule] = useState([]);
  const [trainName, setTrainName] = useState();



  useEffect(() => {
    const fetchTrainSchedule = async () => {
      try {
        const response = await fetch(`http://localhost:8090/admin/TrainSchedule/${selectedTrainNumber}`);
        const data = await response.json();
        setTrainSchedule(data);

        const response2 = await axios.get(`http://localhost:8090/get/TrainName/${selectedTrainNumber}`);
        setTrainName(response2.data.train_name);
      } catch (error) {
        console.error("Error fetching train schedule:", error);
      }
    };
    fetchTrainSchedule();
  }, [selectedTrainNumber]);



  return (
    <div id='trainscheduleDiv'>

        <h1 id="trainscheduleContainerH1">Train Schedule for :- {selectedTrainNumber}</h1>

      <Container id="trainscheduleContainer">
        {trainSchedule.length > 0 && (
          <Container>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Train No.</th>
                  <th>Train Name</th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td>{selectedTrainNumber}</td>
                  <td>{trainName}</td>
                </tr>


              </tbody>
            </Table>
          </Container>
        )}
        {trainSchedule.length > 0 && (
          <Table striped bordered>
            <thead>
              <tr>
                <th>Station Code</th>
                <th>Station Name</th>
                <th>Route No.</th>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Halt time</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              {trainSchedule.map((schedule) => (
                <tr>
                  <td>{schedule[3]}</td>
                  <td>{schedule[4]}</td>
                  <td>{schedule[2]}</td>
                  <td>{schedule[5]}</td>
                  <td>{schedule[6]}</td>
                  <td>10  Minutes</td>
                  <td>{schedule[7]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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

    </div>
  );
}

export default TrainSchedule;