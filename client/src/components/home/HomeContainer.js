import React from 'react';

import Header from './Header';
import StoreContainer from './store/StoreContainer';

class HomeContainer extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <StoreContainer />
      </div>
    );
  }
}

export default HomeContainer;
