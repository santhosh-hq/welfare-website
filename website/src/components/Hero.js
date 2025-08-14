import React from 'react';
import man from '../imgs/Man.jpg';
const Hero = () => (
  <section
    style={{
      backgroundImage: `url(${man})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '80px 20px',
      color: '#fff',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'center',
      position: 'relative',
      minHeight: '50vh',
    }}
  >
    {/* Overlay for better text readability */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    ></div>

    {/* Content */}
    <div style={{ zIndex: 2, maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
        Empowering Farmers, Strengthening India
        
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        Together, cultivating growth for a stronger India.
      </p>
      <p style={{ fontSize: '1rem', marginBottom: '30px', lineHeight: '1.5' }}>
        Explore schemes, subsidies, and services dedicated to the welfare of our farmers.
      </p>
      <a
        href="https://agriwelfare.gov.in/en/FarmWelfare"
        style={{
          backgroundColor: '#4caf50',
          padding: '14px 28px',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#388e3c')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4caf50')}
      >
        Explore Schemes
      </a>
    </div>
  </section>
);

export default Hero;
