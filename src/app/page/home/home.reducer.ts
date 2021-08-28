import { combineReducers, Reducer } from 'redux';

import * as types from './home.types';
import * as constants from './home.constants';
import { isActionOfType } from '../../../utils/action.utils';

const initialState: types.IHomePageState = {
  searchedPublications: [],
};

const searchedPublicationsReducer: Reducer<
  types.IHomePageState['searchedPublications'],
  types.IStoreSearchedPublications | types.IClearSearchedPublications
> = (state = initialState.searchedPublications, action) => {
  if (isActionOfType<types.IStoreSearchedPublications>(action, constants.STORE_SEARCHED_PUBLICATIONS)) {
    return action.payload;
  } else if (isActionOfType<types.IClearSearchedPublications>(action, constants.CLEAR_SEARCHED_PUBLICATIONS)) {
    return initialState.searchedPublications;
  }
  return state;
};

export const homePageReducer: Reducer<types.IHomePageState, types.IHomePageAction> = combineReducers({
  searchedPublications: searchedPublicationsReducer,
});
