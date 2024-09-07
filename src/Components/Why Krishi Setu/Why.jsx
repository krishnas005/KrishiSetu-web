import React from "react";
import "./Why.css";
import Aitool from "../../assets/AiTool.png";
import communityImg from "../../assets/communityImg.jpg";
import dataImg from "../../assets/dataImg.jpg";
import TransparencyImg from "../../assets/Transparency.png";
import marketImg from "../../assets/shopping-cart.png";
import profitImg from "../../assets/profit.png";

const Why = () => {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Use Krishi Setu</h2>
      <p className="why-OneLiner">
        "Your one-stop solution for streamlined market access, enhanced profitability, and cutting-edge tools."
      </p>
      <div className="why-grid">
        <div className="why-item">
          <img src={marketImg} alt="Direct Marketplace" className="why-icon" />
          <h3 className="why-item-title">Direct Marketplace</h3>
          <p className="why-description">
            Connect directly with buyers to reduce costs and maximize profits, ensuring the best price for your produce.
          </p>
        </div>
        <div className="why-item">
          <img
            src={profitImg}
            alt="Increased Profitability"
            className="why-icon"
          />
          <h3 className="why-item-title">Increased Profitability</h3>
          <p className="why-description">
            Use data-driven insights to improve your earnings and operational efficiency by making informed decisions.
          </p>
        </div>
        <div className="why-item">
          <img src={Aitool} alt="AI Tools" className="why-icon" />
          <h3 className="why-item-title">Advanced AI Tools</h3>
          <p className="why-description">
            Leverage AI tools for predictive analytics and real-time data processing to optimize farm management.
          </p>
        </div>
        <div className="why-item">
          <img src={TransparencyImg} alt="Transparency" className="why-icon" />
          <h3 className="why-item-title">Transparency</h3>
          <p className="why-description">
            Build trust through transparent transactions with detailed tracking and reporting features.
          </p>
        </div>
        <div className="why-item">
          <img src={dataImg} alt="Real-Time Data" className="why-icon" />
          <h3 className="why-item-title">Real-Time Data</h3>
          <p className="why-description">
            Access real-time data to monitor performance, track trends, and quickly respond to changing conditions.
          </p>
        </div>
        <div className="why-item">
          <img
            src={communityImg}
            alt="Community Support"
            className="why-icon"
          />
          <h3 className="why-item-title">Community Support</h3>
          <p className="why-description">
            Join a supportive farming community to share knowledge, best practices, and collaborate for mutual growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
