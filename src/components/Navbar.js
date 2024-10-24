import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Ensure the path to your logo image is correct
import '../styles/Navbar.css';  // Import your CSS file
import ChargingCalculator from '../pages/ChargingCalculator';
import Community from '../components/Community.js';



const Navbar = () => {
  const [servicesDropdownVisible, setServicesDropdownVisible] = useState(false);
  const [electricDropdownVisible, setElectricDropdownVisible] = useState(false);

  const toggleServicesDropdown = () => {
    setServicesDropdownVisible(!servicesDropdownVisible);
  };

  const toggleElectricDropdown = () => {
    setElectricDropdownVisible(!electricDropdownVisible);
  };

  return (
    <nav className="navbar">
      {/* Left Section - Logo and ChargeFinder */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo-link">
          <img 
            src={logo} 
            alt="Logo" 
            className="navbar-logo"
          />
          <span className="navbar-title">ChargeFinder</span>
        </Link>
      </div>

      {/* Right Section - Navigation Links */}
      <div className="navbar-right">
        {/* Dropdown for Going Electric */}
        <div className="navbar-link electric-dropdown">
          <span className="navbar-link" onClick={toggleElectricDropdown}>
            Going Electric ▼
          </span>
          {electricDropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/types-of-ev" className="dropdown-item">Types of EV</Link>
              <Link to="/benefits-of-ev" className="dropdown-item">Benefits of EV</Link>
              <Link to="/busting-ev-myths" className="dropdown-item">Busting EV Myths</Link>
            </div>
          )}
        </div>

  
        <Link to="/about" className="navbar-link">About</Link>

        {/* Dropdown for Services */}
        <div className="navbar-link services-dropdown">
          <span className="navbar-link" onClick={toggleServicesDropdown}>
            Services ▼
          </span>
          {servicesDropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/show-map" className="dropdown-item">Show Maps</Link>
              <Link to="/book-mechanic" className="dropdown-item">Book a Mechanic</Link>
            </div>
          )}
        </div>
        
        <div className='navbar-link'>
          <Link to="/community">Community</Link>
        </div>

        <div className="navbar-link services-dropdown">
          <span className="navbar-link" onClick={toggleServicesDropdown}>
            Tools ▼
          </span>
          {servicesDropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/charging-calc" className="dropdown-item">Charging Calculator</Link>
              
            </div>
          )}
        </div>

        <Link to="/contact" className="navbar-link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
