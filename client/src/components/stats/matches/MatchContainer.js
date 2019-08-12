import React from 'react';
import { connect } from 'react-redux';

import { fetchMatches, clearMatches } from '../../../actions';
import MatchList from './MatchList';

class MatchesContainer extends React.Component {
  componentDidMount() {
    if (this.props.stats) this.props.fetchMatches(this.props.stats.accountId);
  }

  componentDidUpdate() {
    if (this.props.stats) this.props.fetchMatches(this.props.stats.accountId);
  }

  componentWillUnmount() {
    this.props.clearMatches();
  }

  render() {
    if (this.props.stats && !this.props.stats.error) {
      return (
        <div id="matches" className="container">
          <h1 className="stats-heading heading-alt">Match History</h1>
          <MatchList />
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    stats: state.stats
  };
};

export default connect(
  mapStateToProps,
  { fetchMatches, clearMatches }
)(MatchesContainer);
