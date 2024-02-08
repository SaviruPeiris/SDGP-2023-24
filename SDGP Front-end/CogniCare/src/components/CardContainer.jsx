import React from "react";
import "./CardContainer.css";
import Card from "./Card";

function CardContainer() {
  return (
    <div className="container-fluid CardContainer">
      <div className="row">
        <div className="col" style={{ backgroundColor: "lavender" }}>
          <Card></Card>
        </div>
        <div className="col" style={{ backgroundColor: "orange" }}>
          <Card></Card>
        </div>
        <div className="col" style={{ backgroundColor: "lavender" }}>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
