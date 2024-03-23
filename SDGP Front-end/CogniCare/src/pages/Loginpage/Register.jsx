// import React from "react";
import GOOGLE_ICON from "../../assets/images/Loginpage/google.svg";
import LOGIN_IMAGE from "../../assets/images/Loginpage/dementia5.jpeg"
import React, { useState, useEffect } from "react";
import axios from 'axios';


// aos
// import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Validation from "./Validation";

import {Link, useNavigate} from "react-router-dom";
const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "D9D9D9",
};

const Login= () => {
  useEffect(() => {
    AOS.init();
  
  }, []);


const[values,setValues]=useState({ 
  name:'',
  email:'',
  password:''

})
const[errors,setError]=useState({})
  const navigate=useNavigate()

function handleChange(e){
  setValues({...values,[e.target.name]: e.target.value})
}

async function handleSubmit(e) {
  e.preventDefault();
  setError(Validation(values));

  if (Object.keys(errors).length === 0) {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/', {
        userName: values.name,
        email: values.email,
        password: values.password
      });

      if (response.status === 200 || response.status === 201) {
        console.log('Registration successful:', response.data);
        navigate("/home")

      } else {
        console.error('Registration failed: Unexpected status code:', response.status);
        
      }

    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400: 
            setError({...errors, global: 'Missing required fields or invalid data'});
            break;
          case 402: 
            setError({...errors, name: 'Invalid username format'});
            break;
          case 403:  
            setError({...errors, email: 'Username already exists'});
            break;
          case 404:  
            setError({...errors, email: 'Invalid email format'});
            break;
          case 500: 
            setError({...errors, global: 'An error occurred on the server. Please try again later.'});
            break;
          default: 
            setError({...errors, global: 'An error occurred during registration. Please try again.'});
        }
      } else if (error.request) {
        setError({...errors, global: 'Network Error. Could not connect to the server.'});
      } else {
        setError({...errors, global: 'An unexpected error occurred.'});
      }
    }
  }
}

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
      <form onSubmit={handleSubmit}>
        <h1
          style={{ fontWeight: "bolder", fontSize: "22px", color: "DarkBlue" }}
          className="w-full max-w-[500px] mx-auto text-x1 text-[#060606] font-semibold"
        >
          CogniCare+
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mt-2">
            <h3
              className="text-3xl font-semibold mt-2"
              data-aos="fade-left"
              data-aos-once="true"
            >
              Register
            </h3>
            <p className="text-base mt-2" data-aos="fade-left">
              Please enter your Details to Register.
            </p>
          </div>

          <input
              type="text"
              placeholder="Username"
              value={values.name}
              name="name" onChange={handleChange}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
            />
            {errors.name &&  <p style ={{color: "red",fontSize:"13px"}}>{errors.name} </p>}

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              value={values.email}
              name="email" onChange={handleChange}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
            />
             {errors.email &&  <p style ={{color: "red",fontSize:"13px"}}>{errors.email} </p>}

            <input
              type="password"
              placeholder="Password"
              value={values.password}
              name="password" onChange={handleChange}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
            />
             {errors.password &&  <p style ={{color: "red",fontSize:"13px"}}>{errors.password} </p>}
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
            <Link to="/loginPage" className="btn btn-primary">
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

         
        </div>

       
        </form>
      </div>
    </div>
  );
};

export default Login;
