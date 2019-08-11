import React from 'react';
import { connect } from 'react-redux';

import StoreItem from './StoreItem';

class StoreList extends React.Component {
  renderList = category => {
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
          <div className="sub-heading-line">
            <h4 className="sub-heading">Featured</h4>
          </div>
          <div className="store-list">
            {this.renderList('BRWeeklyStorefront')}
          </div>

          <div className="sub-heading-line">
            <h4 className="sub-heading">Daily</h4>
          </div>
          <div className="store-list">
            {this.renderList('BRDailyStorefront')}
          </div>
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

export default connect(mapStateToProps)(StoreList);
