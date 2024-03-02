import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import image1 from "../../assets/images/PredictionPage/pic1.jpg";

function ImageUpload() {
  const location = useLocation();
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = () => {
    // Trigger the file input click
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      // Set the selected image for preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      // Clear the selected image if a non-image file is chosen
      setSelectedImage(null);
    }
  };

  // Sample data for a single box
  const boxData = {
    title: "Upload Your Scan here...",
    description: "Image should be uploaded.",
    // imageSrc: "/assets/images/pic1.jpg",
    imageSrc: image1,
  };

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row py-4 h-100 justify-content-center">
          <div className=" mb-3 text-center">
            <h5
              className="mb-3"
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "DarkBlue",
              }}
            >
              Upload the MRI Scan
            </h5>
            {selectedImage && (
              <img
                src={selectedImage}
                className="img-fluid mb-3 smaller-image-preview "
                alt="Selected"
              />
            )}
            <img
              src={boxData.imageSrc}
              className="img-fluid mb-3 smaller-image col-md-4"
              alt={`Image for ${boxData.title}`}
            />
            <div>
              <h5
                className="mb-3"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                {boxData.title}
              </h5>
              <p>{boxData.description}</p>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
              />
              <button
                onClick={handleImageUpload}
                className="btn btn-outline-primary mt-3"
              >
                Choose Image
              </button>{" "}
              <Link to={boxData.link} className="btn btn-primary mt-3">
                Submit
              </Link>
              <div
                className="mt-3 mb-3"
                style={{
                  padding: "15px",
                  textAlign: "left",
                  marginLeft: "100px",
                  marginRight: "100px",
                  border: "2px solid Black",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                <b style={{ color: "purple" }}>Patient consent......</b>
                <br />
                By signing in and utilizing our services, you consent to the
                collection, processing, and analysis of your medical images for
                the purpose of predicting dementia risk. Your privacy and
                confidentiality will be strictly maintained, and your data will
                be used solely for healthcare purposes. If you have any
                questions or concerns regarding the use of your data, please
                feel free to contact us.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
