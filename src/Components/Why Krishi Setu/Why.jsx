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
      {/* <p className="why-OneLiner">
        "Your one-stop solution for streamlined market access, enhanced
        profitability, and cutting-edge tools."
      </p> */}
      <div className="why-grid">
        <div className="why-item">
          <img src={marketImg} alt="Direct Marketplace" className="why-icon" />
          <h3 className="why-item-title">Direct Marketplace</h3>
          {/* <p className="why-description">
            Connect directly with buyers and cut out the middlemen to maximize
            your profits. FarmConnect facilitates direct interactions between
            Sellers and potential buyers, reducing costs and ensuring that you get
            the best price for your produce. 
          </p> */}
        </div>
        <div className="why-item">
          <img
            src={profitImg}
            alt="Increased Profitability"
            className="why-icon"
          />
          <h3 className="why-item-title">Increased Profitability</h3>
          {/* <p className="why-description">
            Leverage our data-driven insights to enhance your earnings and
            operational efficiency. Our tools provide detailed analytics that
            help you make informed decisions, optimize your resources, and
            identify new opportunities for growth.
          </p> */}
        </div>
        <div className="why-item">
          <img src={Aitool} alt="AI Tools" className="why-icon" />
          <h3 className="why-item-title">Advanced AI Tools</h3>
          {/* <p className="why-description">
            Utilize advanced AI tools designed to support smarter farming
            practices and better decision-making. Our technology offers
            predictive analytics, automated recommendations, and real-time data
            processing to help you manage your farm more effectively and
            sustainably.
          </p> */}
        </div>
        <div className="why-item">
          <img src={TransparencyImg} alt="Transparency" className="why-icon" />
          <h3 className="why-item-title">Transparency</h3>
          {/* <p className="why-description">
            Ensure transparency in all your transactions and build stronger
            trust with buyers. FarmConnect offers detailed tracking and
            reporting features that keep both you and your customers informed
            about every aspect of the transaction.
          </p> */}
        </div>
        <div className="why-item">
          <img src={dataImg} alt="Real-Time Data" className="why-icon" />
          <h3 className="why-item-title">Real-Time Data</h3>
          {/* <p className="why-description">
            Access up-to-date data and analytics to make quick and informed
            decisions. FarmConnect's real-time data capabilities allow you to monitor your
            farm's performance, track market trends, and respond rapidly to
            changing conditions.
          </p> */}
        </div>
        <div className="why-item">
          <img
            src={communityImg}
            alt="Community Support"
            className="why-icon"
          />
          <h3 className="why-item-title">Community Support</h3>
          {/* <p className="why-description">
            Join a vibrant community of farmers for shared knowledge and
            support. Our platform connects you with peers who can offer advice,
            share best practices, and provide mutual encouragement. Benefit from
            a network of experienced individuals committed to collective success
            and growth.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Why;
