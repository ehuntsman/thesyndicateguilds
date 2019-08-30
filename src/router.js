import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Guilds from './components/Guilds/Guilds';
import Profile from './components/Users/Profile';

export default(
  <Switch>
      <Route exact component={Home} path='/' />

      <Route exact component={Guilds} path='/guilds' />

      <Route component={Profile} path='/user/profile' />
  </Switch>
)