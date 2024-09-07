import React, { useState } from 'react';
import './Footer.css'; // Make sure to add your styles in this CSS file

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContactClick = () => {
    if (isValidEmail(email)) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Guide</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        {/* <div className="footer-section">
          <h3>App Download Links</h3>
          <ul>
            <li><a href="#appstore" className="app-link app-link-black">App Store</a></li>
            <li><a href="#playstore" className="app-link app-link-grey">Google Play</a></li>
          </ul> */}
        {/* </div> */}

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-contact">
        {submitted ? (
          <p>Thank you for submitting information, we'll contact you at the earliest.</p>
        ) : (
          <>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            <button
              onClick={handleContactClick}
              disabled={!email || !isValidEmail(email)}
            >
              Contact
            </button>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
