import React from "react";
import "./Service.css";
import farmer from "../../assets/farmer.jpg";
import worker from "../../assets/worker.jpeg";
import customer from "../../assets/customer.jpg";

const servicesData = [
  {
    title: "Services for Farmers",
    image: farmer,
    heading: "Farmer",
    description:
      "Krishi Setu provide farmers with direct access to Retailers, Storages and urban distribution.",
    details: [
      {
        key: "Direct Marketplace for Bulk Buyers",
        value:
          "Farmers can sell produce directly to bulk buyers, including hotels, restaurants, and event organizers.",
      },
      {
        key: "Regional Storage System",
        value:
          "Government-backed cold storage facilities help prevent wastage.",
      },
      {
        key: "Minimum Support Price (MSP)",
        value:
          "Guaranteed cash flow upon storing produce with MSP, backed by government schemes.",
      },
      {
        key: "Urban Distribution",
        value:
          "Partner with local vendors to ensure cost-efficient urban delivery.",
      },
    ],
  },
  {
    title: "Services for Customers",
    image: customer,
    heading: "Customer",
    description:
      "Krishi Setu allows customers to purchase fresh produce directly from farmers.",
    details: [
      {
        key: "Direct Purchase from Farmers",
        value:
          "Customers can buy directly from farmers, with negotiation options for bulk and smaller quantities.",
      },
      {
        key: "Cold Storage Purchase",
        value:
          "Buy produce stored in local cold storage facilities, with information on quality and availability.",
      },
      {
        key: "Contract Farming",
        value: "Option to pre-order produce in bulk with contracts.",
      },
      {
        key: "Order Tracking",
        value:
          "Use the order dashboard to track purchases and delivery status.",
      },
      // {
      //   key: "Personalized Recommendations",
      //   value: "Get customized product suggestions based on preferences.",
      // },
    ],
  },
  {
    title: "Services for Storage Workers",
    image: worker,
    heading: "Worker",
    description:
      "Krishi Setu simplifies Inventory management and real-time monitoring of Produce.",
    details: [
      {
        key: "Add New Stock",
        value:
          "Log new arrivals into the system, including product details and farmer info.",
      },
      {
        key: "Update Inventory",
        value: "Easily adjust inventory for damage, sales, or transfers.",
      },
      {
        key: "Track Expiry",
        value:
          "Monitor product expiry dates with recommendations for alternative markets.",
      },
      {
        key: "Real-Time Inventory Monitoring",
        value: "Track the status of stored items with real-time dashboards.",
      },
      // {
      //   key: "Environmental Monitoring",
      //   value: "Get live data from sensors for temperature and humidity, with alerts for deviations.",
      // },
    ],
  },
];

const Services = () => {
  return (
    <div className="service-container">
      <h2 className="title">Our Services</h2>
      <p className="service-intro">
        Krishi Setu offers a wide range of services tailored for farmers,
        customers, and storage workers. Explore the features designed to help
        you get the best experience.
      </p>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-card-header">
                  <img
                    src={service.image}
                    alt={service.heading}
                    className="service-logo"
                  />
                </div>
                <div className="service-card-body">
                  <h3>{service.heading}</h3>
                  <p>{service.description}</p>
                </div>
                <button className="more-details-btn">More Details</button>
              </div>
              <div className="service-card-back">
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx}>
                      <strong>{detail.key}:</strong> {detail.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
