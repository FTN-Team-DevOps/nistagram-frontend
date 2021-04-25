import { IUser, IUserCreate, IUserCredentials } from '../resource/user/user.types';

import * as types from './auth.types';
import * as constants from './auth.constants';

export const register = (userInfo: IUserCreate, picture: File | null): types.IRegister => ({
  type: constants.REGISTER,
  payload: {
    data: userInfo,
    picture,
  },
});

export const logIn = (credentials: IUserCredentials): types.ILogin => ({
  type: constants.LOGIN,
  payload: credentials,
});

export const logOut = (): types.ILogout => ({
  type: constants.LOGOUT,
});

export const storeLoggedUser = (loggedUser: IUser['id']): types.IStoreLoggedUser => ({
  type: constants.STORE_LOGGED_USER,
  payload: loggedUser,
});
export const clearLoggedUser = (): types.IClearLoggedUser => ({
  type: constants.CLEAR_LOGGED_USER,
});

export const storeAccessToken = (accessToken: string): types.IStoreAccessToken => ({
  type: constants.STORE_ACCESS_TOKEN,
  payload: accessToken,
});
export const clearAccessToken = (): types.IClearAccessToken => ({
  type: constants.CLEAR_ACCESS_TOKEN,
});
