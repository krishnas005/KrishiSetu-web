import React, { useState } from "react";
import "./Working.css"; // Ensure this CSS file is available

const Working = () => {
  const [language, setLanguage] = useState("en"); // English as default language

  const content = {
    en: {
      title: "USER GUIDE",
      intro: "Below is a detailed guide on how to use Krishi Setu. Follow the steps below to learn.",
      steps: [
        {
          title: "Step 1",
          description:
            "Initially, you will see a splash screen with a welcome message, followed by the login screen. Now click on the next option and then select any language of your choice and click on Continue.",
          images: ["src/assets/Step1.png", "src/assets/Step1(1).jpg"]
        },
        {
          title: "Step 2",
          description:
            "Now a Login Screen will appear, where you can register or login with just your Mobile No. Fill in the Mobile No, and an OTP will be sent to you. Enter the OTP and continue.",
          images: ["src/assets/Step1(2).jpg"]
        },
        {
          title: "Step 3",
          description:
            "After successful login, you will have 3 options: Customer, Farmer, or Storage Worker. Select one and continue to the next screen.",
          images: ["src/assets/Step3.jpg"]
        },
        {
          title: "Step 4",
          description:
            "After selecting the Farmer option, a profile screen will appear. Complete your profile by providing the necessary details.",
          images: ["src/assets/Step4.jpg"]
        },
        {
          title: "Step 5",
          description:
            "The app will ask for location access. You can either enter the address manually or select 'Automatically Detect My Location'.",
          images: ["src/assets/Step5.jpg"]
        },
        {
          title: "Step 6",
          description:
            "Now, you are on the home screen where you can access features like My Dashboard, AI Rate Prediction, Contract Farming, Sell Produce, Schemes for me, and Nearby Storage.",
          images: ["src/assets/Step6.jpg"]
        },
        {
          title: "Step 7",
          description:
            "The Notification section at the bottom bar will show important updates, order confirmations, and reminders.",
          images: ["src/assets/Step7.jpg"]
        },
        {
          title: "Step 8",
          description:
            "In the bottom bar, you'll find options like FAQs and Profile, where you can log out or change profile settings.",
          images: ["src/assets/step8(1).jpg", "src/assets/step8(2).png"]
        },
        {
          title: "Step 9",
          description:
            "On the home screen, you can explore nearby resources like Mandis and transport. The Learning Hub provides information on government schemes.",
          images: ["src/assets/step9(1).jpg", "src/assets/step9(2).jpg", "src/assets/step9(3).jpg"]
        },
        {
          title: "Step 10",
          description:
            "To sell your produce, click on 'Sell Produce' and easily list your produce for sale by specifying the quantity and price.",
          images: ["src/assets/step10.jpg"]
        },
        {
          title: "Step 11",
          description:
            "Explore other services, and feel free to contact us for assistance. If you like the app, please leave a review.",
          images: []
        }
      ]
    },
    hi: {
      title: "उपयोगकर्ता मार्गदर्शिका",
      intro: "नीचे क्रिशि सेतु का उपयोग करने का विस्तृत मार्गदर्शिका दिया गया है। सीखने के लिए निम्नलिखित चरणों का पालन करें।",
      steps: [
        {
          title: "चरण 1",
          description:
            "प्रारंभ में, आपको स्वागत संदेश के साथ एक स्प्लैश स्क्रीन दिखाई देगी, उसके बाद लॉगिन स्क्रीन दिखाई देगी। अब अगले विकल्प पर क्लिक करें और अपनी पसंद की भाषा चुनें और जारी रखें पर क्लिक करें।",
          images: ["src/assets/Step1.png", "src/assets/Step1(1).jpg"]
        },
        {
          title: "चरण 2",
          description:
            "अब एक लॉगिन स्क्रीन दिखाई देगी, जहाँ आप केवल मोबाइल नंबर के साथ पंजीकरण या लॉगिन कर सकते हैं। मोबाइल नंबर दर्ज करें, और एक ओटीपी भेजा जाएगा। ओटीपी दर्ज करें और जारी रखें।",
          images: ["src/assets/Step1(2).jpg"]
        },
        {
          title: "चरण 3",
          description:
            "सफल लॉगिन के बाद, आपको ग्राहक, किसान, या भंडारण कार्यकर्ता के रूप में लॉगिन करने के 3 विकल्प मिलेंगे। एक विकल्प चुनें और जारी रखें।",
          images: ["src/assets/Step3.jpg"]
        },
        {
          title: "चरण 4",
          description:
            "किसान विकल्प चुनने के बाद, एक प्रोफ़ाइल स्क्रीन दिखाई देगी। आवश्यक विवरण प्रदान करके अपनी प्रोफ़ाइल पूरी करें।",
          images: ["src/assets/Step4.jpg"]
        },
        {
          title: "चरण 5",
          description:
            "ऐप स्थान की पहुँच माँगेगा। आप पता मैन्युअली भर सकते हैं या 'मेरे स्थान का स्वचालित रूप से पता लगाएं' विकल्प चुन सकते हैं।",
          images: ["src/assets/Step5.jpg"]
        },
        {
          title: "चरण 6",
          description:
            "अब आप होम स्क्रीन पर हैं जहाँ आप 'माई डैशबोर्ड', 'एआई रेट भविष्यवाणी', 'अनुबंध खेती', 'उत्पाद बेचना', 'मेरे लिए योजनाएं', और 'निकटवर्ती भंडारण' जैसी सुविधाओं का उपयोग कर सकते हैं।",
          images: ["src/assets/Step6.jpg"]
        },
        {
          title: "चरण 7",
          description:
            "नीचे बार में अधिसूचना अनुभाग आपको सभी आवश्यक सूचनाएँ और जानकारी प्रदान करेगा, जैसे कि ऑर्डर पुष्टिकरण, अनुस्मारक।",
          images: ["src/assets/Step7.jpg"]
        },
        {
          title: "चरण 8",
          description:
            "नीचे बार में, एफएक्यू और प्रोफ़ाइल जैसे विकल्प शामिल हैं। प्रोफ़ाइल अनुभाग में, लॉग आउट और प्रोफ़ाइल सेटिंग्स के विकल्प होते हैं।",
          images: ["src/assets/step8(1).jpg", "src/assets/step8(2).png"]
        },
        {
          title: "चरण 9",
          description:
            "होम स्क्रीन पर, आप मंडियों और परिवहन जैसी निकटवर्ती संसाधनों तक पहुंच सकते हैं। 'लर्निंग हब' सरकारी योजनाओं के बारे में जानकारी प्रदान करता है।",
          images: ["src/assets/step9(1).jpg", "src/assets/step9(2).jpg", "src/assets/step9(3).jpg"]
        },
        {
          title: "चरण 10",
          description:
            "'उत्पाद बेचना' विकल्प पर क्लिक करें और अपनी उपज को बेचने के लिए मात्र और मूल्य निर्दिष्ट करें।",
          images: ["src/assets/step10.jpg"]
        },
        {
          title: "चरण 11",
          description:
            "अन्य सेवाओं का अन्वेषण करें, और सहायता के लिए हमसे संपर्क करें। यदि आपको ऐप पसंद आता है, तो कृपया समीक्षा छोड़ें।",
          images: []
        }
      ]
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <section className="how-to-use">
      <h2 className="title">{content[language].title}</h2>
      <div className="language-selector">
        <label>Select Language: </label>
        <select onChange={handleLanguageChange} value={language}>
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>
      <p className="intro">{content[language].intro}</p>
      <ul className="steps-list">
        {content[language].steps.map((step, index) => (
          <li key={index} className="steps-container">
            <p>
              <strong>{step.title}:</strong> {step.description}
            </p>
            <div className="steps-inner-container">
              {step.images.map((imgSrc, imgIndex) => (
                <img key={imgIndex} src={imgSrc} alt={`${step.title} Image`} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Working;
