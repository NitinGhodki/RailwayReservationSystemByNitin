import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button ,Row,Col} from 'react-bootstrap';

function Booking() {
<<<<<<< HEAD
  const [sourceStation, setSourceStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [trainNo, setTrainNo] = useState('');
  const [coach, setCoach] = useState('');
  const [date, setDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [response, setResponse] = useState(null);
  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);
=======
// <<<<<<< HEAD
//   const [sourceStation, setSourceStation] = useState('');
//   const [destinationStation, setDestinationStation] = useState('');
//   const [trainNo, setTrainNo] = useState('');
//   const [coach, setCoach] = useState('');
//   const [date, setDate] = useState('');
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [response, setResponse] = useState(null);
//   const [response1, setResponse1] = useState(null);
//   const [response2, setResponse2] = useState(null);
>>>>>>> 1de90c872aef9115d94552c1f1dde9c72d0fb7a2


//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       const response = await axios.get(`http://localhost:8090/CheckSeatAvailability/${trainNo}/${encodeURIComponent(sourceStation)}/${encodeURIComponent(destinationStation)}/${coach}`);
      
//       if (typeof response.data === 'number') {
//         const response1 = await axios.get(`http://localhost:8090/Add/Bookings/${encodeURIComponent(sourceStation)}/${encodeURIComponent(destinationStation)}/${trainNo}/${date}/${encodeURIComponent(coach)}/${passengerCount}`);  
//         setResponse1(response1.data);

//       }
      
//       setResponse(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//     const handleSubmit2 = async (event) => {
//     event.preventDefault();

//     try {
//       const response2 = await axios.get(`http://localhost:8090/Add/Bookings/${encodeURIComponent(destinationStation)}/${trainNo}/${date}/${encodeURIComponent(coach)}/${passengerCount}`);
//       setResponse2(response2.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

<<<<<<< HEAD
  return (
    <div>
            <Container>
        <Row>
          <Col xs={12} md={4}>
            <img src='TitleRail.png' alt='train' />
          </Col>
          <Col xs={12} md={6}>
            <h5>Indian Railway</h5>
            <p>
              Indian Railways is the largest rail network in Asia and the world's second-largest under a single management system. It operates more than 20,000 passenger and freight trains daily, connecting over 7,000 stations across the country.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1>Train Ticket Booking</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="sourceStation">
            <Form.Label>Source Station:</Form.Label>
            <Form.Control type="text" value={sourceStation} onChange={(event) => setSourceStation(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="destinationStation">
            <Form.Label>Destination Station:</Form.Label>
            <Form.Control type="text" value={destinationStation} onChange={(event) => setDestinationStation(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="trainNo">
            <Form.Label>Train No.:</Form.Label>
            <Form.Control type="text" value={trainNo} onChange={(event) => setTrainNo(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="coach">
            <Form.Label>Coach:</Form.Label>
            <Form.Control type="text" value={coach} onChange={(event) => setCoach(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="passengerCount">
            <Form.Label>Passenger Count:</Form.Label>
            <Form.Control type="number" min="1" max="3" value={passengerCount} onChange={(event) => setPassengerCount(parseInt(event.target.value))} />
          </Form.Group>
          <Button style={{ margin: "2%" }} variant="dark" type="submit">Add Passenger Details</Button>
        </Form>
        {typeof response === 'string' && (
          <div>
            <h1><strong>{response}</strong></h1>
          </div>
        )}
{typeof response === 'number' && (
  <div>
    {[...Array(passengerCount)].map((_, i) => (
      <div key={i}>
        <form onSubmit={handleSubmit2}>
          <input placeholder="First Name" type="text" id={`firstName-${i}`} name={`firstName-${i}`} required />
          <input placeholder="Last Name" type="text" id={`lastName-${i}`} name={`lastName-${i}`} required />
          <select id={`gender-${i}`} name={`gender-${i}`} required>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input placeholder="Age" type="number" id={`age-${i}`} name={`age-${i}`} min="0" max="120" required />
          <input placeholder="Email" type="email" id={`email-${i}`} name={`email-${i}`} required />
=======
//   return (
//     <div>
//       <Container>
//         <h1>Train Ticket Booking</h1>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="sourceStation">
//             <Form.Label>Source Station:</Form.Label>
//             <Form.Control type="text" value={sourceStation} onChange={(event) => setSourceStation(event.target.value)} />
//           </Form.Group>
//           <Form.Group controlId="destinationStation">
//             <Form.Label>Destination Station:</Form.Label>
//             <Form.Control type="text" value={destinationStation} onChange={(event) => setDestinationStation(event.target.value)} />
//           </Form.Group>
//           <Form.Group controlId="trainNo">
//             <Form.Label>Train No.:</Form.Label>
//             <Form.Control type="text" value={trainNo} onChange={(event) => setTrainNo(event.target.value)} />
//           </Form.Group>
//           <Form.Group controlId="coach">
//             <Form.Label>Coach:</Form.Label>
//             <Form.Control type="text" value={coach} onChange={(event) => setCoach(event.target.value)} />
//           </Form.Group>
//           <Form.Group controlId="date">
//             <Form.Label>Date:</Form.Label>
//             <Form.Control type="date" value={date} onChange={(event) => setDate(event.target.value)} />
//           </Form.Group>
//           <Form.Group controlId="passengerCount">
//             <Form.Label>Passenger Count:</Form.Label>
//             <Form.Control type="number" min="1" max="3" value={passengerCount} onChange={(event) => setPassengerCount(parseInt(event.target.value))} />
//           </Form.Group>
//           <Button style={{ margin: "2%" }} variant="dark" type="submit">Add Passenger Details</Button>
//         </Form>
//         {typeof response === 'string' && (
//           <div>
//             <h1><strong>{response}</strong></h1>
//           </div>
//         )}
// {typeof response === 'number' && (
//   <div>
//     {[...Array(passengerCount)].map((_, i) => (
//       <div key={i}>
//         <form onSubmit={handleSubmit2}>
//           <input placeholder="First Name" type="text" id={`firstName-${i}`} name={`firstName-${i}`} required />
//           <input placeholder="Last Name" type="text" id={`lastName-${i}`} name={`lastName-${i}`} required />
//           <select id={`gender-${i}`} name={`gender-${i}`} required>
//             <option value="">Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input placeholder="Age" type="number" id={`age-${i}`} name={`age-${i}`} min="0" max="120" required />
//           <input placeholder="Email" type="email" id={`email-${i}`} name={`email-${i}`} required />
>>>>>>> 1de90c872aef9115d94552c1f1dde9c72d0fb7a2

//           <input placeholder="Mobile Number" type="tel" id={`mobile-${i}`} name={`mobile-${i}`} pattern="[0-9]{10}" required />

//           <button type="submit">Submit</button>
//         </form>
        
//         <h1>{response2}</h1>
//       </div>
//     ))}
//   </div>
// )}
//         {response1 && (
//           <div>
//             <h1>{response1}</h1>
//           </div>
//         )}

<<<<<<< HEAD
      </Container>
    </div>
  );}
=======
//       </Container>
//     </div>
//   );
// =======
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [sourceStation, setSourceStation] = useState('');
    const [destinationStation, setDestinationStation] = useState('');
    const [trainNo, setTrainNo] = useState('');
    const [coach, setCoach] = useState('');
    const [date, setDate] = useState('');
    const [passengerCount, setPassengerCount] = useState(1);
    const [response, setResponse] = useState(null);
    const [currentPassengerIndex, setCurrentPassengerIndex] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(
                `http://localhost:8090/CheckSeatAvailability/${trainNo}/${encodeURIComponent(
                    sourceStation
                )}/${encodeURIComponent(destinationStation)}/${coach}?date=${date}&passengerCount=${passengerCount}`
            );
            console.log(response.data);
            setResponse(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePassengerSubmit = async (event) => {
        event.preventDefault();
        setCurrentPassengerIndex(currentPassengerIndex + 1);
        setFirstName('');
        setLastName('');
        setAge('');
        setGender('');
        setEmail('');
        setPhone('');
    }

    return (
        <div>
            <Container>
                <h1>Train Ticket Booking</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="sourceStation">
                        <Form.Label>Source Station:</Form.Label>
                        <Form.Control type="text" value={sourceStation} onChange={(event) => setSourceStation(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="destinationStation">
                        <Form.Label>Destination Station:</Form.Label>
                        <Form.Control type="text" value={destinationStation} onChange={(event) => setDestinationStation(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="trainNo">
                        <Form.Label>Train No.:</Form.Label>
                        <Form.Control type="text" value={trainNo} onChange={(event) => setTrainNo(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="coach">
                        <Form.Label>Coach:</Form.Label>
                        <Form.Control type="text" value={coach} onChange={(event) => setCoach(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="passengerCount">
                        <Form.Label>Passenger Count:</Form.Label>
                        <Form.Control type="number" value={passengerCount} onChange={(event) => setPassengerCount(event.target.value)} min={1} max={3} />
                    </Form.Group>
                    <Button style={{ margin: '2%' }} variant="primary" type="submit">
                        NEXT
                    </Button>
                </Form>

                {response && (
                    <Form onSubmit={handlePassengerSubmit}>
                        <h2>Passenger {currentPassengerIndex + 1}</h2>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="age">
                            <Form.Label>Age:</Form.Label>
                            <Form.Control type="number" value={age} onChange={(event) => setAge(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="gender">
                            <Form.Label>Gender:</Form.Label>
                            <Form.Control as="select" value={gender} onChange={(event) => setGender(event.target.value)}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </Form.Group>
                        <Button style={{ margin: '2%' }} variant="primary" type="submit">

                            {currentPassengerIndex === passengerCount - 1 ? 'BOOK TICKET' : 'NEXT'}

                        </Button>
                    </Form>
                )}
            </Container>
        </div>
    );
// >>>>>>> 3706a68c5a1868512bfb1c28d5f8b256e164a429
}

>>>>>>> 1de90c872aef9115d94552c1f1dde9c72d0fb7a2
export default Booking;
