import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, NavLink, Row, Table } from 'react-bootstrap';
import "../style/SeatAvailable.css";
import "../style/TrainBetweenStation.css";

function TrainBetweenStation({ sourceStation, destinationStation }) {
    const [result, setResult] = useState([]);
    const [result2, setResult2] = useState('');
    const [result3, setResult3] = useState('');
    const [trainSchedule, setTrainSchedule] = useState([]);
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        if (sourceStation === destinationStation) {
            setResult2("Source and destination station can not be same");
        } else {
            fetch(`http://localhost:8090/get/TrainDetailByStation/${sourceStation}/${destinationStation}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.length === 0) {
                        setResult3("Train Between Station is not Available");
                    }
                    else {
                        setResult(data);
                    }
                })
                .catch(console.error);
        }

    }, [sourceStation, destinationStation]);


    const handleTrainNo = async (trainNo) => {
        try {
            console.log('Fetching train schedule for train number:', trainNo);
            const response = await axios.get(`http://localhost:8090/admin/TrainSchedule/${trainNo}`);
            console.log('Train schedule response:', response.data);
            setTrainSchedule(response.data);
            setModalShow(true);

        } catch (error) {
            console.error('Error fetching train schedule:', error);
        }
    };

    const handleCloseModal = () => {
        setModalShow(false);

    };

    return (
        <div id='stationDiv'>
            <div id='stationDiv2'>
                <h1 id="seatContainerH1">{sourceStation} <span><b>&#x2192;</b></span> {destinationStation}</h1>
            </div>
            <Container>
                {result.map((train) => (
                    <div id='traindiv'>
                        <div>
                            <Row>
                                <Col id='traincol1'>
                                    <p>
                                        <span id='trainname'>{train.train_name}</span>
                                        <span id='line'></span>
                                        <span id='trainnumber'>
                                            <Button
                                                id='buttontrainNumber'
                                                onClick={() => handleTrainNo(train.train_number)}
                                                style={{ color: 'blue' }}>
                                                {train.train_number}
                                            </Button>
                                        </span>
                                    </p>
                                </Col>
                                <Col id='traincol2'>
                                    <p id='traindays'>S M T W T F S</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{sourceStation}</p>
                                </Col>
                                <Col>
                                    <div id='divhr'>
                                        <hr />
                                        <div id='divtime'>15236</div>
                                    </div>
                                    {/* <hr/><div> 1522  </div><span>&#8594;</span> */}
                                </Col>
                                <Col>
                                    <p>{destinationStation}</p>
                                </Col>
                            </Row>

                            <p id='coachp'>Coach :</p>
                            <div id='coachdiv'>
                                <div id='coachdiv2A'>2A</div>
                                <div id='coachdiv3A'>3A</div>
                            </div>
                            <p id='typep'><span id='typespan'>Train Type :- </span>{train.train_type}</p>
                        </div>
                    </div>
                ))}
            </Container>
            {result.length === 0 && (

            
            <Container id='stationContainer'>
                <h1 id="seatContainerH1result">{result2}</h1>
                <h1 id="seatContainerH1result">{result3}</h1>
            </Container>
)}
            {/* <Container id='stationContainer'>
                <h1 id="seatContainerH1result">{result2}</h1>
                <h1 id="seatContainerH1result">{result3}</h1>

                {result.length > 0 && (

                    <Container id='stationContainerTable'>
                        <h1 id="seatContainerH1">Train Between Station</h1>

                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Train Number Code</th>
                                        <th>Train Name</th>
                                        <th>Train Type</th>
                                        <th>Source Station</th>
                                        <th>Destination Station</th>
                                    </tr>
                                </thead>
                                <tbody> */}
                                    {/* {result.map((train) => (
                                        <tr key={train.train_number}>
                                            <td>
                                                <Button
                                                    id='buttonPassenger_no'
                                                    onClick={() => handleTrainNo(train.train_number)}
                                                    style={{ color: 'blue' }}>
                                                    <u>{train.train_number}</u>
                                                </Button>
                                            </td>
                                            <td>{train.train_name}</td>
                                            <td>{train.train_type}</td>
                                            <td>{sourceStation}</td>
                                            <td>{destinationStation}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        {/* {modalContent} */}
                    {/* </Container> */}
                {/* )} */}

            {/* </Container>  */}

            <Modal show={modalShow} onHide={handleCloseModal} id="modeldiv">
                <Modal.Header closeButton>
                    <Modal.Title><h1 id="smodelContainerH1">Train Schedule </h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {trainSchedule.length > 0 && (
                            <Container>


                                <Table striped bordered hover>
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
                                            <tr key={schedule[0]}>
                                                <td>{schedule[3]}</td>
                                                <td>{schedule[4]}</td>
                                                <td>{schedule[2]}</td>
                                                <td>{schedule[5]}</td>
                                                <td>{schedule[6]}</td>
                                                <td>10 Minutes</td>
                                                <td>{schedule[7]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Container>
                        )}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>

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

export default TrainBetweenStation;