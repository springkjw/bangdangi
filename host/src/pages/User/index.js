import React from 'react';
import {Switch} from 'react-router-dom';

import {Route} from 'components';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';

export default () => (
  <Switch>
    <Route
      path="/user/profile"
      component={Profile}
    />

    <Route
      path="/user/login"
      component={Login}
      notRequireAuth
      requireAuth={false}
    />

    <Route
      path="/user/register"
      component={Register}
      notRequireAuth
      requireAuth={false}
    />
  </Switch>
);
