import React from "react";
import "bootstrap";
import "./Card.css";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Card = (props) => {
  // const [show, setShow1] = useState(false);

  // const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);

  return (
    <div>
      <div className="container-fluid cardHeight">
        <div className="card">
          <img src={props.image} alt="Image" style={{ width: "100%" }} />
          <div className="card-body ">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text detailCardBody">{props.text}</p>

            {/* <a href="#" className="btn btn-primary">
              See More..
            </a> */}

            {/* testing the popup */}
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              See more
            </button> */}

            <Button variant="primary" onClick={props.handleShow}>
              See More
            </Button>

            <Modal show={props.show} onHide={props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>{props.description}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
