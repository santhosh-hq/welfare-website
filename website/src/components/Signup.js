import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    navigate('/dashboard');
  };

  return (
    <section className="signup-container">
      {/* Left side form */}
      <div className="signup-form">
        <h2>Sign Up for Updates</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
          </label>
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>

      {/* Right side images as circle halves */}
      <div className="signup-image">
        <div className="signup-image-1">
          <img src="https://agrinfobank.com.pk/wp-content/uploads/2019/11/wheat-sowing.jpg" alt="Wheat Sowing" />
        </div>
        <div className="signup-image-2">
          <img src="https://dynamicmedia.dow.com/is/image/dow/AdobeStock_271022542?ts=1709474973354" alt="Plant Growing" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
