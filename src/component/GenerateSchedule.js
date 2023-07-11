import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../style/GenerateSchedule.css"

function GenerateSchedule() {
  const [trainNumbers, setTrainNumbers] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8090/admin/getAllTrains')
      .then(response => {
        console.log(response.data);
        setTrainNumbers(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8090/admin/getAllRoutes')
      .then(response => {
        console.log(response.data);
        setRoutes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleTrainSelection = event => {
    setSelectedTrain(event.target.value);
  };

  const handleRouteSelection = event => {
    setSelectedRoute(event.target.value);
  };

  const handleTimeInput = event => {
    setDepartureTime(event.target.value);
  };

  const handleScheduleGeneration = () => {
    if (!selectedTrain || !selectedRoute || !departureTime) {
      toast.warning('Please select a train number, route, and departure time.');
      return;
    }

    axios.get(`http://localhost:8090/admin/generateSchedule/${selectedTrain}/${selectedRoute}/${departureTime}`)
      .then(response => {
        console.log(response.data);
        toast.success(response.data);
      })
      .catch(error => {
        console.error(error);
        toast.error('Error generating schedule.');
      });
  };  return (
    <div >
            {/* <p>You have selected train number: {selectedTrain && <span className="scheduleresult"> {selectedTrain}</span>}</p>
            <p>You have selected route: {selectedRoute && <span className="scheduleresult">{selectedRoute}</span>}</p>
            <p>Departure Time: {departureTime && <span className="scheduleresult">{departureTime}</span>}</p> */}
      <Container>
        <Row>
          <Col id='schedulefromcol'>
            <div id='form'>

              <div className="scheduleFromDiv">
                <h4 className="schedulelabelH3">Train Number:</h4>
                <Form.Control as="select" value={selectedTrain} onChange={handleTrainSelection} className = "scheduleinput">
                  <option value="">Select a train number</option>
                  {trainNumbers.map(train => (
                    <option key={train.id} value={train[0]}>{train[0]}- {train[1]}</option>))}
                </Form.Control>
              </div>

              <div className="scheduleFromDiv">
                <h4 className="schedulelabelH3">Route:</h4>
                <Form.Control as="select" value={selectedRoute} onChange={handleRouteSelection} className = "scheduleinput">
                  <option value="">Select a route</option>
                  {routes.map(route => (
                    <option key={route[0]} value={route[0]}>{route[0]}: {route[1]}</option>
                  ))}
                </Form.Control>
              </div>

              <div className="scheduleFromDiv" id='scheduleDepartureDiv'>
                <h4 className="schedulelabelH3">Departure Time:</h4>
                <Form.Control type="time" value={departureTime} onChange={handleTimeInput} id='scheduleDeparture' className = "scheduleinput"/>
              </div>


              <Button id='ScheduleOnSubmit' variant="primary" onClick={handleScheduleGeneration}>Generate Schedule</Button>
            </div>
          </Col>

        </Row>
      </Container>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default GenerateSchedule;
