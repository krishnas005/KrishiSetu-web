import React, { useState } from "react";
import "./FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAnswers = [
    {
      question: "What is Krishi Setu?",
      answer:
        "Krishi Setu is a platform that connects farmers directly with markets.",
    },
    {
      question: "How does Krishi Setu benefit farmers?",
      answer:
        "Krishi Setu helps farmers by eliminating middlemen, ensuring better profits.",
    },
    {
      question: "Is Krishi Setu available on mobile?",
      answer:
        "Yes, Krishi Setu is available on both iOS and Android platforms.",
    },
    {
      question: "Can consumers buy directly from farmers?",
      answer:
        "Yes, consumers can purchase fresh produce directly from farmers.",
    },
    {
      question: "How can I sign up as a farmer?",
      answer:
        "Farmers can sign up by filling out the registration form on our website or app.",
    },
    {
      question: "Is there a fee for using Krishi Setu?",
      answer: "FarmConnect offers free sign-up for both farmers and consumers.",
    },
    {
      question: "How do deliveries work on Krishi Setu?",
      answer:
        "Deliveries are managed through logistics partners and ensure timely arrival of products.",
    },
    {
      question: "Can I track my order?",
      answer: "Yes, order tracking is available through our app.",
    },
    {
      question: "Does Krishi Setu support bulk buying?",
      answer:
        "Yes, bulk buying options are available for businesses and organizations.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our support team via email or through the support section in our app.",
    },
    {
      question: "Can I get discounts on bulk orders?",
      answer: "Krishi Setu offers bulk discounts for large purchases.",
    }, // New question
    {
      question: "Is Krishi Setu available internationally?",
      answer: "Currently, Krishi Setu operates within India only.",
    }, // New question
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-content">
        <div className="faq-column">
          {questionsAnswers.slice(0, 6).map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.question}</h3>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-body">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
          <p className="faq-paragraph">
            Krishi Setu is designed to empower farmers by providing them with
            direct access to markets, ensuring that their hard work results in
            better returns.
          </p>
        </div>

        <div className="faq-column">
          {questionsAnswers.slice(6).map((item, index) => (
            <div key={index + 6} className="accordion-item">
              <div
                className={`accordion-header ${
                  activeIndex === index + 6 ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index + 6)}
              >
                <h3>{item.question}</h3>
                <span>{activeIndex === index + 6 ? "-" : "+"}</span>
              </div>
              {activeIndex === index + 6 && (
                <div className="accordion-body">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
          <p className="faq-paragraph">
            Consumers using Krishi Setu enjoy fresh produce and support local
            farming communities by purchasing directly from farmers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
