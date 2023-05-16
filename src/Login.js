import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';


function Login() {
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

    <div>
      <Container>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1200x500/?train"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 variant="dark" style={{ color: "black" }}>Login</h1>
        <h4 style={{textAlign:'left' }}>Enter User Name :</h4>
        <div>
        <input type='text' style={{ margin:'2%' ,width:'100%', fontSize:'120%' }} placeholder='Enter User Name' ></input>
        </div>
        <h4 style={{textAlign:'left' }}>Enter Password:</h4>
        <div>
        <input type='password' style={{ margin:'2%' ,width:'100%', fontSize:'120%' }} placeholder='Enter Your Password' ></input>
        </div>
        <h4 style={{textAlign:'left' }}>Login As:</h4>
        <div>
<select id="user-type" name="user-type" style={{ margin:'2%' ,width:'50%', fontSize:'120%' }}>
  <option value="user" style={{ margin:'2%' ,width:'50%', fontSize:'120%' }}>User</option>
  <option value="admin" style={{ margin:'2%' ,width:'50%', fontSize:'120%' }}>Admin</option>
</select>

        </div>


        <div>
      <Button variant="dark" size="lg">
        LOGIN
      </Button>
      </div>

                    </Carousel.Caption>
      </Carousel.Item>

      </Carousel>
      </Container>

<Container>
<InputGroup className="mb-3">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
</Container>
    </div>
    </div>
  )
}

export default Login
