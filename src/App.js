import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import LandingPage from './LandingPage';
import PortfolioPage from './PortfolioPage';
import NotFoundPage from './NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/portfolio' component={PortfolioPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
