// import React from "react";
import LOGIN_IMAGE from "../Assets/dementia5.jpeg";
import GOOGLE_ICON from "../Assets/google.svg";

import { Link } from "react-router-dom";

// aos
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "D9D9D9",
};

const Login = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col"></div>
        <img
          src={LOGIN_IMAGE}
          style={{ width: "100%", height: "100%" }}
          className=" object-cover"
        />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1
          style={{ fontWeight: "bolder", fontSize: "22px", color: "DarkBlue" }}
          className="w-full max-w-[500px] mx-auto text-x1 text-[#060606] font-semibold"
        >
          CogniCare+
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mt-2">
            <h3 className="text-3xl font-semibold mt-2" data-aos="fade-left">
              Register
            </h3>
            <p className="text-base mt-2" data-aos="fade-left">
              Please enter your Details to Register
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center ">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me for 30 days </p>
            </div>

            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forgot Password ?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <Link to="/login" className="btn btn-primary">
              <button className="w-full text-white my-2 fomt-semibold bg-[#060606] round-md p-4 text-center flex items-center justify-center cursor-pointer">
                Log in
              </button>
            </Link>
            <button className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Register
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black/40 mt-2"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>

          <div className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            <img src={GOOGLE_ICON} className="h-6 mr-2" />
            Sign In with Google
          </div>
        </div>

        <div className="w-full flex items-center justify-center mb-20">
          <p className="text-sm font-normal text-[#060606]">
            Don't have a account?{" "}
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
