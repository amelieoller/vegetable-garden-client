import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/crops">Crops</NavLink>
        </li>
        <li>
          <NavLink to="/crops/new">Add Crop</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
