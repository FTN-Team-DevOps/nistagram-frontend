import { ISelector } from '../common/common.types';
import { IUser, IUserCreate, IUserCredentials } from '../resource/user/user.types';

import * as constants from './auth.constants';

// export interface IRegister {
//   type: typeof constants.REGISTER;
//   payload: {
//     data: IUserCreate;
//     picture: File | null;
//   };
// }

export interface IRegister {
  type: typeof constants.REGISTER;
  payload: IUserCreate;
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
  payload: IUser['_id'];
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

export interface IStoreRole {
  type: typeof constants.STORE_ROLE;
  payload: string;
}

export interface IClearRole {
  type: typeof constants.CLEAR_ROLE;
}

export type IAuthAction =
  | IStoreLoggedUser
  | IClearLoggedUser
  | IStoreAccessToken
  | IClearAccessToken
  | IStoreRole
  | IClearRole;

export interface IAuthState {
  loggedUser: IUser['_id'] | null;
  accessToken: string | null;
  role: string | null;
}

export interface ISelectLoggedUser extends ISelector<IUser['_id'] | null> {}
export interface ISelectAccessToken extends ISelector<string | null> {}
export interface ISelectRole extends ISelector<string | null> {}

export interface IAuthSelectors {
  selectLoggedUser: ISelectLoggedUser;
  selectAccessToken: ISelectAccessToken;
  selectRole: ISelectRole;
}
