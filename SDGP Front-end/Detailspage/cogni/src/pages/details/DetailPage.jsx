
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { awareness } from "../../assets/data/data";
import Sidebar from "./Sidebar";


import "./details.css";

export const DetailPage = () => {
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
            <h1>{blogs.subheading}</h1>
            <p>{blogs.desc}</p>

            <img src={blogs.image} alt=''></img>
            

            </div>

            <div id="section2" className="section2">
            <h1>{blogs.subheading1}</h1>
            <p>{blogs.detailing1}</p></div>

            <div id="section3" className="section3">
            <h1>{blogs.subheading2}</h1>
            <p>{blogs.detailing2}</p></div>
          </div>

        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
    
  );
};
