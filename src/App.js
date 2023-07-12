import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import PNRStatus from './PNRStatus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Welcome from './component/welcome';
import SeatAvailable from './component/SeatAvailable';
import FareDetails from './component/FareDetails';
import TrainBetweenStationInput from './component/TrainBetweenStationInput';
import TrainSchedule from './component/TrainSchedule';
import Forgetpassword from './component/Forgetpassword';


function App() {
  return (
    <div className="App">
      <Router>

        <Navbar id='Appnav'>
          <Container>
            <Navbar.Brand href="/"  id =''><img src='/punlic/train logo3.png' alt='logo'id='apphomeimg'/></Navbar.Brand>
            <Nav className="me-auto inernav">
              {/* <Nav.Link href="/PNRStatus" className="appnavlink" id =''>PNR Status</Nav.Link> */}
              <Nav.Link href="/SeatAvailable" className="appnavlink" id =''>Seat Availability</Nav.Link>
              <Nav.Link href="/Fare Details" className="appnavlink" id =''>Fare Enquiry</Nav.Link>
              {/* <Nav.Link href="/train bwetween station" className="appnavlink" id =''>Train Between Station</Nav.Link>  */}
              {/* <Nav.Link href="/Train Schedule" className="appnavlink" id =''>Train Schedule</Nav.Link> */}
              <Nav.Link href="/Forgetpassword" style={{display: 'none'}}></Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/Login"><Button  className="appnavbutton">Login</Button>{' '}</Nav.Link>
              <Nav.Link href="/Register"><Button  className="appnavbutton">Register</Button>{' '}</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* <Welcome/> */}
        <Routes>
          {/* <Route path="/PNRStatus" element={<PNRStatus />} /> */}
          <Route path="/Login" element={<Login/>} />

          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/SeatAvailable" element={<SeatAvailable />} />
          <Route path="/Fare Details" element={<FareDetails />} />
          <Route path="/train bwetween station" element={<TrainBetweenStationInput />} />
          <Route path="/Train Schedule" element={<TrainSchedule />} />
          <Route path='/Forgetpassword' element={<Forgetpassword/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
