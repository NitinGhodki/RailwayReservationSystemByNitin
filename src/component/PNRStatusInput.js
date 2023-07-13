import React, { useState } from 'react'
import { Button,  Col, Container, Form, NavLink, Row} from 'react-bootstrap';
import "../style/PNRStatusInput.css"
import PNRStatus from './PNRStatus';

function PNRStatusInput() {

    const [id, setid] = useState(' ');
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSelectedComponent('PNRStatus');
    };

    if (selectedComponent === 'PNRStatus') {
        return <PNRStatus id = {id}/>
      }


    return (
        <div id='welcomeDiv'>

            <div id='welcomeDivimg'>
                <img src='	http://localhost:3000/RailwayReservationSystemByNitin/static/media/train1.14e33dc855b358a5c6ab.jpeg' id='fareContainerimg' alt='background' />
            </div>

            <Container id='pnrinputCotainer'>

                <h1 variant="dark" id='pnrContainerinput2H1'>PNR Status</h1>

                <div id='pnrinputformdiv' >
                    <Form id='pnrinputcancelForm' onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label id='cancelLabelPNRinput'>Enter PNR No. : </Form.Label>
                            <Form.Control type="number" value={id} placeholder='Enter PNR Nunber' onChange={(event) => setid(event.target.value)} required id='pnrinputforminput' />
                            <Button variant="dark" type="submit" onChange={handleSubmit} id='inputcancelsearch'>search</Button>
                        </Form.Group>
                    </Form>

                </div>
            </Container>
            <footer className="py-5">
                <Container className='welcomefooterContainer'>
                    <Row>
                        <Col xs={12} md={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false">
                                <title>Product</title>
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
                            </svg>
                            <small className="d-block mb-3 text-muted">© 2023-2024</small>
                        </Col>
                        <Col xs={6} md={3}>
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

export default PNRStatusInput