import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Favorites from '../pages/Favorites';
import Country from '../pages/Country';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/favorites" exact component={Favorites}/>
      <Route path="/country/:name" exact component={Country}/>
    </Switch>
  );
}