import React, { useState } from "react";
import "./NewsInsights.css";

const schemes = [
  {
    image: "src/assets/PM-Kisan-Yojana.jpg",
    title: "PM-KISAN",
    description: "Direct financial support of ₹6,000 per year to farmers.",
    link: "https://www.pmkisan.gov.in",
  },
  {
    image: "src/assets/eNAM.jpeg",
    title: "eNAM",
    description: "Unified national market for agricultural commodities.",
    link: "https://enam.gov.in",
  },
  {
    image: "src/assets/PMFBY.jpeg",
    title: "PMFBY",
    description: "Insurance support for crop loss due to natural calamities.",
    link: "https://pmfby.gov.in",
  },
  {
    image: "src/assets/Gramin-Bandaran.jpg",
    title: "Gramin Bhandaran Yojana",
    description: "Encourages scientific storage of agricultural produce.",
    link: "https://www.pdmc.nic.in",
  },
  {
    image: "src/assets/PMAYG.jpeg",
    title: "Pradhan Mantri Awaas Yojna-Gramin",
    description: "Provides financial assistance for the construction of pucca houses to rural poor.",
    link: "https://pmayg.nic.in",
  },
  {
    image: "src/assets/NFSM.jpeg",
    title: "National Food Security Mission",
    description: " Aims to increase the production of rice, wheat, and pulses through various measures.",
    link: "http://www.nfsm.gov.in"
  },
  {
    image: "src/assets/SHM.jpeg",
    title: "Soil Health Management (SHM)",
    description: "Focuses on improving soil health and fertility through balanced use of fertilizers.",
    link: "http://www.agricoop.nic.in"
  },
  {
    image: "src/assets/KCC.jpg",
    title: "Kisan Credit Card (KCC)",
    description: " Provides short-term credit for the cultivation of crops and other agricultural needs.",
    link: "https://www.kcc.gov.in"
  },
];

const NewsInsights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % schemes.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + schemes.length) % schemes.length
    );
  };

  return (
    <div className="news-insights-container">
      {/* Header Section */}
      <header className="header-section">
        <h1>Government Schemes for Farmers</h1>
      </header>

      {/* Middle Section */}
      <div className="middle-section">
        {schemes.slice(currentIndex, currentIndex + 4).map((scheme, index) => (
          <div key={index} className="card">
            <img src={scheme.image} alt={scheme.title} className="card-image" />
            <div className="card-content">
              <h2>{scheme.title}</h2>
              <p>{scheme.description}</p>
              <a
                href={scheme.link}
                className="read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
        {schemes
          .slice(0, Math.max(0, currentIndex + 4 - schemes.length))
          .map((scheme, index) => (
            <div key={index + 4} className="card">
              <img
                src={scheme.image}
                alt={scheme.title}
                className="card-image"
              />
              <div className="card-content">
                <h2>{scheme.title}</h2>
                <p>{scheme.description}</p>
                <a
                  href={scheme.link}
                  className="read-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom Section */}
      <footer className="bottom-section">
        <button className="navigation-button" onClick={handlePrevious}>
          Previous
        </button>
        <button className="navigation-button" onClick={handleNext}>
          Next
        </button>
      </footer>
    </div>
  );
};

export default NewsInsights;
