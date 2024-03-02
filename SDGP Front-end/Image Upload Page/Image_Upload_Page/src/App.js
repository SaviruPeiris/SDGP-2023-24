import { BrowserRouter, Routes, Route } from "react-router-dom";
import Awareness from "./components/UploadImage/UploadImage";
import Footer from "./components/Footer/Footer";
import NavBarTest from "./components/NavBar/NavBarTest";
import UploadImage from "./components/UploadImage/UploadImage";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBarTest /> */}
      <UploadImage />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
