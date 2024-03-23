// import React from 'react';
import { CheckIcon } from "@heroicons/react/outline";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div name="platforms" className="w-full my-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-center text-purple-900 mb-6"
          data-aos="fade-up"
        >
          All-In-One Dementia Prediction Platform
        </h2>
        <p
          className="text-lg text-gray-600 text-center mb-12"
          data-aos="fade-up"
        >
          Welcome to our all-in-one dementia prediction platform. We are
          dedicated to providing comprehensive services and resources to help
          you understand, prevent, and manage dementia effectively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="h-96 flex" data-aos="fade-right" data-aos-delay="300">
            <ServiceCard
              title="Chatbot Support"
              description="Our platform features a chatbot that provides reliable information and assistance on various topics related to dementia. Feel free to ask any questions or seek guidance."
            />
          </div>
          <div className="h-96 flex" data-aos="fade-right" data-aos-delay="200">
            <ServiceCard
              data-aos="fade-right"
              title="MRI Image Processing"
              description="Worried about dementia risk? Upload your MRI scan images, and our advanced image processing feature will analyze them to provide you with insights into your dementia risk level."
            />
          </div>

          <div className="h-96 flex" data-aos="fade-right" data-aos-delay="100">
            <ServiceCard
              data-aos="fade-right"
              title="E-Channelling"
              description="Book appointments with healthcare professionals specializing in dementia diagnosis and management through our convenient e-channelling system. Take proactive steps towards your cognitive health."
            />
          </div>

          <div className="h-96 flex" data-aos="fade-right" data-aos-delay="0">
            <ServiceCard
              data-aos="fade-right"
              title="Awareness Resources"
              description="Explore our awareness page, which contains a wealth of resources, articles, and information about dementia. Stay informed and empowered to make informed decisions for yourself and your loved ones."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <CheckIcon className="w-6 h-6 mr-2 text-pink-800" />
        <h3 className="text-lg font-semibold text-purple-800">{title}</h3>
      </div>
      <p className="text-gray-500 text-lg">{description}</p>
    </div>
  );
};

export default Services;