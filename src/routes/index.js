import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Favorites from '../pages/Favorites';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/favorites" exact component={Favorites}/>
    </Switch>
  );
}