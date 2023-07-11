import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function AdminTrainSchedule() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/admin/getAllTrains/schedule')
      .then(response => response.json())
      .then(data => setRoutes(data));
  }, []);

  return (
    <div >
      {/* <h1 style={{ marginBottom: '25px' }}>Train schedules</h1> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Train Number</th>
            <th>Station Name</th>
            <th>Arrival Time</th>
            <th>Departure Time</th>
            <th>Halt time</th>
            <th>Route Number</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((schedule) => (
            <tr>
              <td>{schedule.id}</td>
              <td>{schedule.trainNumber}</td>
              <td>{schedule.stationName}</td>
              <td>{schedule.arrivalTime}</td>
              <td>{schedule.departureTime}</td>
              <td>10 Minutes</td>
              <td>{schedule.routeNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminTrainSchedule;

