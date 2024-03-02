// import React from "react"

import { Home } from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailPage } from "./pages/details/DetailPage"
import { Card } from "./components/awareness/Card"

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


