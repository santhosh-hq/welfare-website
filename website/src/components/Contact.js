import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
      style={{
        maxWidth: '420px',
        margin: '40px auto',
        background: '#f5fff5',
        padding: '32px 24px',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#388e3c', marginBottom: '24px' }}>Contact Us</h1>
      <form>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' ,opacity:'0.7'}}>Name:</label>
        <input
          type="text"
          placeholder="Your name"
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '16px',
            borderRadius: '6px',
            border: '1px solid #b2dfdb'
          }}
        />

        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email:</label>
        <input
          type="email"
          placeholder="Your email"
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '16px',
            borderRadius: '6px',
            border: '1px solid #b2dfdb'
          }}
        />

        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Message:</label>
        <textarea
          placeholder="Your message"
          style={{
            width: '100%',
            padding: '8px',
            minHeight: '80px',
            marginBottom: '20px',
            borderRadius: '6px',
            border: '1px solid #b2dfdb'
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            background: '#388e3c',
            color: '#fff',
            padding: '10px 24px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '100%'
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
