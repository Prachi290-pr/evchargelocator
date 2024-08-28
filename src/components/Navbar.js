import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Ensure the path to your logo image is correct
import '../styles/Navbar.css';  // Import your CSS file

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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
        <Link to="/going-electric" className="navbar-link">Going Electric</Link>
        <Link to="/about" className="navbar-link">About</Link>

        {/* Dropdown for Services */}
        <div className="navbar-link services-dropdown">
          <span className="navbar-link" onClick={toggleDropdown}>
            Services ▼
          </span>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/maps" className="dropdown-item">Show Maps</Link>
              <Link to="/book-mechanic" className="dropdown-item">Book a Mechanic</Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="navbar-link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
