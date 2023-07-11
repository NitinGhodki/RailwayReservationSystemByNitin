import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, NavLink, Row } from 'react-bootstrap';
import "../style/TrainScheduleInput.css";
import TrainSchedule from './TrainSchedule';

function TrainScheduleInput() {
    const [trainNumbers, setTrainNumbers] = useState([]);
    const [selectedTrainNumber, setSelectedTrainNumber] = useState(0);
    const [selectedComponent, setSelectedComponent] = useState();

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

    const handleTrainNumberChange = (event) => {
        setSelectedTrainNumber(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSelectedComponent('TrainSchedule');
    };


    if (selectedComponent === 'TrainSchedule') {
        return <TrainSchedule selectedTrainNumber = {selectedTrainNumber}/>
      }


    return (
        <div id='welcomeDiv'>


            <div id='welcomeDivimg'>
                <img src='train1.jpeg' id='fareContainerimg' alt='background' />
            </div>

            <Container id='ScheduleformContainer'>
                <h1 id='ScheduleContainerH1'>Train Schedule</h1>
                <Form id='Schedulefrom' onSubmit={handleSubmit}>

                    <Form.Group controlId="trainNumber" className="SchedulefromGroup">
                        <Form.Label className="ScheduleformLadel"><h4>Train Number:</h4></Form.Label>
                        <Form.Control as="select" value={selectedTrainNumber} onChange={handleTrainNumberChange} className="ScheduleformInnput">
                            <option value="">Select Train Number</option>
                            {trainNumbers.map((trainNumber) => (
                                <option key={trainNumber[0]} value={trainNumber[0]}>{trainNumber[0]}-{trainNumber[1]}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Button id='ScheduleonSubmit' variant="dark" type="submit">Submit</Button>
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

export default TrainScheduleInput