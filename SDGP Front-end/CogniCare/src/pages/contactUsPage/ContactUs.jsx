import React from "react";
import NavBarTest from "../../components/NavBar/NavBarTest";
import ContactUsImg from "../../assets/images/ContactUs.jpg";
import "./ContactUs.css";

import { TypeAnimation } from "react-type-animation";

const ContactUs = () => {
  return (
    <div>
      <NavBarTest></NavBarTest>
      <div className="container-fluid">
        <div className="row">
          {/* Image Column */}
          <div className="col-md-6">
            <img
              src={ContactUsImg}
              className="img-fluid"
              alt="Left Side Image"
            />
          </div>
          {/* Content Column */}

          <div className="col-md-6 rightContainer">
            <h2 className="fs-1 mx-10">CONTACT US</h2>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Send us your problems",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Send us your reviews",
                1000,
                "Send us your thoughts",
                1000,
                "Send us your feedbacks",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "30px", display: "inline-block" }}
              repeat={Infinity}
              className="mx-10"
            />
            <div>
              <form className="mx-10">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    // value={formData.name}
                    // onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    // value={formData.message}
                    // onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
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
