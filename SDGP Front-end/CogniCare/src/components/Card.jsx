import React from "react";
import "bootstrap";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="container-fluid cardHeight">
        {/* <h2>Card Classes</h2>
        <p>The card class is suitable for both images and notes:</p> */}

        {/* <div className="card">
          <img src={Card1Img} alt="Image" style={{ width: "100%" }} />
          <div className="card-body">
            <h4 className="card-title">10 Tips for prevent dementia</h4>
            <p className="card-text">details goes here, blah blah blah</p>
            <a href="#" className="btn btn-primary">
              See More..
            </a>
          </div>
        </div>
      </div> */}

        <div className="card">
          <img src={props.image} alt="Image" style={{ width: "100%" }} />
          <div className="card-body ">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text detailCardBody">{props.text}</p>
            <a href="#" className="btn btn-primary">
              See More..
            </a>

{/* testing the popup */}
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              See more
            </button> */}

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
