import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { IAppState, IAppAction } from './app.types';

import { connectRouter, LocationChangeAction } from 'connected-react-router';
import { resourceReducer } from './resource/resource.reducer';
import { authReducer } from './auth/auth.reducer';
import { apiReducer } from './api/api.reducer';
import { pageReducer } from './page/page.reducer';
import { dialogReducer } from './dialog/dialog.reducer';

export const createAppReducer = (history: History): Reducer<IAppState, IAppAction | LocationChangeAction> =>
  combineReducers({
    api: apiReducer,
    auth: authReducer,
    resource: resourceReducer,
    page: pageReducer,
    dialog: dialogReducer,
    router: connectRouter(history),
  });
