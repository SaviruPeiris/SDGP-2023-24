import React from "react";
import "bootstrap";
import "./Card.css";
import Card1Img from "../assets/images/Card1Img.jpg";

const Card = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* <h2>Card Classes</h2>
        <p>The card class is suitable for both images and notes:</p> */}
        <div className="card">
          <img src={Card1Img} alt="Image" style={{ width: "100%" }} />
          <div className="card-body">
            <h4 className="card-title">10 Tips for prevent dementia</h4>
            <p className="card-text">details goes here, blah blah blah</p>
            <a href="#" className="btn btn-primary">
              See More..
            </a>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="card" style={{ width: "300px" }}>
          <img src="car.jpg" alt="Image" style={{ width: "100%" }} />
          <div className="card-body">
            <h4 className="card-title">10 Tips for prevent dementia</h4>
            <p className="card-text">details goes here, blah blah blah</p>
            <a href="#" className="btn btn-primary">
              See More..
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Card;
