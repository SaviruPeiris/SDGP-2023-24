import React from "react";

import { Home } from "../../pages/AwaranessPage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { DetailPage } from "../DetailsPage/DetailPage";
import { Card } from "../AwaranessPage/Card";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />

          {/*<Route exact path="/details/:id" component={DetailPage} />*/}

          <Route exact path="/card" component={Card} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
