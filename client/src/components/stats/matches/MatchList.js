import React from 'react';
import { connect } from 'react-redux';

import MatchItem from './MatchItem';

class MatchList extends React.Component {
  renderList = () => {
    return this.props.matches.recentMatches.map(match => {
      return <MatchItem key={match.id} match={match} />;
    });
  };

  render() {
    if (this.props.matches && this.props.matches.recentMatches) {
      if (!this.props.matches.recentMatches.length) {
        return (
          <h4
            style={{ display: 'block', textAlign: 'center' }}
            className="sub-heading"
          >
            No recent matches. {':('}
          </h4>
        );
      }

      return (
        <div>
          <div className="match-list">{this.renderList()}</div>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    matches: state.matches
  };
};

export default connect(mapStateToProps)(MatchList);
