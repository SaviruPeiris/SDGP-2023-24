import React from "react";
import { Home } from "../../pages/AwaranessPage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "../AwaranessPage/Card";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
         <Route exact path="/card" component={Card} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
