import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

   
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    alert('Your message has been sent!');
     
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <header>
        <h1>Contact Us</h1>
      </header>

      <div className="contact-form">
        <h2>We'd love to hear from you</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <p>If you'd prefer, you can also contact us directly:</p>
        <p>Email: <a href="shubhamtiwari9508@gmail.com">shubhamtiwari9508@gmail.com</a></p>
        <p>Phone: +91 9508612294</p>
      </div>

       
    </div>
  );
};

export default Contact;
