import React, { FunctionComponent } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getHistory } from '../../app/store';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { PublicOnlyRoute } from './PublicOnlyRoute';
import { ProfilePage } from '../pages/ProfilePage';

export const Router: FunctionComponent = () => (
  <ConnectedRouter history={getHistory()}>
    <Switch>
      <PublicOnlyRoute path="/login" component={LoginPage} />
      <Route path="/profile/:userId" component={ProfilePage} />
      <Route path="/" component={HomePage} />
      <Route path="">
        <Redirect to="/" />
      </Route>
    </Switch>
  </ConnectedRouter>
);
