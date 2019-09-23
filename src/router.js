import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Guilds from './components/Guilds/Guilds';
import Profile from './components/Users/Profile';
import Users from './components/Admin/Users';
import AuthCheck from './components/Users/AuthCheck';

export default(
  <Switch>
      <Route exact component={Home} path='/' />

      <Route exact component={Guilds} path='/guilds' />

      <Route component={Profile} path='/user/profile' />

      {/* login */}
      <Route component={Profile} path='/login' />

      {/* Admin */}
        <Route component={Users} path="/admin/users" />
  </Switch>
)