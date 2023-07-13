import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import "../style/Forgetpassword.css";

function Forgetpassword() {

    const [userId, setUserId] = useState('');
    const [loginAs, setLoginAs] = useState('user');
    const [showFormContainer1, setShowFormContainer1] = useState(false);
    const [showFormContainer, setShowFormContainer] = useState(true);
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    // const [modalData, setModalData] = useState({});


    const handleLogin = () => {
        console.log('UserId:', userId);
        console.log('Login As:', loginAs);

        if (!userId.trim()) {
            alert('Please provide User ID.');
            return;
        }
        if (!loginAs.trim()) {
            alert('please provide login type');
            return;
        }

        // Check if loginAs is user or admin
        if (loginAs === 'user') {
            // Check if userId is correct
            fetch(`http://localhost:8090/Register/User/${userId}`)
                .then(response => response.json())
                .then(result => {
                    if (result) {
                        console.log('userid', result);
                        setShowFormContainer1(true);
                        setShowFormContainer(false);
                    } else {
                        alert('Incorrect user ID');
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
                        console.log('userid', result);
                        setShowFormContainer1(true);
                        setShowFormContainer(false);
                    } else {
                        alert('Incorrect user ID');
                    }
                })
                .catch(error => {
                    console.error('Error checking user ID:', error);
                });
        }
    };

    const handleChange = () => {
        if (!Password.trim() || !ConfirmPassword.trim()) {
            alert('Please provide Password and Confirm Password.');
            return;
        }

        if (!passwordMatch) {
            alert('Password does not match.');
            return;
        }

        if (loginAs === 'user') {
            fetch(`http://localhost:8090/Register/updatePasswordAndconfirmPassword/${userId}/${Password}/${ConfirmPassword}`)
                .then(response => response.json)
                .then(data => {
                    console.log('change Password', data);
                    setShowPaymentModal(true);
                    // setModalData(data);
                })
                .catch(error => {
                    // Handle the error
                    console.log(error);
                });
        }

        setConfirmPassword("");
        setLoginAs("");
        setPassword("");
        setUserId("");
    }

    const handleUserId = event => {
        setUserId(event.target.value);
    };

    const handlepassword = event => {
        setPassword(event.target.value);
    };

    const handleConfirmpassword = event => {
        const confirmPassword = event.target.value;
        setPasswordMatch(confirmPassword === Password);
        setConfirmPassword(confirmPassword);
    };

    const handleClosePaymentModal = () => {
        setShowPaymentModal(false);
    };

    const handleRegister = () => {
        window.location.href = '/Login';
    };

    return (
        <div id='ForgetpasswordDiv'>

            <Row id='Forgetpasswordrow'>
                <Col>
                    {showFormContainer && (
                        <Container id='ForgetpasswordformContainer'>

                            <h1 id='ForgetpasswordContainerH1'>Forget Password</h1>

                            <Form id='Forgetpasswordfrom'>

                                <Form.Group controlId="userId" className="ForgetpasswordfromGroup">
                                    <Form.Label className="ForgetpasswordformLadel"><h5>User ID :</h5></Form.Label>
                                    <Form.Control value={userId} onChange={handleUserId} type='text' placeholder='Enter your user id' required className="ForgetpasswordformInnput" />
                                </Form.Group>

                                <Form.Group controlId="loginas" className="ForgetpasswordfromGroup">
                                    <Form.Label className="ForgetpasswordformLadel"><h5>Login As :</h5></Form.Label>
                                    <Form.Control as="select" value={loginAs} onChange={(e) => setLoginAs(e.target.value)} required className="ForgetpasswordformInnput">
                                        <option value=" "> Select login</option>
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </Form.Control>
                                </Form.Group>

                                <Button variant="dark" onClick={handleLogin} id='ForgetpasswordonSubmit'>Submit</Button>
                            </Form>
                        </Container>
                    )}

                    {showFormContainer1 && (
                        <Container id='ForgetpasswordformContainer'>

                            <h1 id='ForgetpasswordContainerH1'>Set Password</h1>

                            <Form id='from'>

                                <Form.Group controlId="password" className="ForgetpasswordfromGroup">
                                    <Form.Label className="ForgetpasswordformLadel"><h5>New Password :</h5></Form.Label>
                                    <Form.Control value={Password} onChange={handlepassword} type="Password" placeholder='Enter your password' required className="ForgetpasswordformInnput" />
                                </Form.Group>

                                <div>
                                    <Form.Group controlId="confirmPassword" className="ForgetpasswordfromGroup">
                                        <Form.Label className="ForgetpasswordformLadel"><h5>Confirm-Password :</h5></Form.Label>
                                        <Form.Control type="password" value={ConfirmPassword} onChange={handleConfirmpassword} placeholder='confirm your password (it should match password)' required className="ForgetpasswordformInnput" />
                                    </Form.Group>
                                    {!passwordMatch && (
                                        <p className="error-message">Password does not match.</p>
                                    )}
                                </div>

                                <Button variant="dark" onClick={handleChange} id='ForgetpasswordonSubmit'>Change it</Button>
                            </Form>

                        </Container>
                    )}
                </Col>
                <Col>
                    <div id='ForgetpasswordDiv2'>
                        <img src='	http://localhost:3000/RailwayReservationSystemByNitin/static/media/img-01.4ed7df3a303c99050d13.webp' alt='loginimage' id='Forgetpasswordimage' />
                        <Link onClick={handleRegister} id='ForgetpasswordRegister2'>Login</Link>
                    </div>
                </Col>
            </Row>

            <Modal show={showPaymentModal} id='ForgetpasswordModel'>
                <Modal.Header >
                    <Modal.Title id='adminmodelH1' style={{ width: '75%' }}><h1>Password Status</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <h3 style={{ color: 'green', textAlign: "center" }}>Your password has been successfully Changed</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePaymentModal} id='close'>
                        Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Forgetpassword