import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  // const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Create the login data object
    const loginData = {
      user_id: username,
      password: password,
      role: role
    };

    // Make a POST request to the login API endpoint
    axios
      .post('http://127.0.0.1:8090/api/login', loginData)
      .then((response) => {
        // Handle successful login
        console.log('Login successful:', response.data);
        // Show success toast message
        toast.success('Login successful');
        // Perform any additional actions after successful login

        if (role === 'admin') {
          navigate('/admin-main-screen');
        } else {
          navigate('/user-main-screen');
        }
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        // Show error toast message
        toast.error('Login failed. Please check your credentials.');
        // Perform any additional error handling
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            style={{ width: '201.33px', height: '44px', marginBottom: '20px' }}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <p>
         <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default Login;