import React from 'react';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    
    <div className="hero-container">
      <div className="hero-content">
        <h1>Empowering Farmers, Connecting Markets.</h1>
        <p>A Direct Link Between Farmers and Consumers, Reducing Middlemen.</p>

        <div className=" ">
          <a href="/guide" className="bg-green-600 hover:bg-green-400 rounded-md py-2 px-2 mr-4">
            Read How It Works
          </a>

          <a href="#download" className="bg-blue-600 hover:bg-blue-400 rounded-md p-2">
            Download app
          </a> 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
