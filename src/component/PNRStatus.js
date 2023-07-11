import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Row, Col, NavLink } from 'react-bootstrap';
import "../style/PNRStatus.css"
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PNRStatus({ id }) {

  const [pnr, setpnr] = useState([]);
  const [result2, setResult2] = useState('');
  console.log(id);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const response1 = await axios.get(`http://localhost:8090/checkingpnrNo/${id}`)
        console.log(response1.data)
        if (response1.data) {
          try {
            const response = await axios.get(`http://localhost:8090/cancellation/${id}`);
            console.log(response.data)
            setpnr(response.data);
          } catch (error) {
            console.error(error);
          }
        } else {
          toast.warning('Wrong PNR Number ');
          setResult2('Wrong PNR Number ');
        }
      } catch (error) {
        console.error(error);
      }
    };
    handleSubmit();
  }, [id]);



  return (
    <div id='pnrstatusDiv'>

      <h1 id="pnrstatusContainerH1">Your PNR Status</h1>

      {pnr.length === 0 && (<h1 id="pnrContainerH1result">{result2}</h1>)}
      {pnr.length > 0 && (
        <div id='pnrstatusContainer3'>
          {pnr.map(status => (
            <div>
              <div id='pnriddiv1'>
                <div id='pnriddiv2'>
                  <h5 id='idp1'>For <span id='idspan'>{status.id}</span> status :- </h5>
                  <h3 id='idp2'> Ticket {status.booking_status}</h3>
                </div>
              </div>
              <div id='pnrcontentdiv'>
                <Row>
                  <Col>
                    <div className='pnrcolDiv'>
                      <h6 className='pnrcolDivh6'>Source Station :- </h6>
                      <p>{status.source_station}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className='pnrcolDiv'>
                      <h6 className='pnrcolDivh6'>Train Number :- </h6>
                      <p>{status.train_number}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className='pnrcolDiv'>
                      <h6 className='pnrcolDivh6'>Date :- </h6>
                      <p>{status.travel_date}</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className='pnrcolDiv'>
                      <h6 className='pnrcolDivh6Destination '>Destination Station :- </h6>
                      <p>{status.destination_station}</p>
                    </div>
                  </Col>
                  {/* <Col></Col> */}
                  <Col>
                    <div className='pnrcolDiv'>
                      <h6 className='pnrcolDivh6'>Passenger count :- </h6>
                      <p>{status.passenger_no}</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className='pnrcolDiv'>
                      <h6 className='pnrcolDivh6'>Coach :- </h6>
                      <p>{status.class1}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className='pnrcolDiv'>
                      <h6 className='pnrcolDivh6'>Fare :-</h6>
                      <p>{status.fare}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}

        </div>
      )}
{/*       
      {pnr.length > 0 && (

        <Container id='pnrstatusContainer'>
          <div style={{ marginTop: '30px' }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>PNR Number</th>
                  <th>Source Station</th>
                  <th>Destination Station</th>
                  <th>Train Number</th>
                  <th>Travel Date</th>
                  <th>Class</th>
                  <th>Number of Passenger</th>
                  <th>Fare   </th>
                  <th>Booking Status</th>
                </tr>
              </thead>
              <tbody>
                {pnr.map(status => (
                  <tr key={status.id}>
                    <td>{status.id}</td>
                    <td>{status.source_station}</td>
                    <td>{status.destination_station}</td>
                    <td>{status.train_number}</td>
                    <td>{status.travel_date}</td>
                    <td>{status.class1}</td>
                    <td>{status.passenger_no}</td>
                    <td>{status.fare}</td>
                    <td>{status.booking_status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

        </Container>
      )} */}
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

      <ToastContainer position="top-center" />
    </div>
  )
}

export default PNRStatus
