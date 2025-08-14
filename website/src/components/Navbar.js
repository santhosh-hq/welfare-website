import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
       <a href='https://agriwelfare.gov.in/en/FarmWelfare'> <li>Schemes</li> </a>
        <li><Link to="#Contact">Contact</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
