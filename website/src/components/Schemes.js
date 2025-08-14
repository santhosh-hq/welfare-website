import React from 'react';
import { FaGraduationCap, FaHeartbeat, FaLightbulb } from 'react-icons/fa';
import './Schemes.css';

const Schemes = () => {
  return (
    <section id="schemes" className="schemes-section">
      <div className="schemes-header">
        <h1>Our Schemes</h1>
        <p>Discover initiatives designed to support and empower our community.</p>
      </div>
      <div className="schemes-grid">
        <div className="scheme-card">
          <div className="scheme-icon">
            <FaGraduationCap />
          </div>
          <h3>Education Scheme</h3>
          <p>Helps students with scholarships to achieve their academic goals.</p>
        </div>
        <div className="scheme-card">
          <div className="scheme-icon">
            <FaHeartbeat />
          </div>
          <h3>Health Scheme</h3>
          <p>Provides free medical checkups and essential healthcare services.</p>
        </div>
        <div className="scheme-card">
          <div className="scheme-icon">
            <FaLightbulb />
          </div>
          <h3>Startup Scheme</h3>
          <p>Funds early-stage businesses and promotes innovation.</p>
        </div>
      </div>
    </section>
  );
};

export default Schemes;
