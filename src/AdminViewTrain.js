import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function AdminViewTrain() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/getAllTrains')
      .then(response => response.json())
      .then(data => setTrains(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Trains</h1>
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
    </div>
  )
}

export default AdminViewTrain;
