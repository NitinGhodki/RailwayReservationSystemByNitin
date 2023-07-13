import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminMainScreen from './AdminMainScreen';
import UserMainScreen from './MainScreenforUser';
import "../style/Login.css";

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loginAs, setLoginAs] = useState('user');
  const [loggedInAdmin, setLoggedInAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(false);

  const handleLogin = () => {
    if (!userId.trim() || !password.trim()) {
      toast.warning('Please provide both User ID and Password.');
      return;
    }
    if (!loginAs.trim()) {
      toast.warning('Please select login type.');
      return;
    }

    // Check if loginAs is user or admin
    if (loginAs === 'user') {
      // Check if userId is correct
      fetch(`http://localhost:8090/Register/User/${userId}`)
        .then(response => response.json())
        .then(result => {
          if (result) {
            // Check if password is correct
            fetch(`http://localhost:8090/Register/checkPassword/${userId}/${password}`)
              .then(response => response.json())
              .then(result => {
                if (result) {
                  setLoggedInUser(true);
                } else {
                  toast.warning('Incorrect password');
                }
              })
              .catch(error => {
                console.error('Error checking password:', error);
              });
          } else {
            toast.warning('Incorrect user ID');
          }
        })
        .catch(error => {
          console.error('Error checking user ID:', error);
        });
    }

    // Check if loginAs is admin
    if (loginAs === 'admin') {
      // Check if userId is correct
      fetch(`http://localhost:8090/Register/Admin/${userId}`)
        .then(response => response.json())
        .then(result => {
          if (result) {
            // Check if password is correct
            fetch(`http://localhost:8090/Register/checkAdminPassword/${userId}/${password}`)
              .then(response => response.json())
              .then(result => {
                if (result) {
                  setLoggedInAdmin(true);
                } else {
                  toast.warning('Incorrect password');
                }
              })
              .catch(error => {
                console.error('Error checking password:', error);
              });
          } else {
            toast.warning('Incorrect user ID');
          }
        })
        .catch(error => {
          console.error('Error checking user ID:', error);
        });
    }
  };

  if (loggedInAdmin) {
    return <AdminMainScreen userId={userId} />;
  }
  if (loggedInUser) {
    return <UserMainScreen userId={userId} />;
  }

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleUserId = event => {
    setUserId(event.target.value);
  };

  const handleForgetPassword = () => {
    window.location.href = '/Forgetpassword';
  };

  const handleRegister = () => {
    window.location.href = '/Register';
  };

  return (
    <div id='loginDiv1'>
      <Row id='loginRow'>
        <Col>
          <div id='loginDiv2'>
            {/* <img src='img-01.webp' alt='loginimage' id='loginimage' /> */}
            <div id='loginimage'></div>
            <div><Link onClick={handleRegister} id='loginRegister2'>Register</Link></div>
          </div>
        </Col>
        <Col>
          <Container id='loginformContainer'>
            <h1 id='ContainerH1'>Login</h1>
            <Form id='loginfrom'>
              <Form.Group controlId="userId" className="fromGroup">
                <Form.Label className="loginformLadel"><h5>User ID :</h5></Form.Label>
                <Form.Control value={userId} onChange={handleUserId} type='text' placeholder='Enter your user id' required className="formInnput" />
              </Form.Group>
              <Form.Group controlId="password" className="fromGroup">
                <Form.Label className="loginformLadel"><h5>Password :</h5></Form.Label>
                <Form.Control value={password} onChange={handlePassword} type="Password" placeholder='Enter your password' required className="formInnput" />
              </Form.Group>
              <Form.Group controlId="loginas" className="fromGroup">
                <Form.Label className="loginformLadel"><h5>Login As :</h5></Form.Label>
                <Form.Control as="select" value={loginAs} onChange={(e) => setLoginAs(e.target.value)} required className="formInnput">
                  <option value=" "> Select login</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Control>
              </Form.Group>
              <div style={{ width: '30%', margin: "auto", float: "right" }}>
                <Link onClick={handleForgetPassword} id='Forgetpassword'>Forget password?</Link>
              </div>
              <Button variant="dark" onClick={handleLogin} id='loginonSubmit'>LOGIN</Button>
            </Form>
          </Container>
        </Col>
      </Row>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Login;