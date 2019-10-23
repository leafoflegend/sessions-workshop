import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/home/Home.js';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* TODO: This should lead to an authenticated page... */}
          <Route path={"/user"} exact>
            Hello There!
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
