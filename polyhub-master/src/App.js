import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GoodFoodMenu from "./components/pages/Menu";
import Home from "./components/pages/Home";
import React from "react";
import RestaurantTile from "./components/RestaurantTile";

function App() {
  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/goodfood">GF Menu</Link>
            </li>
          </ul>
        </nav> */}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/goodfood">
          <GoodFoodMenu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
