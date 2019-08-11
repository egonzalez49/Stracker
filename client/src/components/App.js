import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import HomeContainer from './home/HomeContainer';
import StatsContainer from './stats/StatsContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/user/:username" exact component={StatsContainer} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
