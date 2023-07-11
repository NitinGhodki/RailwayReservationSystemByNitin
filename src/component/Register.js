import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "../style/Register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserMainScreen from './MainScreenforUser';
import { Link } from 'react-router-dom';

function Register() {

  const [userId, setUserId] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [fullname, setfullname] = useState('');
  const [gender, setgender] = useState('');
  const [DateofBirth, setDateofBirth] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Aadharno, setAadharno] = useState('');
  const [Street, setStreet] = useState('');
  const [city, setcity] = useState('');
  const [PinCode, setPinCode] = useState('');
  const [Country, setCountry] = useState('');
  const [Nationality, setNationality] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [UserIdStatus, setUserIdStatus] = useState('');
  const [emailRegistrationStatus, setEmailRegistrationStatus] = useState('');
  const [MobileStatus, setMobileStatus] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(false);



  const handleUserId = event => {
    const userId = event.target.value;
    setUserId(userId);

    fetch(`http://localhost:8090/Register/User/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUserIdStatus(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handlepassword = event => {
    setPassword(event.target.value);
  };

  const handleConfirmpassword = event => {
    const confirmPassword = event.target.value;
    setPasswordMatch(confirmPassword === Password);
    setConfirmPassword(confirmPassword);
  };

  const handlefullname = event => {
    setfullname(event.target.value);
  };

  const handlegender = event => {
    setgender(event.target.value);
  };

  const handleDateofBirth = event => {
    setDateofBirth(event.target.value);
  };

  const handleEmail = event => {
    const email = event.target.value;
    setEmail(email);

    fetch(`http://localhost:8090/Register/Email/${email}`)
      .then(response => response.json())
      .then(data => {
        setEmailRegistrationStatus(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleMobile = event => {
    const mobile = event.target.value
    setMobile(mobile);

    fetch(`http://localhost:8090/Register/MobileNo/${mobile}`)
      .then(response => response.json())
      .then(data => {
        setMobileStatus(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAadharno = event => {
    setAadharno(event.target.value);
  };

  const handleStreet = event => {
    setStreet(event.target.value);
  };

  const handlecity = event => {
    setcity(event.target.value);
  };

  const handlePinCode = event => {
    setPinCode(event.target.value);
  };

  const handleCountry = event => {
    setCountry(event.target.value);
  };

  const handleNationality = event => {
    setNationality(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (UserIdStatus) {
      toast.warning("This user ID is already registered. Please use a different User ID.");
      return;
    }

    if (!passwordMatch) {
      toast.warning("Password and Confirm Password doesn't match");
      return;
    }

    if (emailRegistrationStatus === true) {
      toast.warning("This email is already registered.");
      return;
    }

    if (MobileStatus === true) {
      toast.warning("This Mobile Number is already registered.");
      return;
    }

    if (!userId.trim()) {
      toast.warning("Please provide User ID.");
      return;
    }

    if (!Password.trim()) {
      toast.warning("Please provide Password.");
      return;
    }

    if (!ConfirmPassword.trim()) {
      toast.warning("Please provide Confirm Password.");
      return;
    }

    if (!fullname.trim()) {
      toast.warning("Please provide your Full Name.");
      return;
    }

    if (!gender.trim()) {
      toast.warning("Please provide Gender.");
      return;
    }

    if (!DateofBirth.trim()) {
      toast.warning("Please provide Date of Birth.");
      return;
    }

    if (!Email.trim()) {
      toast.warning("Please provide Email.");
      return;
    }

    if (!Mobile.trim()) {
      toast.warning("Please provide Mobile.");
      return;
    }

    if (!Aadharno.trim()) {
      toast.warning("Please provide Aadhar No.");
      return;
    }

    if (!Street.trim()) {
      toast.warning("Please provide Street number.");
      return;
    }

    if (!city.trim()) {
      toast.warning("Please provide City Name.");
      return;
    }

    if (!PinCode.trim()) {
      toast.warning("Please provide Pin code.");
      return;
    }

    if (!Country.trim()) {
      toast.warning("Please provide your Country Name.");
      return;
    }

    const url = `http://localhost:8090/Register/AddAllData/${userId}/${Password}/${ConfirmPassword}/${fullname}/${gender}/${DateofBirth}/${Email}/${Mobile}/${Street}/${city}/${PinCode}/${Aadharno}/${Country}/${Nationality}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
        setLoggedInUser(true);
      })
      .catch(error => {
        // Handle the error
        console.log(error);
      });

    // Clear input fields
    // setUserId("");
    setPassword("");
    setConfirmPassword("");
    setfullname("");
    setgender("");
    setDateofBirth("");
    setEmail("");
    setMobile("");
    setStreet("");
    setcity("");
    setPinCode("");
    setAadharno("");
    setCountry("");
    setNationality("");

  };

  if (loggedInUser) {
    return <UserMainScreen userId={userId} />;
  }

  const handleRegister = () => {
    window.location.href = '/Login';
  };

  return (
    <div id='registeredDiv'>

      <Row id='registerRow1'>
        <Col>
          <div id='loginDiv'>
            <img src='img-01.webp' alt='loginimage' id='loginimage2' />
            <Link onClick={handleRegister} id='loginRegister'>Login</Link>
          </div>
        </Col>
        <Col>
          <Container id='registerformContainer'>
            <h1 id='registeredAccount'>Create Account</h1>

            <Form id='from' onSubmit={handleSubmit}>

              <Row className="registerRowInput">
                <Col>
                  <div>
                    <Form.Group controlId="userId" className="">
                      <Form.Label className="registerformLadel"><h5>User ID :</h5></Form.Label>
                      <Form.Control value={userId} onChange={handleUserId} type='text' placeholder='Enter your unique user id' required className="formInnput" />
                    </Form.Group>
                    {UserIdStatus === true && (
                      <p className="error-message">This user ID is already registered .</p>
                    )}
                  </div>
                </Col>
                <Col>
                  <Form.Group controlId="fullName" className="">
                    <Form.Label className="registerformLadel"><h5>Full Name :</h5></Form.Label>
                    <Form.Control type='text' value={fullname} onChange={handlefullname} placeholder='Enter your  full name' required className="formInnput" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="registerRowInput">
                <Col>
                  <Form.Group controlId="password" className="">
                    <Form.Label className="registerformLadel"><h5>Password :</h5></Form.Label>
                    <Form.Control value={Password} onChange={handlepassword} type="Password" placeholder='Enter your password' required className="formInnput" />
                  </Form.Group>
                </Col>
                <Col>
                  <div>
                    <Form.Group controlId="confirmPassword" className="">
                      <Form.Label className="registerformLadel"><h5>Confirm-Password :</h5></Form.Label>
                      <Form.Control type="password" value={ConfirmPassword} onChange={handleConfirmpassword} placeholder='confirm your password (it should match password)' required className="formInnput" />
                    </Form.Group>
                  </div>
                </Col>
                {!passwordMatch && (
                  <p className="error-message">Password does not match Please make sure password should match.</p>
                )}
              </Row>

              <Row className="registerRowInput">
                <div>
                  <Form.Group controlId="email" className="">
                    <Form.Label className="registerformLadel"><h5>Email :</h5></Form.Label>
                    <Form.Control type='email' value={Email} onChange={handleEmail} placeholder='Enter email (ex:- nitinghodki25@gmail.com)' required className="formInnput" />
                  </Form.Group>
                  {emailRegistrationStatus === true && (
                    <p className="error-message">This email is already registered.</p>
                  )}
                </div>
              </Row>

              <Row className="registerRowInput">
                <Col>
                  <Form.Group controlId="Gender" className="">
                    <Form.Label className="registerformLadel"><h5>Gender :</h5></Form.Label>
                    <Form.Control as="select" value={gender} onChange={handlegender} required className="formInnput">
                      <option value=""> Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="DateofBirth" className="">
                    <Form.Label className="registerformLadel"><h5>Date of Birth :</h5></Form.Label>
                    <Form.Control type='date' value={DateofBirth} onChange={handleDateofBirth} required className="formInnput" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="registerRowInput">
                <Col>
                  <div>
                    <Form.Group controlId="MobileNo" className="">
                      <Form.Label className="registerformLadel"><h5>Mobile No. :</h5></Form.Label>
                      <Form.Control type='number' value={Mobile} onChange={handleMobile} placeholder='Enter your mobile number' required className="formInnput" min="1000000000" max="9999999999" />
                    </Form.Group>
                    {MobileStatus === true && (
                      <p className="error-message">This Mobile Number is already registered.</p>
                    )}
                  </div>
                </Col>
                <Col>
                  <Form.Group controlId="aadharno" className="">
                    <Form.Label className="registerformLadel"><h5>Aadhar No :</h5></Form.Label>
                    <Form.Control type='number' value={Aadharno} onChange={handleAadharno} placeholder='Enter your aadhar number' required className="formInnput" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="registerRowInput">
                <Form.Group controlId="streetline" className="">
                  <Form.Label className="registerformLadel"><h5>Street Line :</h5></Form.Label>
                  <Form.Control type='text' value={Street} onChange={handleStreet} placeholder='Enter street line ( ex:- 520 9A saket nager)' required className="formInnput" />
                </Form.Group>
              </Row>

              <Row className="registerRowInput">
                <Col>
                  <Form.Group controlId="city" className="">
                    <Form.Label className="registerformLadel"><h5>city :</h5></Form.Label>
                    <Form.Control type='text' value={city} onChange={handlecity} placeholder='Enter city name' required className="formInnput" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="pincode" className="">
                    <Form.Label className="registerformLadel"><h5>Pin Code :</h5></Form.Label>
                    <Form.Control type='text' value={PinCode} onChange={handlePinCode} placeholder='Enter pin code ' required className="formInnput" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="registerRowInput">
                <Col>
                  <Form.Group controlId="country" className="">
                    <Form.Label className="registerformLadel"><h5>Country :</h5></Form.Label>
                    <Form.Control type='text' value={Country} onChange={handleCountry} placeholder='Enter your country name' required className="formInnput" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="nationality" className="">
                    <Form.Label className="registerformLadel"><h5>Nationality :</h5></Form.Label>
                    <Form.Control type='text' value={Nationality} onChange={handleNationality} placeholder='Enter your nationality ( ex :- Indian)' required className="formInnput" />
                  </Form.Group>
                </Col>
              </Row>


              <Button id='registeronSubmit' variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
            </Form>
          </Container>
        </Col>
      </Row>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Register;