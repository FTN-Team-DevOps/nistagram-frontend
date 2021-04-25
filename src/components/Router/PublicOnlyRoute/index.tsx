import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { authSelectors } from '../../../app/auth/auth.selectors';

export const PublicOnlyRoute: FunctionComponent<RouteProps> = (props) => {
  const accessToken = useSelector(authSelectors.selectAccessToken);

  return accessToken ? <Redirect to="/" /> : <Route {...props} />;
};
