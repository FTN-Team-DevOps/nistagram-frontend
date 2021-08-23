import { combineReducers, Reducer } from 'redux';

import * as types from './profile.types';
import * as constants from './profile.constants';
import { isActionOfType } from '../../../utils/action.utils';

const initialState: types.IProfilePageState = {
  searchedUser: null,
  searchedPublications: [],
};

const searchedUserReducer: Reducer<
  types.IProfilePageState['searchedUser'],
  types.IStoreSearchedUser | types.IClearSearchedUser
> = (state = initialState.searchedUser, action) => {
  if (isActionOfType<types.IStoreSearchedUser>(action, constants.STORE_SEARCHED_USER)) {
    return action.payload;
  } else if (isActionOfType<types.IClearSearchedUser>(action, constants.CLEAR_SEARCHED_USER)) {
    return initialState.searchedUser;
  }
  return state;
};

const searchedPublicationsReducer: Reducer<
  types.IProfilePageState['searchedPublications'],
  types.IStoreSearchedPublications | types.IClearSearchedPublications
> = (state = initialState.searchedPublications, action) => {
  if (isActionOfType<types.IStoreSearchedPublications>(action, constants.STORE_SEARCHED_PUBLICATIONS)) {
    return action.payload;
  } else if (isActionOfType<types.IClearSearchedPublications>(action, constants.CLEAR_SEARCHED_PUBLICATIONS)) {
    return initialState.searchedPublications;
  }
  return state;
};

export const profilePageReducer: Reducer<types.IProfilePageState, types.IProfilePageAction> = combineReducers({
  searchedUser: searchedUserReducer,
  searchedPublications: searchedPublicationsReducer,
});
