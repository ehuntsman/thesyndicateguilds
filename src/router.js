import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Guilds from './components/Guilds/Guilds';

export default(
  <Switch>
      <Route exact component={Home} path='/' />

      <Route exact component={Guilds} path='/guilds' />
  </Switch>
)