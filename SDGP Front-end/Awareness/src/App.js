import { BrowserRouter, Routes, Route } from "react-router-dom";
import Awareness from "./components/Awareness";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/awareness" element={<Awareness />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
