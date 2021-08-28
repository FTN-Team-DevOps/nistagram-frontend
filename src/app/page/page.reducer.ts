import { combineReducers, Reducer } from 'redux';
import { homePageReducer } from './home/home.reducer';

import * as types from './page.types';
import { profilePageReducer } from './profile/profile.reducer';

export const pageReducer: Reducer<types.IPageState, types.IPageAction> = combineReducers({
  profile: profilePageReducer,
  home: homePageReducer,
});
