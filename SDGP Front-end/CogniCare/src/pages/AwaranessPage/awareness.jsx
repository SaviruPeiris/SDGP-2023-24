// import React from "react"

import { Home } from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailPage } from "../../../CogniCare/src/pages/DetailsPage/DetailPage"
import { Card } from "../../../CogniCare/src/pages/AwaranessPage/Card"

const App = () => {
  return (
    <>
      <Router>
     
        <Switch>
          <Route exact path='/' component={Home} />
          
          <Route exact path='/details/:id' component={DetailPage} />
        
          <Route exact path='/card' component={Card} />

        </Switch>
       
      </Router>
    </>
  )
}
export default App


