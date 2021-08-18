import React from "react";
import { Route, Switch, withRouter, Link } from "react-router-dom"
import Computers from "./Containers/Computers/Computers"
import Computer from "./Containers/Computer/Computer"


const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Computers} />
      <Route path="/computer" exact component={Computer} />
    </Switch>
  )
  return (
    <>
      <div className="header">
        <div><Link to="/">Computers</Link></div>
        <div>
          <Link to="/computer">Add a computer</Link></div>
      </div>
      {routes}
    </>
  )
}

export default withRouter(App);
