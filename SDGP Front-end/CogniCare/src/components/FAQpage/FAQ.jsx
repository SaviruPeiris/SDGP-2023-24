import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg" style={{fontFamily:"sans-serif"}}>
    
      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Question 1" answer="Answer" />
      </div>

      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Question 2" answer="Answer" />
      </div>

      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Question 3" answer="Answer" />
      </div>

      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Question 4" answer="Answer" />
      </div>

      <div className="p-2 bg-gray-300 mt-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Question 5" answer="Answer" />
      </div>

      <div className="p-2 bg-gray-300 mt-3 mb-3" style={{border:"2px #99A3A4 solid", borderRadius:"10px"}}>
        <Accordion title="Question 6" answer="Answer" />
      </div>
      
    </div>
  )};

export default FAQ;
