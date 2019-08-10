import React from 'react';

import searchIcon from '../../images/search-icon.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="home-header">
        <div className="container">
          <h1 className="heading">Track your stats!</h1>
          <div className="search-container">
            <input
              className="search-input"
              placeholder="Enter your username."
            />
            <img
              className="search-icon"
              src={searchIcon}
              alt="magnifying glass search icon"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
