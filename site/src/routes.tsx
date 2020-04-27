import React from 'react';
import logo from './assets/logo.svg';

import {
  Switch,
  Route,
} from "react-router-dom";

import Landing from './pages/landing'

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
}

export default Routes;
