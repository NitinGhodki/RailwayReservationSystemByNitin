import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function AdminViewFare() {
  const [fares, setFares] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/fare')
      .then(res => {
        setFares(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
    <h1>Fares</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fare ID</th>
          <th>Train Type</th>
          <th>Coach Type</th>
          <th>Fare In Rs.</th>
        </tr>
      </thead>
      <tbody>
        {fares.map(fare => (
          <tr key={fare.id}>
            <td>{fare.id}</td>
            <td>{fare.train_type}</td>
            <td>{fare.coach_type}</td>
            <td>{fare.fare} Rs/Km</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
  );
}

export default AdminViewFare;
