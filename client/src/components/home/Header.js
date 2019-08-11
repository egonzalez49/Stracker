import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchStats } from '../../actions';
import searchIcon from '../../images/search-icon.svg';

class Header extends React.Component {
  state = {
    username: ''
  };

  onInputChange = e => {
    this.setState({ username: e.target.value });
  };

  onInputSubmit = e => {
    this.props.fetchStats(this.state.username, this.props.history);
    e.preventDefault();
  };

  render() {
    return (
      <header className="home-header">
        <div className="container">
          <h1 className="heading">Track your stats!</h1>
          <form onSubmit={this.onInputSubmit}>
            <div className="search-container">
              <input
                value={this.state.username}
                onChange={e => this.onInputChange(e)}
                className="search-input"
                placeholder="Enter your username."
              />
              <img
                onClick={this.onInputSubmit}
                className="search-icon"
                src={searchIcon}
                alt="magnifying glass search icon"
              />
            </div>
          </form>
        </div>
      </header>
    );
  }
}

export default connect(
  null,
  { fetchStats }
)(withRouter(Header));
