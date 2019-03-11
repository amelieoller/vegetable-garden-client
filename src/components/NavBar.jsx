import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      Vegetable Garden
    </a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/crops" className="nav-link">
            Crops
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/crops/new" className="nav-link">
            Add Crop
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
