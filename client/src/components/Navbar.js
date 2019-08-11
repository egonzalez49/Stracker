import React from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import hamburgerIcon from '../images/toggle-menu.png';
import exitIcon from '../images/exit-menu.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.exit = React.createRef();
    this.nav = React.createRef();
  }

  onMenuClick = e => {
    this.nav.current.classList.toggle('hide-mobile');
    if (window.innerWidth <= 500) {
      this.nav.current.style.width = '60%';
    } else if (window.innerWidth > 500) {
      this.nav.current.style.width = '30%';
    }
    e.preventDefault();
  };

  onExitClick = e => {
    this.nav.current.style.width = '0px';
    this.nav.current.classList.toggle('hide-mobile');
    e.preventDefault();
  };

  render() {
    return (
      <div id="home" className="nav-container">
        <div className="nav-flex">
          <Link to="/">
            <h1 className="logo">Stracker</h1>
          </Link>

          <nav>
            <img
              ref={this.menu}
              onClick={this.onMenuClick}
              className="menu hide-desktop"
              src={hamburgerIcon}
              alt="toggle menu"
            />

            <ul ref={this.nav} className="show-desktop hide-mobile">
              <li
                ref={this.exit}
                onClick={this.onExitClick}
                className="exit-btn hide-desktop"
              >
                <img src={exitIcon} alt="exit menu" />
              </li>
              <li>
                <NavLink smooth to="/#home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink smooth to="/#store">
                  Store
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
