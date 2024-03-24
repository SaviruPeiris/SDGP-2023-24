// import React from 'react';
import MRI_scanner from "../../assets/images/PredictionPage/MRI_scanner.jpg";
import brain_scan from "../../assets/images/PredictionPage/brain_scan.jpg";
import { Link } from "react-router-dom";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const ImageUploadAwareness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        className="font-serif  "
        style={{ paddingRight: "40px", paddingLeft: "40px" }}
      >
        <div className="text-center p-12">
          <h1 className="text-5xl font-bold text-purple-600 underline">
            Upload your MRI scan
          </h1>
        </div>

        <div
          className="bg-indigo-200 rounded-lg shadow-xl p-8"
          data-aos="zoom-in"
        >
          <img
            className="float-left w-[550px] h-auto mr-10 rounded-lg mt-2 mb-4 shadow-lg"
            src={brain_scan}
            alt="image"
          />

          <div>
            <h2 className="font-bold">Do you want to know the risk level?</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              When we consider the risk level, we're referring to the analysis
              of specific features extracted from medical images. These features
              are indicative of patterns associated with dementia. By processing
              and interpreting these images, we can provide insights into the
              potential risk of developing dementia. This information can be
              valuable for individuals and healthcare professionals to take
              proactive steps towards prevention or early intervention, leading
              to better health outcomes.
            </p>

            <h2 className="font-bold mt-6 ">
              What does Image Processing mean?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Image processing is the manipulation and analysis of digital
              images. It involves tasks like enhancing image quality, extracting
              useful information, and making decisions based on the interpreted
              content. Pros include automation, enhanced visualization, and
              improved accuracy, while cons may include complexity,
              computational intensity, dependency on image quality, and ethical
              considerations.
            </p>
          </div>
        </div>

        <div className="text-center mt-20 mb-20" data-aos="zoom-in">
          <h1 className="mb-10 text-5xl font-bold text-purple-600">
            Empowering Users Through Knowledge
          </h1>
          <p className="text-2xl ">
            Empowering users through knowledge is our priority. We offer
            educational resources and a supportive community to help users
            understand their dementia risk and make informed decisions about
            their health.
          </p>
        </div>

        <div
          className="w-full h-[450px] bg-gray-700 rounded-xl relative"
          data-aos="zoom-in"
        >
          <img
            className="h-full object-cover mix-blend-overlay"
            src={MRI_scanner}
            alt="."
          />

          <div className="absolute text-center top-1/4 text-white">
            <h1 className="mb-10 text-5xl font-bold ">
              The Importance of Early Awareness of Dementia Risk level
            </h1>
            <p className="text-2xl">
              Early awareness of dementia risk is crucial. Detecting signs early
              allows for prompt intervention, potentially slowing its
              progression and improving quality of life. It empowers individuals
              and families to plan ahead and adopt healthy lifestyles. Early
              identification aids in recruiting participants for clinical trials
              and reduces stigma. Overall, it enhances individual outcomes and
              contributes to dementia prevention efforts.
            </p>
          </div>
        </div>

        <div
          className="mx-auto mb-10 pt-20 "
          style={{ maxWidth: "700px" }}
          data-aos="zoom-in"
        >
          <div className="border-2 border-purple-600 rounded-lg p-6 shadow-xl bg-gradient-to-br from-white to-purple-100">
            <p className="text-purple-600 font-bold mb-2">
              Patient Consent......
            </p>
            <p className="text-lg leading-relaxed">
              Before proceeding with any medical examination or procedure,
              including the collection and analysis of medical images, patient
              consent is required. By providing consent, the patient
              acknowledges their understanding of the purpose, risks, and
              potential benefits of the procedure. They also authorize the
              healthcare provider to use their medical information for
              diagnosis, treatment, and research purposes, while ensuring
              confidentiality and adhering to privacy regulations. Patient
              consent is essential to ensure transparency, respect for autonomy,
              and ethical conduct in healthcare practices.
            </p>
          </div>
        </div>

        <div className=" text-center bottom-10 right-10 pb-10">
          <Link to="/predictionPage">
            <button className="font-bold bg-purple-600 text-white px-8 py-3 rounded-lg shadow-xl transition-all hover:bg-purple-800 duration-500 hover:scale-105">
              Continue here...
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ImageUploadAwareness;
