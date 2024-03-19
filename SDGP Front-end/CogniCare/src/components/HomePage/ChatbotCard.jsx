import React from "react";
import "./ChatbotCard.css";
import chatbotImage from "../../assets/images/HomePageImages/HomePageIMG5.jpg";
// aos
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const ChatbotCard = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div
      className="chatbotCard-container border mb-5 border shadow rounded"
      data-aos="zoom-in"
    >
      <div className="chatbotCard-left-half" data-aos="fade-right">
        <img className="chatbotImage" src={chatbotImage} />
      </div>
      <div className="chatbotCard-right-half mt-5 px-10" data-aos="zoom-in">
        <h2>Meet ZAP: Your Personalized Dementia Support Companion</h2>
        <p className="text-2xl text-justify">
          Our interactive chatbot provides personalized support and information
          for individuals and caregivers dealing with dementia. Whether you have
          questions about symptoms, caregiving tips, or need emotional support,
          our chatbot is available 24/7 to assist you with compassionate
          responses and helpful resources.
        </p>
        <div className="btn btn-primary">ZAP</div>
      </div>
    </div>
  );
};

export default ChatbotCard;
