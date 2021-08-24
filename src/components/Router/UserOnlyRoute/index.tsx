import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { authSelectors } from '../../../app/auth/auth.selectors';

export const UserOnlyRoute: FunctionComponent<RouteProps> = (props) => {
  const loggedUser = useSelector(authSelectors.selectLoggedUser);
  const role = useSelector(authSelectors.selectRole);

  return !loggedUser || role !== 'user' ? <Redirect to={'/'} /> : <Route {...props} />;
};
