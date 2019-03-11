// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './NavBar';
import CropsPage from '../containers/CropsPage';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route
        exact
        path="/"
        render={() => (
          <div id="outer">
            <div className="text-center" id="inner_fixed">
              <h1>Welcome To Your Garden</h1>
              <h3>What would you like to do?</h3>
              <Link to="/crops" className="btn btn-primary margin-right">
                See My Garden
              </Link>
              <Link to="/crops/new" className="btn btn-primary">
                Add a New Crop
              </Link>
            </div>
            <div id="inner_remaining" />
          </div>
        )}
      />
      <Route path="/crops" component={CropsPage} />
    </div>
  </Router>
);

export default App;
