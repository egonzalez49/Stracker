import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchStats, clearStats } from '../../actions';
import searchIcon from '../../images/search-icon.svg';

class Header extends React.Component {
  state = {
    username: ''
  };

  componentDidMount() {
    this.props.clearStats();
  }

  onInputChange = e => {
    this.setState({ username: e.target.value });
  };

  onInputSubmit = e => {
    this.props.fetchStats(this.state.username, this.props.history);
    e.preventDefault();
  };

  renderError = () => {
    if (this.props.stats && this.props.stats.error) {
      return true;
    }
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
          {this.renderError() ? (
            <div className="error-container">
              <p className="error-text">{this.props.stats.error}</p>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    stats: state.stats
  };
};

export default connect(
  mapStateToProps,
  { fetchStats, clearStats }
)(withRouter(Header));
