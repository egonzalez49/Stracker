import React from 'react';
import { connect } from 'react-redux';

import { fetchStats, clearStats } from '../../actions';
import Header from './Header';
import MatchContainer from './matches/MatchContainer';

class StatsContainer extends React.Component {
  componentDidMount() {
    const decoded = decodeURI(this.props.match.params.username);
    this.props.fetchStats(decoded);
  }

  componentWillUnmount() {
    this.props.clearStats();
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <MatchContainer />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStats, clearStats }
)(StatsContainer);
