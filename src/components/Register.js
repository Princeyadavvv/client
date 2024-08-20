import React, { useState } from 'react';
import axios from '../api/api'; // Adjust if necessary
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/register', formData);
      if (response && response.data) {
        console.log(response.data);
        //navigate('/mcq');
      } else {
        console.error('Unexpected response format:', response);
      }
    } catch (err) {
      console.error('Error during registration:', err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" onChange={onChange} placeholder="Username" />
      <input type="email" name="email" onChange={onChange} placeholder="Email" />
      <input type="password" name="password" onChange={onChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
