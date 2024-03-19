import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import Card from "./Card";
// import Card1Img from "../assets/images/Card1Img.jpg";
import Card1Img from "../assets/images/HomePageImages/HomePageIMG7.jpg";
// import Card2Img from "../assets/images/Card2Img.jpg";
import Card2Img from "../assets/images/HomePageImages/HomePageIMG4.jpg";
import Card3Img from "../assets/images/Card3Img.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

function CardContainer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [offsetY1, setOffsetY1] = useState(0);
  const handleScroll = () => setOffsetY1(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define separate state for each card
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  // Define separate handleShow and handleClose functions for each card
  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);

  return (
    <>
      <div
        className="learnAboutDementiaContainer pb-10"
        // style={{ transform: `translateY(-${offsetY1 * 0.3 - 400}px)` }}
      >
        <div
          className="cardContainerTitle text-5xl mb-10"
          data-aos="zoom-in"
          style={{ transform: `translateY(-${offsetY1 * 0.4 - 300}px)` }}
        >
          Learn about Dementia
        </div>
        <div className="container-fluid CardContainer">
          <div
            className="row"
            // style={{ transform: `translateY(-${offsetY1 * 0.5}px)` }}
          >
            <div
              className="col"
              data-aos="zoom-in-right"
              style={{ transform: `translateY(-${offsetY1 * 0.4 - 330}px)` }}
            >
              <Card
                image={Card3Img}
                title="What is dementia?"
                text="Dementia is a term used to describe a group of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily functioning."
                handleShow={handleShow1}
                handleClose={handleClose1}
                show={show1}
                description="Dementia is a broad term used to describe a decline in cognitive function that affects a person's ability to perform everyday activities. It is not a specific disease but rather a collection of symptoms resulting from damage to brain cells. Common symptoms include memory loss, difficulty with language and communication, impaired judgment, and changes in behavior and personality. Dementia can be caused by various underlying conditions, the most common being Alzheimer's disease. It is progressive and can significantly impact an individual's quality of life and their ability to live independently. Early diagnosis and appropriate management are crucial for optimizing treatment and support for individuals living with dementia."
              />
            </div>
            <div
              className="col"
              data-aos="zoom-in"
              style={{ transform: `translateY(-${offsetY1 * 0.4 - 330}px)` }}
            >
              <Card
                image={Card1Img}
                title="Tips for prevent dementia"
                text="Preventing dementia involves maintaining a healthy lifestyle and engaging in activities that support brain health."
                handleShow={handleShow2}
                handleClose={handleClose2}
                show={show2}
                description="22222"
              />
            </div>
            <div
              className="col"
              data-aos="zoom-in-left"
              style={{ transform: `translateY(-${offsetY1 * 0.4 - 330}px)` }}
            >
              <Card
                image={Card2Img}
                title="Main causes for dementia"
                text="Dementia is a complex condition with various causes, and often it's a combination of factors that contribute to its development."
                handleShow={handleShow3}
                handleClose={handleClose3}
                show={show3}
                description="333333"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardContainer;
