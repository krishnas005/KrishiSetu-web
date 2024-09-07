import React from 'react';
import './Download.css'; // Custom CSS for styling
import { FaApple, FaGooglePlay } from 'react-icons/fa'; // Icons for download buttons
import HomepageImg from '../../assets/Homepage.png';
import CFarming from '../../assets/CFarming.png';
import Dashboard from '../../assets/Dashboard.png';

const Download = () => {
  return (
    <section className="download-app">
      <div className="content-container">
        {/* App Mockups */}
        <div className="app-mockups">
          <img src={HomepageImg} alt="App Mockup 1" />
          <img src="src\assets\Step1.png" alt="App Mockup 2" />
          <img src="src\assets\step8(2).png" alt="" />
        </div>

        {/* Text and Download Buttons */}
        <div className="app-info">
          <h2>Get Started with Krishi Setu</h2>
          <p>Download the app and connect directly to the market.</p>
          
          {/* Download Buttons */}
          <div className="download-buttons">
            <a href="#" className="app-store-btn">
              <FaApple className="icon" />
              <span>App Store</span>
            </a>
            <a href="#" className="google-play-btn">
              <FaGooglePlay className="icon" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
