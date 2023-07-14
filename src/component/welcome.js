import React, { useEffect, useState } from 'react'
import { Button, Form, Image, NavLink } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import '../style/welcome.css';
import TrainSchedule from './TrainSchedule';
import PNRStatus from './PNRStatus';
import TrainBetweenStation from './trainbetweenstation';

const date = new Date();

function Welcome() {

  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [stationList, setStationList] = useState([]);
  const [trainstation, settrainstation] = useState(true);
  const [pnrStatus, setpnrStatus] = useState(false);
  const [trainSchedule, settrainSchedule] = useState(false);
  const [id, setid] = useState(' ');
  const [selectedTrainNumber, setSelectedTrainNumber] = useState(0);
  const [trainNumbers, setTrainNumbers] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState();



  useEffect(() => {
    const fetchStationList = async () => {
      try {
        const response = await axios.get('http://localhost:8090/AllStation_Name');
        setStationList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStationList();
  }, []);

  useEffect(() => {
    fetchTrainNumbers();
  }, []);

  const fetchTrainNumbers = async () => {
    try {
      const response = await fetch("http://localhost:8090/admin/getAllTrainsNos");
      const data = await response.json();
      setTrainNumbers(data);
    } catch (error) {
      console.error("Error fetching train numbers:", error);
    }
  };


  const handletrainbetweenstationSubmit = (event) => {
    event.preventDefault();
    // setSelectedComponent(<TrainBetweenStation/>);
    setSelectedComponent('TrainBetweenStation');
  };

  const handlepnrStatusSubmit = (event) => {
    event.preventDefault();
    setSelectedComponent('PNRStatus');
    // setSelectedComponent(<PNRStatus pnrStatus = {pnrStatus}/>);
  };

  const handletrainScheduleSubmit = (event) => {
    event.preventDefault();
    setSelectedComponent('TrainSchedule');
    // setSelectedComponent(<TrainSchedule/>);
  };

  const handleStationChange = (event, setStation) => {
    const selectedStation = event.target.value;
    setStation(selectedStation);
  };

  const handletrainstation = () => {
    settrainstation(true);
    setpnrStatus(false);
    settrainSchedule(false);
  };

  const handlepnrStatus = () => {
    setpnrStatus(true);
    settrainSchedule(false);
    settrainstation(false);
  };

  const handletrainSchedule = () => {
    settrainSchedule(true);
    settrainstation(false);
    setpnrStatus(false);
  };

  const handleTrainNumberChange = (event) => {
    setSelectedTrainNumber(event.target.value);
  };

  if (selectedComponent === 'TrainBetweenStation') {
    return <TrainBetweenStation sourceStation = {sourceStation} destinationStation ={destinationStation} />
  }

  if (selectedComponent === 'TrainSchedule') {
    return <TrainSchedule selectedTrainNumber = {selectedTrainNumber}/>
  }

  if (selectedComponent === 'PNRStatus') {
    return <PNRStatus id = {id}/>
  }


  return (
    <div id='welcomeDiv'>

      <div id='welcomeDivimg'>
        <img src='http://localhost:3000/RailwayReservationSystemByNitin/static/media/train23.06a031a524a44f538b45.png' id='welcomeContainerimg' alt='background' />
      </div>
      <Container id='welcomeContainer'>
        <h1 id='welcomeslideH1'>Indian Railway</h1>
        <p id='welcomeslideP' ><strong>"Indian Railways is the largest rail network in Asia and the world's
          second-largest under NavLink single management system. It operates more than
          20,000 passenger and freight trains daily, connecting over 7,000 stations
          across the country."</strong></p>
      </Container>

      <Container id='welcomeContainer2'>
        <div id='trainbetweenstationdivButton'>
          <Button className="trainwelcombutton" onClick={handletrainstation} style={{
            color: trainstation ? 'black' : '',
            backgroundColor: trainstation ? 'white' : '#d9d9d9',
            filter: trainstation? "drop-shadow(2px 4px 6px black)" : "blur(1px)"
          }}>
            Train Between Station</Button>
          <Button className="trainwelcombutton" onClick={handlepnrStatus}
            style={{
              color: pnrStatus ? 'black' : '',
              backgroundColor: pnrStatus ? 'white' : '#d9d9d9',
              filter: pnrStatus? "drop-shadow(2px 4px 6px black)" : "blur(1px)"
            }}
          >PNR Status</Button>
          <Button className="trainwelcombutton" onClick={handletrainSchedule}
            style={{
              color: trainSchedule ? 'black' : '',
              backgroundColor: trainSchedule ? 'white' : '#d9d9d9',
              filter: trainSchedule? "drop-shadow(2px 4px 6px black)" : "blur(1px)"
            }}
          >Train Schedule</Button>
        </div>

        {trainstation && (

          <Form id='trainbetweenstationfrom' onSubmit={handletrainbetweenstationSubmit}>
            <div id='trainbetweenstationdin'>
              <Form.Group controlId="sourceStation" className='trainbetweenstationfromgroup' >
                <Form.Control as="select" value={sourceStation} onChange={(event) => handleStationChange(event, setSourceStation)} required className="trainbetweenstationFormInput">
                  <option value="">Select Source Station</option>
                  {stationList.map((station) => (
                    <option key={station} value={station}>{station}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="destinationStation" className='trainbetweenstationfromgroup'>
                <Form.Control as="select" value={destinationStation} onChange={(event) => handleStationChange(event, setDestinationStation)} required className="trainbetweenstationFormInput">
                  <option value="">Select Destination Station</option>
                  {stationList.map((station) => (
                    <option key={station} value={station}>{station}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button variant="dark" type="submit" id="trainbetweenstationsubmit">Get Train</Button>
            </div>
          </Form>
        )}

        {pnrStatus && (
          <Form id='trainbetweenstationfrom' onSubmit={handlepnrStatusSubmit}>
            <div id='trainbetweenstationdin'>
              <Form.Group controlId="PnrNo." className='trainbetweenstationfromgroup'>
                <Form.Control type="number" value={id} placeholder='Enter PNR Number' onChange={(event) => setid(event.target.value)} required className='pnrStatusinput' />
              </Form.Group>
              <Button variant="dark" type="submit" onChange={handlepnrStatusSubmit} id='pnrStatusSubmit'>search</Button>
            </div>
          </Form>
        )}

        {trainSchedule && (
          <Form id='trainbetweenstationfrom' onSubmit={handletrainScheduleSubmit}>

            <div id='trainbetweenstationdin'>
              <Form.Group controlId="trainNumber" className='trainbetweenstationfromgroup'>
                <Form.Control as="select" value={selectedTrainNumber} onChange={handleTrainNumberChange} className="pnrStatusinput">
                  <option value="">Select Train Number</option>
                  {trainNumbers.map((trainNumber) => (
                    <option key={trainNumber[0]} value={trainNumber[0]}>{trainNumber[0]}-{trainNumber[1]}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button variant="dark" type="submit" value={selectedComponent} id='pnrStatusSubmit'>Submit</Button>
            </div>
          </Form>
        )}
        {/* {selectedComponent} */}
      </Container>

      <Container className="my-5">
        <h1 style={{ margin: '50px', marginTop: '15%' }}>Trending</h1>
        <Row className="mb-2">
          <Col md={6} className='welcomeTrain'>
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <Col className="p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Train</strong>
                <h3 className="mb-0">Maharajas' Express</h3>
                <div className="mb-1 text-muted">{date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                <p className="card-text mb-auto">Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on NavLink sojourn to the era of bygone stately splendour of princely states.</p>
                <a href="/" className="stretched-link">Continue reading</a>
              </Col>
              <Col className="auto d-none d-lg-block">
                <Image className="bd-placeholder-img" src="https://source.unsplash.com/200x250/?train" id ='imgtrain' />
              </Col>
            </div>
          </Col>
          <Col md={6} className='welcomeTrain'>
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <Col className="p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Tourist</strong>
                <h3 className="mb-0">Bharat Gaurav Tourist Train</h3>
                <div className="mb-1 text-muted">{date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                <p className="mb-auto">IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for the passengers</p>
                <a href="/" className="stretched-link">Continue reading</a>
              </Col>
              <Col className="auto d-none d-lg-block">
                <Image className="bd-placeholder-img" src="https://source.unsplash.com/200x250/?temple" id ='imgtrain' />
              </Col>
            </div>
          </Col>
        </Row>
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
  )
}

export default Welcome
