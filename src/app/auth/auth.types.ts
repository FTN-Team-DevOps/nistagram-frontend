import { ISelector } from '../common/common.types';
import { IUser, IUserCreate, IUserCredentials } from '../resource/user/user.types';

import * as constants from './auth.constants';

export interface IRegister {
  type: typeof constants.REGISTER;
  payload: {
    data: IUserCreate;
    picture: File | null;
  };
}

export interface ILogin {
  type: typeof constants.LOGIN;
  payload: IUserCredentials;
}

export interface ILogout {
  type: typeof constants.LOGOUT;
}

export interface IStoreLoggedUser {
  type: typeof constants.STORE_LOGGED_USER;
  payload: IUser['id'];
}

export interface IClearLoggedUser {
  type: typeof constants.CLEAR_LOGGED_USER;
}

export interface IStoreAccessToken {
  type: typeof constants.STORE_ACCESS_TOKEN;
  payload: string;
}

export interface IClearAccessToken {
  type: typeof constants.CLEAR_ACCESS_TOKEN;
}

export type IAuthAction = IStoreLoggedUser | IClearLoggedUser | IStoreAccessToken | IClearAccessToken;

export interface IAuthState {
  loggedUser: IUser['id'] | null;
  accessToken: string | null;
}

export interface ISelectLoggedUser extends ISelector<IUser['id'] | null> {}
export interface ISelectAccessToken extends ISelector<string | null> {}

export interface IAuthSelectors {
  selectLoggedUser: ISelectLoggedUser;
  selectAccessToken: ISelectAccessToken;
}
