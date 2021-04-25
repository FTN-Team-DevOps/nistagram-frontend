import { combineReducers } from 'redux';

import * as types from './resource.types';

import { userReducer } from './user/user.reducer';

export const resourceReducer = combineReducers<types.IResourcesState>({
  user: userReducer,
});
