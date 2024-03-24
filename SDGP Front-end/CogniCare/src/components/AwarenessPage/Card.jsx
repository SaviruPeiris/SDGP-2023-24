import React from "react";

// import "./blog.css";
import "../../pages/AwaranessPage/awareness.css";
import { awareness } from "../../assets/data/data";
// import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom";
// aos
import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";


export const Card = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section className="blog" data-aos="zoom-in">
        <div className="container grid3" >
          
          {awareness.map((item) => (
            <div className="box boxItems" key={item.id} >
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details">
                <Link to={`/details/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>
              
               { item.desc.slice(0,180)}...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

