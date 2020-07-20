import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard/:id" component={Dashboard} />
    <Route path="/favorites/:id" component={Favorites} />
  </Switch>
);

export default Routes;
