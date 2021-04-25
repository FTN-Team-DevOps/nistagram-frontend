import * as types from './profile.types';
import * as constants from './profile.constants';
import { IUser, IUserUpdate } from '../../resource/user/user.types';

export const setupProfilePage = (userId: IUser['id']): types.ISetupProfilePage => ({
  type: constants.SETUP_PROFILE_PAGE,
  payload: userId,
});

export const updateUser = (userInfo: IUserUpdate, picture: File | null): types.IUpdateUser => ({
  type: constants.UPDATE_USER,
  payload: {
    data: userInfo,
    picture,
  },
});

export const deleteUser = (userId: IUser['id']): types.IDeleteUser => ({
  type: constants.DELETE_USER,
  payload: userId,
});

export const storeSearchedUser = (searchedUser: IUser['id']): types.IStoreSearchedUser => ({
  type: constants.STORE_SEARCHED_USER,
  payload: searchedUser,
});

export const clearSearchedUser = (): types.IClearSearchedUser => ({
  type: constants.CLEAR_SEARCHED_USER,
});
