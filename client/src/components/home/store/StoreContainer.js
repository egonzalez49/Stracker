import React from 'react';
import { connect } from 'react-redux';

import { fetchStore } from '../../../actions';
import StoreList from './StoreList';

class StoreContainer extends React.Component {
  componentDidMount() {
    this.props.fetchStore();
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading-alt">Current Store</h1>
        <StoreList />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchStore }
)(StoreContainer);
