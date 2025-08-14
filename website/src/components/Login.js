import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (API call, Firebase auth, etc.)
    console.log('Login data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Welcome back! You are now logged in.</p>;
  }

  return (
    <section className="login-section" style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Password
          <input type="password" name="password" required value={formData.password} onChange={handleChange} />
        </label>

        <button type="submit" className="btn">Login</button>
      </form>
    </section>
  );
};

export default Login;
