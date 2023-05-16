import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import { Image , NavLink} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
const date= new Date();

function Welcome() {
  return (
    <div>
            <Container>
      <Row>
  <Col xs={12} md={4}>
    <img src='https://source.unsplash.com/150x110/?train' alt='train'  />
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
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1200x350/?train"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1>Indian Railway</h1>
              <p ><strong>"The railway is NavLink form of magic that works even when the magician is asleep"</strong></p>
                    </Carousel.Caption>
      </Carousel.Item>

      </Carousel>
      </Container>
<Container className="my-5">
  <Row className="mb-2">
    <Col md={6}>
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <Col className="p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">Train</strong>
          <h3 className="mb-0">Maharajas' Express</h3>
          <div className="mb-1 text-muted">{date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
          <p className="card-text mb-auto">Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on NavLink sojourn to the era of bygone stately splendour of princely states.</p>
          <a href="/" className="stretched-link">Continue reading</a>
        </Col>
        <Col className="auto d-none d-lg-block">
          <Image className="bd-placeholder-img" src="https://source.unsplash.com/200x250/?train" />
        </Col>
      </div>
    </Col>
    <Col md={6}>
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <Col className="p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Tourist</strong>
          <h3 className="mb-0">Bharat Gaurav Tourist Train</h3>
          <div className="mb-1 text-muted">{date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
          <p className="mb-auto">IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for the passengers</p>
          <a href="/" className="stretched-link">Continue reading</a>
        </Col>
        <Col className="auto d-none d-lg-block">
          <Image className="bd-placeholder-img" src="https://source.unsplash.com/200x250/?temple" />
        </Col>
      </div>
    </Col>
  </Row>
</Container>
<footer className="py-5">
      <Container>
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

export default Welcome
