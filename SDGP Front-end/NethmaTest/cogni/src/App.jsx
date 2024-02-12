import React from "react"

import { Home } from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"


const App = () => {
  return (
    <>
      <Router>
     
        <Switch>
          <Route exact path='/' component={Home} />
          
          <Route exact path='/details/:id' component={DetailsPages} />
          
        </Switch>
       
      </Router>
    </>
  )
}
export default App
