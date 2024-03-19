import React from "react";
import "./ChatbotCard.css";
import chatbotImage from "../../assets/images/HomePageImages/HomePageIMG15.jpg";
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
      className="chatbotCard-container mb-0 rounded"
      //   data-aos="zoom-in"
      //   data-aos-duration="1000"
    >
      <div
        className="chatbotCard-left-half"
        data-aos="fade-right"
        data-aos-duration="1000"
        // data-aos-offset="200"
      >
        <img className="chatbotImage" src={chatbotImage} />
      </div>
      <div className="chatbotCard-right-half mt-0" data-aos="zoom-in">
        <h3 className="mb-4">
          Meet ZAP: Your Personalized Dementia Support Companion
        </h3>
        <p className="text-lg text-left">
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
