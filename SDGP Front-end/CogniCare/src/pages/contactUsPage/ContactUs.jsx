// import React from "react";
import NavBarTest from "../../components/NavBar/NavBarTest";
import ContactUsImg from "../../assets/images/ContactUs.jpg";
import "./ContactUs.css";

import { TypeAnimation } from "react-type-animation";

// aos
import React, { useState, useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAffiliatetheme } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  //for the validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Wada wada, he he");
    }
  };

  return (
    <div>
      <NavBarTest></NavBarTest>
      <div className="container-fluid g-0">
        <div className="row g-0">
          {/* Image Column */}
          <div className="col-md-6 leftImageContainer">
            <img
              src={ContactUsImg}
              className="img-fluid contactUsImage"
              alt="Left Side Image"
            />
          </div>
          {/* Content Column */}

          <div className="col-md-6 rightContainer">
            <h2 className="fs-1 mx-10 mb-0">CONTACT US</h2>

            <TypeAnimation
              sequence={[
                "Send us your problems!",
                1000,
                "Send us your reviews!",
                1000,
                "Send us your thoughts!",
                1000,
                "Send us your feedbacks!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "30px", display: "inline-block" }}
              repeat={Infinity}
              className="mx-10"
            />
            <div>
              <form className="mx-10 mt-3" onSubmit={handleSubmit}>
                <div
                  className="mb-3"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  <label htmlFor="name" className="form-label fs-5">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter you name here"
                    // value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="text-danger">{errors.name}</span>
                  )}
                </div>
                <div
                  className="mb-3"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  <label htmlFor="email" className="form-label fs-5">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter you email here"
                    // value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>
                <div
                  className="mb-3"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <label htmlFor="message" className="form-label fs-5">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter you message here"
                    // value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <span className="text-danger">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-once="true"
                  // onClick={testFunction}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
