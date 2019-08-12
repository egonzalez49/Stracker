import React from 'react';

const MatchItem = ({ match }) => {
  const determineVictory = () => {
    if (match.top1) {
      return 'Victory';
    } else {
      return 'Defeat';
    }
  };

  return (
    <div className="match-item-container">
      <h4 className={`sub-heading ${determineVictory()}`}>
        {determineVictory()}
      </h4>
      <div className="match-info">
        {/* <p>Matches: {match.matches}</p> */}
        <p>Kills: {match.kills}</p>
        <p>Outlived: {match.playersOutlived} Players</p>
        <p>Match Time: {match.minutesPlayed} Minutes</p>
      </div>
      <p className="match-time">
        {new Date(match.dateCollected).toLocaleDateString()}
      </p>
    </div>
  );
};

export default MatchItem;
