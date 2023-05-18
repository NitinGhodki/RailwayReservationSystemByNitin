import React, { useState } from 'react';
import { Form, Button, Container ,Row,Col} from 'react-bootstrap';

function Register() {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    mobileNo: '',
    aadharCardNo: '',
    streetLine: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    nationality: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div>
                  <Container>
      <Row>
  <Col xs={12} md={4}>
    <img src='TitleRail.png' alt='train'  />
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
      <h1>Register Here</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="userId">
          <Form.Label>User ID:</Form.Label>
          <Form.Control
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="fullName">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="gender">
  <Form.Label>Gender:</Form.Label>
  <Form.Control
    as="select"
    name="gender"
    value={formData.gender}
    onChange={handleChange}
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </Form.Control>
</Form.Group>

        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="mobileNo">
          <Form.Label>Mobile No.:</Form.Label>
          <Form.Control
            type="number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="aadharCardNo">
          <Form.Label>Aadhar Card No.:</Form.Label>
          <Form.Control
            type="number"
            name="aadharCardNo"
            value={formData.aadharCardNo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="streetLine">
          <Form.Label>Street Line:</Form.Label>
          <Form.Control
            type="text"
            name="streetLine"
            value={formData.streetLine}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State:</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="pinCode">
          <Form.Label>Pin Code:</Form.Label>
          <Form.Control
            type="number"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="nationality">
          <Form.Label>Nationality:</Form.Label>
          <Form.Control
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </Form.Group>
       <p></p>
        <Button variant="dark" type="submit">
          Register
        </Button>
      </Form>
      </Container>
    </div>
  );
}

export default Register;
