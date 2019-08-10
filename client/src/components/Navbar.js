import React from 'react';
import { Link } from 'react-router-dom';

import hamburgerIcon from '../images/toggle-menu.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-flex">
        <h1 className="logo">Stracker</h1>

        <nav>
          <img className="menu" src={hamburgerIcon} alt="toggle menu" />

          <ul className="show-desktop hide-mobile">
            <li className="exit-btn hide-desktop">
              <img alt="exit menu" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Store</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
