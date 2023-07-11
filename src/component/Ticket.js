import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import "../style/Ticket.css";
import axios from 'axios';
// eslint-disable-next-line
import html2pdf from 'html2pdf.js';

function Ticket({ PNRNo, userId, trainNo, fareResponse, passengerCount, sourceStation, destinationStation, date, paymentType, coach }) {
    const [name, setName] = useState('');
    const [depature, setDepature] = useState('');
    const [arrival, setArrival] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8090/Register/userName/${userId}`)
            .then(res => {
                setName(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    });

    useEffect(() => {
        axios.get(`http://localhost:8090/ticket/getdeperture/${trainNo}/${sourceStation}`)
            .then(res => {
                setDepature(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    });

    useEffect(() => {
        axios.get(`http://localhost:8090/ticket/getArrival/${trainNo}/${sourceStation}/${destinationStation}`)
            .then(res => {
                setArrival(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    });

    const handleDownload = () => {
    const element = document.getElementById('bookingTicket');
    const stylesheets = document.styleSheets;
    
    // Extract the CSS rules from the external stylesheets and generate inline styles
    let inlineStyles = '';
    for (let i = 0; i < stylesheets.length; i++) {
      const rules = stylesheets[i].cssRules;
      for (let j = 0; j < rules.length; j++) {
        inlineStyles += rules[j].cssText;
      }
    }

    const opt = {
      margin: 0.5,
      filename: 'ticket.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      useCORS: true,
      onclone: (document) => {
        const newStyle = document.createElement('style');
        newStyle.innerHTML = inlineStyles;
        document.head.appendChild(newStyle);
      },
    };

    html2pdf().from(element).set(opt).save();
  };
       


    return (
        <div id='ticketDiv'>
            <div id='ticketheadingDiv'>
                <h1 id='ticketheadingDivh1'>Ticket</h1>
            </div>
            <div id='bookingTicket'>
                <div id='bookingTicketheader'>
                    <Row>
                        <Col id='bookingTicketPNRCol'>
                            <p id='bookingTicketPNR'>PNR No. : <span id='bookingTicketPNRno'>{PNRNo - 1}</span></p>
                            <button onClick={handleDownload} id='Download'><u>Download</u></button>
                        </Col>
                    </Row>
                </div>
                <div id='bookingTicketbody'>
                    {/* <div>
                        <img src='train logo2.png' alt='train' id='ticketbodyimg'/>
                    </div> */}
                    <Row className='ticketbodyRow'>
                        <Col>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>Name of Passenger</p>
                                <h5>{name}</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>Train Number </p>
                                <h5>{trainNo}</h5>

                            </div>
                        </Col>
                        <Col>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>Pay Amount </p>
                                <h5>{fareResponse * passengerCount} <span id='bookinngRupee'>&#x20B9;</span></h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className='ticketbodyRow'>
                        <Col xs={12} md={4}>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>From  </p>
                                <h5>{sourceStation}</h5>
                            </div>
                        </Col>
                       <Col></Col>
                        <Col xs={12} md={4}>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>Payment Type </p>
                                <h5>{paymentType}</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className='ticketbodyRow'>
                        <Col>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>To </p>
                                <h5>{destinationStation}</h5>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>Passenger Count </p>
                                <h5>{passengerCount}</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className='ticketbodyRow'>
                        <Col xs={6} md={4}>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>Date </p>
                                <h5>{date}</h5>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>Depature </p>
                                <h5> {depature}</h5>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='ticketbodyDiv'>
                                <p className='ticketP'>Arrive :</p>
                                <h5>{arrival}</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id='bookingTicketfooter'>
                    <p id='bookingTicketfooterP'>Class : {coach}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Ticket