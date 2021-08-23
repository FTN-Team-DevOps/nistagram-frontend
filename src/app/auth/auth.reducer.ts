import * as types from './auth.types';
import * as constants from './auth.constants';
import { combineReducers, Reducer } from 'redux';
import { isActionOfType } from '../../utils/action.utils';

const initialState: types.IAuthState = {
  loggedUser: null,
  accessToken: null,
  role: null,
};

const loggedUserReducer: Reducer<types.IAuthState['loggedUser'], types.IStoreLoggedUser | types.IClearLoggedUser> = (
  state = initialState.loggedUser,
  action,
) => {
  if (isActionOfType<types.IStoreLoggedUser>(action, constants.STORE_LOGGED_USER)) {
    return action.payload;
  } else if (isActionOfType<types.IClearLoggedUser>(action, constants.CLEAR_LOGGED_USER)) {
    return null;
  }

  return state;
};

const accessTokenReducer: Reducer<
  types.IAuthState['accessToken'],
  types.IStoreAccessToken | types.IClearAccessToken
> = (state = initialState.accessToken, action) => {
  if (isActionOfType<types.IStoreAccessToken>(action, constants.STORE_ACCESS_TOKEN)) {
    return action.payload;
  } else if (isActionOfType<types.IClearAccessToken>(action, constants.CLEAR_ACCESS_TOKEN)) {
    return null;
  }

  return state;
};

const roleReducer: Reducer<types.IAuthState['role'], types.IStoreRole | types.IClearRole> = (
  state = initialState.role,
  action,
) => {
  if (isActionOfType<types.IStoreRole>(action, constants.STORE_ACCESS_TOKEN)) {
    return action.payload;
  } else if (isActionOfType<types.IClearRole>(action, constants.CLEAR_ACCESS_TOKEN)) {
    return null;
  }

  return state;
};

export const authReducer: Reducer<types.IAuthState, types.IAuthAction> = combineReducers({
  loggedUser: loggedUserReducer,
  accessToken: accessTokenReducer,
  role: roleReducer,
});
