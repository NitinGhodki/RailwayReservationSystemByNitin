import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function AdminViewRoute() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/route')
      .then(response => response.json())
      .then(data => setRoutes(data));
  }, []);

  return (
    <div>
      <h1>Routes</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Station Name</th>
            <th>Station Code</th>
            <th>Route Order</th>
            <th>Distance</th>
            <th>Route Name</th>
            <th>Route Number</th>
          </tr>
        </thead>
        <tbody>
          {routes.map(route => (
            <tr key={route.id}>
              <td>{route.id}</td>
              <td>{route.station_name}</td>
              <td>{route.station_code}</td>
              <td>{route.route_order}</td>
              <td>{route.distance}</td>
              <td>{route.rout_name}</td>
              <td>{route.route_number}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminViewRoute;
