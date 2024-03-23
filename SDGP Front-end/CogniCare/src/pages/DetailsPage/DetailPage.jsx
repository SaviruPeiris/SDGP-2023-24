
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { awareness } from "../../assets/data/data";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSpring, animated } from 'react-spring';

import "./details.css";
import NavBarTest from "../../components/NavBar/NavBarTest";
import Footer from "../../components/Footer";
const DetailPage = () => { 
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);


  useEffect(() => {
    let blog = awareness.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlogs(blog);
    }
  }, [id]);

  return (
    <>
    <NavBarTest></NavBarTest>
   
    <div className="detail-page-container">
   
<Sidebar
  Subheading1={blogs && blogs.subheading1}
  Subheading2={blogs && blogs.subheading2}
  Subheading3={blogs && blogs.subheading3}
/>

      <section className="descriptionPage">

        
        {blogs ? (
          <div className="section">


            <h1>{blogs.title}</h1>
            <p>{blogs.desc}</p>
            <img src={blogs.image1} alt=''></img>

            <div id="section1" className="section1">
            <h1>{blogs.subheading1}</h1>
            <p>{blogs.detail1}</p>
            <img src={blogs.image11} alt=''></img>
           
          <div className="points">
            <p>{blogs.pointA1}</p>
            <p>{blogs.pointA2}</p>
            <p>{blogs.pointA3}</p>
            <p>{blogs.pointA4}</p>
            <p>{blogs.pointA5}</p>
          
            </div>
          
            </div>

            <div id="section2" className="section2">
         
            <h1>{blogs.subheading2}</h1>
           
            <p>{blogs.detail2}</p>
            <img src={blogs.image2} alt=''></img> 
            <p>{blogs.detail22}</p>
            <img src={blogs.image22} alt=''></img>

            <div className="points">
            <p>{blogs.pointB1}</p>
            <p>{blogs.pointB2}</p>
            <p>{blogs.pointB3}</p>
            <p>{blogs.pointB4}</p>
            <p>{blogs.pointB5}</p>

            </div>
            </div>

            <div id="section3" className="section3">
           
            <h1>{blogs.subheading3}</h1>
            <p>{blogs.detail3}</p>
            <img src={blogs.image3} alt=''></img>
            <p>{blogs.detail33}</p>
            <img src={blogs.image33} alt=''></img>


            <div className="points">
            <p>{blogs.pointC1}</p>
            <p>{blogs.pointC2}</p>
            <p>{blogs.pointC3}</p>
            <p>{blogs.pointC4}</p>
            <p>{blogs.pointC5}</p>
 
            </div>
            </div>
          </div>
              

        ) : (
          <p>Loading...</p>
        )}
      </section>
      
      <Footer></Footer>
    </div>
  
    </>
   
    
  );

};

export default DetailPage;
