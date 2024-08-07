import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      alert(response.data);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };
  return (
    <div className="section" id="contact">
    <div className="contact-container">
      <div className="row">
        <div className="col-md-4 contact-left">
          <h1>Contact</h1>
          <p>You'll called for yielding male, so lights Stars abundantly, is their.</p>
          <address>
            <p>Ajman</p>
            <p>United Arab Emirates</p>
            <p>+971556357063</p>
            <p>anzalbeg24494@gmail.com</p>
          </address>
        </div>
        <div className="col-md-5 offset-md-2 contact-right">
          <h2>Let's grab a coffee and jump on conversation <span>chat with me.</span></h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name"   value={formData.name}
              onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email *" required value={formData.email}
              onChange={handleChange} />
            <textarea name="message" placeholder="Message"    value={formData.message}
              onChange={handleChange}
              required></textarea>
            <button type="submit">CONTACT ME</button>
          </form>
        </div>
        <div className='col-md-2'></div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
