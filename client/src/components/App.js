import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import HomeContainer from './home/HomeContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={HomeContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
