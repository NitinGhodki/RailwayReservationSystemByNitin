import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import PNRStatus from './PNRStatus';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SeatAvailable from './SeatAvailable';
import FairDetails from './FairDetails';
import Trainbetweenstation from './trainbetweenstation';
import TrainSchedule from './TrainSchedule';
import Register from './Register';
import Welcome from './welcome';
import CancelBooking from './CancelBooking';
// import ForgotPassword from './ForgotPassword';
import RailwayReservationSystem from './UserMainScreen';
import AdminMainScreen from './AdminMainScreen';

function App() {
  return (
    <div className="App">
    <Router>

      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/welcome">WELCOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/PNRStatus">PNR Status</Nav.Link>
            <Nav.Link href="/SeatAvailable">Seat Availability</Nav.Link>
            <Nav.Link href="/Fair Details">Fair Enquiry</Nav.Link>
            <Nav.Link href="/train bwetween station">Train Between Station</Nav.Link>
            <Nav.Link href="/Train Schedule">Train Schedule</Nav.Link>
            <Nav.Link href="/CancelBooking">Cancel Booking</Nav.Link>

          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/Login"><Button variant="danger">Login</Button>{' '}</Nav.Link>
            <Nav.Link href="/Register"><Button variant="danger">Register</Button>{' '}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
          <Route path="/PNRStatus" element={<PNRStatus/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/SeatAvailable" element={<SeatAvailable/>} />
          <Route path="/Fair Details" element={<FairDetails/>} />
          <Route path="/train bwetween station" element={<Trainbetweenstation/>} />
          <Route path="/Train Schedule" element={<TrainSchedule/>} />
          <Route path="/CancelBooking" element={<CancelBooking/>} />
          <Route path="/register" component={Register} />
        <Route path="/user-main-screen" element={<RailwayReservationSystem />} />
        <Route path="/admin-main-screen" element={<AdminMainScreen />} />



        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
