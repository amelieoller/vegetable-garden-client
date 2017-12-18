import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import CropsPage from "./CropsPage";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route
        exact
        path="/"
        render={() => (
          <div className="container">
            <h1>Welcome To Your Garden</h1>
            <h3>What would you like to do?</h3>
            <Link to={`/crops`} className="btn btn-primary">
              See My Garden
            </Link>
            <Link to={`/crops/new`} className="btn btn-primary">
              Add a New Crop
            </Link>
          </div>
        )}
      />
      <Route path="/crops" component={CropsPage} />
    </div>
  </Router>
);

export default App;
