
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { awareness } from "../../assets/data/data";
import Sidebar from "../../components/Sidebar/Sidebar";


import "./details.css";

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
    <div className="detail-page-container">
      <Sidebar />
      <section className="descriptionPage">
        {blogs ? (
          <div className="section">

          <div id="section1" className="section1">
            <h1>{blogs.title}</h1>
            <p>{blogs.desc}</p>
            <img src={blogs.image1} alt=''></img>

            <h1>{blogs.subheading1}</h1>
            <p>{blogs.detail1}</p>

            
            <img src={blogs.image11} alt=''></img>
     
            <p>{blogs.pointA1}</p>
            <p>{blogs.pointA2}</p>
            <p>{blogs.pointA3}</p>
            <p>{blogs.pointA4}</p>
            <p>{blogs.pointA5}</p>
          

            </div>

            <div id="section2" className="section2">
           
           

            <h1>{blogs.subheading2}</h1>
          
            <img src={blogs.image2} alt=''></img> 

            <img src={blogs.image22} alt=''></img>
            <p>{blogs.detail2}</p>
            <p>{blogs.pointB1}</p>
            <p>{blogs.pointB2}</p>
            <p>{blogs.pointB3}</p>
            <p>{blogs.pointB4}</p>
            <p>{blogs.pointB5}</p>

           
            </div>

            <div id="section3" className="section3">
           
           
            <h1>{blogs.subheading3}</h1>
            <p>{blogs.detail33}</p>
            

            <img src={blogs.image3} alt=''></img>
            <p>{blogs.detail3}</p>
            <img src={blogs.image33} alt=''></img>
          
            <p>{blogs.pointC1}</p>
            <p>{blogs.pointC2}</p>
            <p>{blogs.pointC3}</p>
            <p>{blogs.pointC4}</p>
            <p>{blogs.pointC5}</p>

            
            
            </div>
          </div>

        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
    
  );

};

export default DetailPage;

