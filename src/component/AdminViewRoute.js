import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function AdminViewRoute() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/route')
      .then(response => setRoutes(response.data))
  }, []);

  return (
    <div >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Route Number</th>
            <th>Route Order</th>
            <th>Station Name</th>
            <th>Station Code</th>
            <th>Route Name</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {routes.map(route => (
            <tr key={route.id}>
              <td>{route.route_number}</td>
              <td>{route.route_order}</td>
              <td>{route.station_name}</td>
              <td>{route.station_code}</td>
<<<<<<< HEAD:src/component/AdminViewRoute.js
              <td>{route.route_name}</td>
              <td>{route.distance}</td>
=======
              <td>{route.route_order}</td>
              <td>{route.distance}</td>
              <td>{route.rout_name}</td>
              <td>{route.route_number}</td>
>>>>>>> e259c47e4e99e727b01c1ef41f677001a7ff231d:src/AdminViewRoute.js
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminViewRoute;
