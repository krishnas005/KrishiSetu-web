import React, { useState } from 'react';
import './Navbar.css'; // Add your custom CSS here
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar menu on mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href='/' className="logo">
          {/* <a href="/">Krishi Setu</a> */}
          <img src={logo} />
        </a>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="#why" className="nav-links" >Why Krishi Setu</a>
          </li>
          <li>
            <a href="#features" className="nav-links">Features</a>
          </li>
          <li>
            <a href="/guide" className="nav-links">How It Works</a>
          </li>
          <li>
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>

        {/* Download App Button */}
        {/* <a href="#download" className="btn-download-app">
          Download App
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
