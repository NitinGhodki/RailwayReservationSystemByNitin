import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

function Booking() {
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
}

export default Booking;
