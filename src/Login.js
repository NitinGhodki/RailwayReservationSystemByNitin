import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AdminMainScreen from './AdminMainScreen';
import UserMainScreen from './UserMainScreen';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginAs, setLoginAs] = useState('user');
  const [loggedInAdmin, setLoggedInAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Login As:', loginAs);

    if (loginAs === 'admin') {
      setLoggedInAdmin(true);
    }
    if (loginAs === 'user') {
      setLoggedInUser(true);
    }
 
  };
  if (loggedInAdmin) {
    return <AdminMainScreen></AdminMainScreen>;
  }
  if (loggedInUser) {
    return <UserMainScreen></UserMainScreen>;
  }

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
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="loginAs">
            <Form.Label>Login As:</Form.Label>
            <Form.Control
              as="select"
              value={loginAs}
              onChange={(e) => setLoginAs(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Control>
          </Form.Group>
          <p></p>
          <p></p>
          <p></p>

          <Button variant="dark" onClick={handleLogin}>
            LOGIN
          </Button>
        </Form>
      </Container>
    </div>
  );
}


export default Login;
