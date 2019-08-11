import React from 'react';
import { connect } from 'react-redux';

import { fetchMatches } from '../../../actions';

class MatchesContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.stats);
    if (this.props.stats) this.props.fetchMatches(this.props.stats.accountId);
  }

  render() {
    if (this.props.stats) {
      return (
        <div id="matches" className="container">
          <h1 className="stats-heading heading-alt">Match History</h1>
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
  { fetchMatches }
)(MatchesContainer);
