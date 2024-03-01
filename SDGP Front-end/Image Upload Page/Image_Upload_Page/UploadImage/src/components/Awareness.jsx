import React, { useRef, useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router

function Awareness() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = () => {
    // Trigger the file input click
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith('image/')) {
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
    title: 'Upload Your Scan Here',
    description: 'Image size must be less than 2MB',
    imageSrc: '/assets/images/pic1.jpg',
    link: '/submit', // Add a link property
  };

  return (
    <div className="container mx-auto mt-5 mb-5">
      <div className="flex justify-center py-4">
        <div className="w-full md:w-1/2 lg:w-1/3 mb-3 text-center">
          {selectedImage && (
            <img src={selectedImage} className="object-cover w-full h-auto mb-3" alt="Selected" />
          )}
          <img src={boxData.imageSrc} className="object-cover w-full h-auto mb-3" alt={`Image for ${boxData.title}`} />
          <div>
            <h5 className="mb-3 text-xl font-bold">{boxData.title}</h5>
            <p>{boxData.description}</p>
            <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} accept="image/*" />
            <button onClick={handleImageUpload} className="btn btn-outline-primary mt-3">
              Choose Image
            </button>
            {' '}
            <Link to={boxData.link} className="btn btn-primary mt-3">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Awareness;
