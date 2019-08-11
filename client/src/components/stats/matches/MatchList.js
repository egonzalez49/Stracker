import React from 'react';
import { connect } from 'react-redux';

import StoreItem from './StoreItem';

class MatchList extends React.Component {
  renderList = () => {
    return this.props.store.map(item => {
      if (item.storeCategory === category) {
        return <StoreItem key={item.manifestId} item={item} />;
      }
      return null;
    });
  };

  render() {
    if (this.props.store) {
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
    store: state.store
  };
};

export default connect(mapStateToProps)(MatchList);
