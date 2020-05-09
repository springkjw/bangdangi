import React from 'react';
import {BrowserRouter, Switch, useRouteMatch} from 'react-router-dom';

import {Route, SideBar, Footer} from 'components';
import Home from './Home';
import User from './User';
import Room from './Room';

const Router = () => {
  const match = useRouteMatch(
    ['/user/login', '/user/register']
  );

  return (
    <div className="app-container">
      {!match ? (
        <SideBar />
      ) : null}

      <Switch>
        <Route exact path="/" component={Home} />
        <User />
        <Room />
      </Switch>

      {match ? (
        <Footer />
      ) : null}
    </div>
  );
};

export default () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
