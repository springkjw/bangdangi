import React from 'react';
import {Switch} from 'react-router-dom';

import {Route} from 'components';
import List from './List';
import Register from './Register';

export default () => (
  <Switch>
    <Route exact path="/room" component={List} />
    <Route path="/room/register" component={Register} />
  </Switch>
);
