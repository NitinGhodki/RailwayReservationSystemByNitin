import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
export default FairDetails;

function FairDetails() {

  const [fromStation, setfromStation] = useState([])
  const [toStation, settoStation] = useState([]);
  const [train_number, settrain_number] = useState([]);
  const [selectedfromStation, setselectedfromStation] = useState('')
  const [selecttoStation, setselecttoStation] = useState('');
  // const [selectedtrain_number, setselectedtrain_number] = useState('');
  const [coach_type, setCoach] = useState('');
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8090/AllStation_Name')
      .then(response => {
        console.log(response.data);
        setfromStation(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8090/AllStation_Name')
      .then(response => {
        console.log(response.data);
        settoStation(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8090/getAllTrainNumbers')
      .then(response => {
        console.log(response.data);
        settrain_number(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  const handlefromStationSelection = event => {
    setselectedfromStation(event.target.value);
  };

  const handletoStationSelection = event => {
    setselecttoStation(event.target.value);
  };

  // const handletrain_numberSelection = event => {
  //   setselectedtrain_number(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8090/fares/${encodeURIComponent(selectedfromStation)}/${encodeURIComponent(selecttoStation)}/${train_number}/${encodeURIComponent(coach_type)}`);
      console.log(response.data)
      document.log(response.data)
      setResponse(response.data);
    }
    catch (error) {
      document.error(error);
      console.error(error);
    }
  };

  return (
    <div>

      <Container>
        <Row>
          <Col xs={12} md={4}>
            <img src='https://source.unsplash.com/150x110/?train' alt='train' />
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
      <Container>
        <h1>Fare calculation</h1>
        <Form style={{ width: '50%', margin: 'auto' }} onSubmit={handleSubmit}>


          <Form.Group controlId="sourceStation">
            <Form.Label style={{ margin: '20px 0px 0px 0px' }}><h5>Source Station :</h5></Form.Label>
            <Form.Control as="select" value={selectedfromStation} onChange={handlefromStationSelection}>
              <option value="">Select a Source Station </option>
              {fromStation.map(name => (
                <option key={name.id} value={name}>{name}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="destinationStation">
            <Form.Label style={{ margin: '20px 0px 0px 0px' }}><h5>Destination Station :</h5></Form.Label>
            <Form.Control as="select" value={selecttoStation} onChange={handletoStationSelection}>
              <option value="">Select a Destination Station</option>
              {toStation.map(name => (
                <option key={name.id} value={name}>{name}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="trainNo">
            <Form.Label style={{ margin: '20px 0px 0px 0px' }}><h5>Train No. :</h5></Form.Label>
            {/* <Form.Control as="select" value={selectedtrain_number} onChange={handletrain_numberSelection}>
              <option value="">Select a Train Number</option>
              {train_number.map(name => (
                <option key={name.id} value={name}>{name}</option>
              ))}
            </Form.Control> */}
            <Form.Control as="select" value={train_number} onChange={(event) => settrain_number(event.target.value)}>
                <option value="">Select Train Nunber</option>
                <option value="12222">12222</option>
                <option value="22222">22222</option>
                <option value="15067">15067</option>
              </Form.Control>
          </Form.Group>

          <Form.Group controlId="Coach_type">
            <Form.Label style={{ margin: '20px 0px 0px 0px' }}>Coach:</Form.Label>
            <Form.Control as="select" value={coach_type} onChange={(event) => setCoach(event.target.value)}>
              <option value="">Select Coach</option>
              <option value="2A">2A</option>
              <option value="3A">3A</option>
            </Form.Control>
          </Form.Group>

          <Button style={{ margin: "2%", padding: '10px 30px 10px 32px' }} variant="primary" type="submit" onChange={handleSubmit}>Get Fare</Button>
        </Form>
        {response && (
          <div>
            <h2>Result</h2>
            <h1>{JSON.stringify(response, null, 2)}</h1>
          </div>
        )}
      </Container>




    </div>
  );
}
