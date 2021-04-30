import React from "react";
import "./app.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Cards from "../components/card/card";
import Home from "../pages/home";
import View from "../pages/view";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="nav-wrapper">
        <Navbar title = "Quikie Apps" />
      </div>
      <div className="card-wrapper">
        <Cards logo="GOOGL.png" symbol="GOOG" price="1515 USD" />
        <Cards logo="FB.png" symbol="FB" price="266 USD" />
        <Cards logo="AMZN.svg" symbol="AMZN" price="3116 USD" />
      </div>
      <div className="table-wrapper">
        <Switch>
          <Route exact path="/view">
            {/* <View /> */}
          </Route>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
