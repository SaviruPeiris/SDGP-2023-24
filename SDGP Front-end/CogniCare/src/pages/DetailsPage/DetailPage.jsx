
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
            <h2>{blogs.subpointA1}</h2>
            <p>{blogs.pointA1}</p>
            <h2>{blogs.subpointA2}</h2>
            <p>{blogs.pointA2}</p>
            <h2>{blogs.subpointA3}</h2>
            <p>{blogs.pointA3}</p>
            <h2>{blogs.subpointA4}</h2>
            <p>{blogs.pointA4}</p>
            <h2>{blogs.subpointA5}</h2>
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
            <h2>{blogs.subpointB1}</h2>
            <p>{blogs.pointB1}</p>
            <h2>{blogs.subpointB2}</h2>
            <p>{blogs.pointB2}</p>
            <h2>{blogs.subpointB3}</h2>
            <p>{blogs.pointB3}</p>
            <h2>{blogs.subpointB4}</h2>
            <p>{blogs.pointB4}</p>
            <h2>{blogs.subpointB5}</h2>
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
            <h2>{blogs.subpointC1}</h2>
            <p>{blogs.pointC1}</p>
            <h2>{blogs.subpointC2}</h2>
            <p>{blogs.pointC2}</p>
            <h2>{blogs.subpointC3}</h2>
            <p>{blogs.pointC3}</p>
            <h2>{blogs.subpointC4}</h2>
            <p>{blogs.pointC4}</p>
            <h2>{blogs.subpointC5}</h2>
            <p>{blogs.pointC5}</p>
 
            </div>
            </div>
          </div>
              

        ) : (
          <p>Loading...</p>
        )}
      </section>
      
     
    </div>
    
    <Footer></Footer>
  
    </>
   
    
  );

};

export default DetailPage;
