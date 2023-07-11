
import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formData, setFormData] = useState({
    user_id: '',
    password: '',
    confirm_password: '',
    full_name: '',
    email:'',
    gender:'',
    date_of_birth:'',
    mobile_no:'',
    aadhar_no:'',
    pan_no:'',
    street_line:'',
    city:'',
    pin_code:'',
    country:'',
    nationality:''
    
  


  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert('Passwords do not match');
      return;
    }

    if (!formData.full_name) {
      alert('Full Name is required');
      return;
    }
    if (!formData.confirm_password) {
      alert('Full Name is required');
      return;
    }

    axios
      .post('http://127.0.0.1:8090/api/register', formData)
      .then((response) => {
        // Handle successful login
        console.log(response.data);
        // Show success toast message
        toast.success('Registered successfully');
        // Perform any additional actions after successful login

        // if (role === 'admin') {
        //   navigate('/admin-main-screen');
        // } else {
        //   navigate('/user-main-screen');
        // }
      })
      .catch((error) => {
        // Handle login error
        console.error('Registration error:', error);
        // Show error toast message
        toast.error('Registration Failed');
        // Perform any additional error handling
      });
  };

  return (
  <div className="Container">
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user_id">User ID:</label>
        <input type="text" id="user_id" name="user_id" value={formData.user_id} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" value={formData.confirmPassword} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" name="full_name" value={formData.fullName} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            style={{ width: '412.33px', height: '41.33px', marginBottom: '20px' }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Others</option>
          </select>
        </div>
        
      <br></br>
      <div>
        <label htmlFor="date_of_birth">D.O.B:</label>
        <input type="date" id="date_of_birth" name="date_of_birth" value={formData.date_of_birth} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="mobile_no">Mobile No.:</label>
        <input type="numeric" id="mobile_no" name="mobile_no" value={formData.mobile_no} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="aadhar_no">Aadhar No.:</label>
        <input type="text" id="aadhar_no" name="aadhar_no" value={formData.aadhar_no} onChange={handleInputChange} />
      </div>
      <br></br>
      <div>
        <label htmlFor="pan_no">Pan No.:</label>
        <input type="text" id="pan_no" name="pan_no" value={formData.pan_no} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="street_line ">Street Line:</label>
        <input type="text" id="street_line" name="street_line" value={formData.street_line} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="city ">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="pin_code">Pincode:</label>
        <input type="text" id="pin_code" name="pin_code" value={formData.pincode} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} required />
      </div>
      <br></br>
      <div>
        <label htmlFor="nationality">Nationality:</label>
        <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleInputChange} required />
      </div>
      <br></br>
      <button variant="dark" type="submit">
        Register
      </button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      {/* <button type="submit">Register</button> */}
    </form>
  </div>
);
}
export default Register;
