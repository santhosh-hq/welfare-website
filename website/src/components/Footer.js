import React from 'react';
import breadcrumb from '../imgs/breadcrumb-banner-1.jpg';
const Footer = () => (
  <footer style={{
  padding: '20px 0 0 0',
  backgroundColor: '#1b5e20',
  color: 'white',
  textAlign: 'center'
}}>
  <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>
    &copy; 2025 Government of India - Farmers Welfare. All rights reserved by Santhoshkuma&reg;
  </p>
  
  {/* Full-width image container */}
  <div style={{
    width: '100%',
    overflow: 'hidden',
    maxHeight: '150px' // keeps it proportional
  }}>
    <img
      src={breadcrumb}
      alt="footer"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }}
    />
  </div>
</footer>

);

export default Footer;
