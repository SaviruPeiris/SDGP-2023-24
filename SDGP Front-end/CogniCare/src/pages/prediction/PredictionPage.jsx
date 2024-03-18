import React from "react";
import NavBarTest from "../../components/NavBar/NavBarTest";
import ImageUpload from "./UploadImage";
import Footer from "../../components/Footer";

const PredictionPage = () => {
  return (
    <div>
      <NavBarTest></NavBarTest>
      <ImageUpload></ImageUpload>
      <Footer></Footer>
    </div>
  );
};

export default PredictionPage;
