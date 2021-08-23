import * as types from './profile.types';
import * as constants from './profile.constants';
import { IUser, IUserUpdate } from '../../resource/user/user.types';
import { IPublication, IPublicationCreate } from '../../resource/publication/publication.types';

export const setupProfilePage = (userId: IUser['_id']): types.ISetupProfilePage => ({
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

export const deleteUser = (userId: IUser['_id']): types.IDeleteUser => ({
  type: constants.DELETE_USER,
  payload: userId,
});

export const storeSearchedUser = (searchedUser: IUser['_id']): types.IStoreSearchedUser => ({
  type: constants.STORE_SEARCHED_USER,
  payload: searchedUser,
});

export const clearSearchedUser = (): types.IClearSearchedUser => ({
  type: constants.CLEAR_SEARCHED_USER,
});

export const createPublication = (data: IPublicationCreate): types.ICreatePublication => ({
  type: constants.CREATE_PUBLICATION,
  payload: data,
});

export const storeSearchedPublications = (
  searchedPublications: IPublication['_id'][],
): types.IStoreSearchedPublications => ({
  type: constants.STORE_SEARCHED_PUBLICATIONS,
  payload: searchedPublications,
});

export const clearSearchedPublications = (): types.IClearSearchedPublications => ({
  type: constants.CLEAR_SEARCHED_PUBLICATIONS,
});
