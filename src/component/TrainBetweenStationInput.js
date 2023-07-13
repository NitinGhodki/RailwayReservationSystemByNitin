import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, NavLink, Row} from 'react-bootstrap';
import "../style/TrainBetweenStationInput.css";
import TrainBetweenStation from './trainbetweenstation';

function TrainBetweenStationInput() {
    const [sourceStation, setSourceStation] = useState('');
    const [destinationStation, setDestinationStation] = useState('');
    const [stationList, setStationList] = useState([]);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSelectedComponent('TrainBetweenStation');
    };

    const handleStationChange = (event, setStation) => {
        const selectedStation = event.target.value;
        setStation(selectedStation);
    };

    if (selectedComponent === 'TrainBetweenStation') {
        return <TrainBetweenStation sourceStation = {sourceStation} destinationStation ={destinationStation} />
      }

    return (
        <div id='welcomeDiv'>
            <div id='welcomeDivimg'>
                <img src='	http://localhost:3000/RailwayReservationSystemByNitin/static/media/train1.14e33dc855b358a5c6ab.jpeg' id='fareContainerimg' alt='background' />
            </div>

            <Container id="StationInputformContainer">

                <h1 id="StationInputContainerH1">Train Between Station</h1>

                <Form id='StationInputfrom' onSubmit={handleSubmit}>

                    <Form.Group controlId="sourceStation" className="StationInputfromControl">
                        <Form.Label className="StationInputFromLabel">Source Station:</Form.Label>
                        <Form.Control as="select" value={sourceStation} onChange={(event) => handleStationChange(event, setSourceStation)} required className="StationInputFormInput">
                            <option value="">Select Source Station</option>
                            {stationList.map((station) => (
                                <option key={station} value={station}>{station}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="destinationStation" className="StationInputfromControl">
                        <Form.Label className="StationInputFromLabel">Destination Station:</Form.Label>
                        <Form.Control as="select" value={destinationStation} onChange={(event) => handleStationChange(event, setDestinationStation)} required className="StationInputFormInput">
                            <option value="">Select Destination Station</option>
                            {stationList.map((station) => (
                                <option key={station} value={station}>{station}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Button variant="dark" type="submit" id="StationInputsubmit">Get Train</Button>

                </Form>

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

export default TrainBetweenStationInput