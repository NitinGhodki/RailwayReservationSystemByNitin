import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Modal, Form } from 'react-bootstrap';

function AdminViewTrain() {
  const [trains, setTrains] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formData, setFormData] = useState({
    trainNumber: '',
    trainName: '',
    a2Seats: '',
    a3Seats: '',
    trainType: '',
    averageSpeed: ''
  });
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    fetch('http://localhost:8090/getAllTrains')
      .then(response => response.json())
      .then(data => setTrains(data))
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDeleteTrain = () => {
    const selectedTrainNumber = formData.trainNumber;
    const apiUrl = `http://localhost:8090/deleteTrain/${selectedTrainNumber}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setApiResponse(data.message);
        alert(apiUrl);
      })
      .catch(error => console.log(error));
  
    setShowDeleteModal(false);
    setFormData({
      trainNumber: 0,
      trainName: '',
      a2Seats: 0,
      a3Seats: 0,
      trainType: '',
      averageSpeed: 0
    });
  };
  
  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { trainNumber, trainName, a2Seats, a3Seats, trainType, averageSpeed } = formData;
    const apiUrl = `http://localhost:8090/add/admin/Train/${trainNumber}/${trainName}/${a2Seats}/${a3Seats}/${trainType}/${averageSpeed}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setApiResponse(data.message);
        alert(apiResponse);
      })
      .catch(error => console.log(error));

    setShowModal(false);
    setFormData({
      trainNumber: '',
      trainName: '',
      a2Seats: '',
      a3Seats: '',
      trainType: '',
      averageSpeed: ''
    });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Train Name</th>
            <th>2A Coach</th>
            <th>3A Coach</th>
            <th>Train Type</th>
            <th>Average Speed</th>
            <th>Total 2A Seats</th>
            <th>Total 3A Seats</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(train => (
            <tr key={train.train_number}>
              <td>{train.train_number}</td>
              <td>{train.train_name}</td>
              <td>{train.a2_coach}</td>
              <td>{train.a3_coach}</td>
              <td>{train.train_type}</td>
              <td>{train.average_speed}</td>
              <td>{train.total_2A_Seats}</td>
              <td>{train.total_3A_Seats}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ display: "flex" }}>
        <Button variant="secondary" type="submit" id='bookingsubmit' onClick={handleShowDeleteModal}>
          Delete
        </Button>
        <Button variant="secondary" type="submit" id='bookingsubmit' onClick={handleShowModal}>
          Add
        </Button>
      </div>


      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Train</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Train Number</Form.Label>
              <Form.Control
                type="number"
                name="trainNumber"
                value={formData.trainNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Train Name</Form.Label>
              <Form.Control
                type="text"
                name="trainName"
                value={formData.trainName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>2A coach</Form.Label>
              <Form.Control
                type="number"
                name="a2Seats"
                value={formData.a2Seats}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>3A coach</Form.Label>
              <Form.Control
                type="number"
                name="a3Seats"
                value={formData.a3Seats}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Train Type</Form.Label>
              <Form.Control
                type="text"
                name="trainType"
                value={formData.trainType}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Average Speed</Form.Label>
              <Form.Control
                type="number"
                name="averageSpeed"
                value={formData.averageSpeed}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Train</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Train Number</Form.Label>
              <Form.Control as="select" name="trainNumber" onChange={handleInputChange} required>
                <option value="">Select Train Number</option>
                {trains.map(train => (
                  <option key={train.train_number} value={train.train_number}>
                    {train.train_number}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleDeleteTrain}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default AdminViewTrain;