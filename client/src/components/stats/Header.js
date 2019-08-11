import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    if (this.props.stats) {
      const { epicUserHandle } = this.props.stats;
      const wins = this.props.stats.lifeTimeStats[8].value;
      const winrate = this.props.stats.lifeTimeStats[9].value;
      const kills = this.props.stats.lifeTimeStats[10].value;
      const killrate = this.props.stats.lifeTimeStats[11].value;

      return (
        <header className="stats-header">
          <div className="container">
            <h1 className="stats-name">{epicUserHandle}</h1>
            <div className="stats-info">
              <p>Total Wins: {wins}</p>
              <p>Total Kills: {kills}</p>
              <p>W/R: {winrate}</p>
              <p>K/D: {killrate}</p>
            </div>
          </div>
        </header>
      );
    }

    //stats not fetched yet
    return null;
  }
}

const mapStateToProps = state => {
  return {
    stats: state.stats
  };
};

export default connect(mapStateToProps)(Header);
