import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="nav-container">
        <div className="nav-flex">
          <h1 className="logo">Stracker</h1>

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
  }
}

export default Navbar;
