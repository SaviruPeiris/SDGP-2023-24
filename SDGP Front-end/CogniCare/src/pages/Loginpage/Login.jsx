
// import React from "react"
import LOGIN_IMAGE from "../../assets/images/Loginpage/dementia5.jpeg"
import axios from 'axios';
// aos
import React, { useEffect, useState } from "react";
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
// Component for the login page
const Login = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);
//setting a variable
  const[values,setValues]=useState({ 
    name:'',
    email:'',
    password:''

  })

  const navigate=useNavigate()
const[errors,setError]=useState({})
  // Function to handle form input changes
  function handleChange(e){
    setValues({...values,[e.target.name]: e.target.value})
  }
 // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setError(Validation(values));
  
  
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/auth/', {
          userName: values.name,
          password: values.password
        });
  
       
        if (response.status === 200) {
          localStorage.setItem("userId",response.data.user._id)
          window.location.href = "/home";
          console.log('Login successful:', response.data);
          
        if(response.status ===401){
          console.log('Login Failed:', response.data);

        }  

          
         
        } else {
          console.error('Login failed with unexpected status code:', response.status);
         
        }
  
      } catch (error) {
   
        if (error.response) {
         
          if (error.response.status === 401) {
            console.error('Login error: Invalid credentials');
          
          } else {
            console.error('Login error:', error.response);
    
          }
        } else if (error.request) {
          
          console.error('Login error: Network error');
          
        } else {
      
          console.error('Unexpected login error:', error);
          
        }
      }
    }
  }
  

  
  return (
    <>
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
              Login
            </h3>
            <p className="text-base mt-2" data-aos="fade-left">
              Welcome Back! Please enter your Details.
            </p>
            <p>If you do not  have an account click register </p>
          </div>

          <div className="w-full flex flex-col">

          <input
              type="text"
              placeholder="Username"
              value={values.name}
              name="name" onChange={handleChange}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
            />
            {errors.name &&  <p style ={{color: "red",fontSize:"13px"}}>{errors.name} </p>}
           
            <input
              type="password"
              placeholder="Password"
              value={values.password}
              name="password" onChange={handleChange}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none "
            />
            {errors.password &&  <p style ={{color: "red",fontSize:"13px"}}>{errors.password} </p>}
          </div>

         

          <div className="w-full flex flex-col my-4">
            <button type="submit" className="w-full text-white my-2 fomt-semibold bg-[#060606] round-md p-4 text-center flex items-center justify-center cursor-pointer">
              Log in
            </button>

            <Link to="/registerPage" className="btn btn-primary">
              <button className="w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                Register
              </button>
            </Link>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black/40 mt-2"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]"></p>
          </div>

        </div>

      
      </form>
      </div>
    </div>
    </>
  );
};

export default Login;

