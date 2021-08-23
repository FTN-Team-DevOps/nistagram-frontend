import { ISelector } from '../../common/common.types';
import { IPublication, IPublicationCreate } from '../../resource/publication/publication.types';
import { IUser, IUserUpdate } from '../../resource/user/user.types';

import * as constants from './profile.constants';

// Current user _id or user _id from path
export interface ISetupProfilePage {
  type: typeof constants.SETUP_PROFILE_PAGE;
  payload: IUser['_id'];
}

// Update user from dialog
export interface IUpdateUser {
  type: typeof constants.UPDATE_USER;
  payload: {
    data: IUserUpdate;
    picture: File | null;
  };
}

export interface IDeleteUser {
  type: typeof constants.DELETE_USER;
  payload: IUser['_id'];
}

export interface IStoreSearchedUser {
  type: typeof constants.STORE_SEARCHED_USER;
  payload: IUser['_id'];
}

export interface IClearSearchedUser {
  type: typeof constants.CLEAR_SEARCHED_USER;
}

export interface ICreatePublication {
  type: typeof constants.CREATE_PUBLICATION;
  payload: IPublicationCreate;
}

export interface IStoreSearchedPublications {
  type: typeof constants.STORE_SEARCHED_PUBLICATIONS;
  payload: IPublication['_id'][];
}

export interface IClearSearchedPublications {
  type: typeof constants.CLEAR_SEARCHED_PUBLICATIONS;
}

export type IProfilePageAction =
  | IStoreSearchedUser
  | IClearSearchedUser
  | IStoreSearchedPublications
  | IClearSearchedPublications;
// | IStoreSearchedActivities
// | ICLearSearchedActivities

export interface IProfilePageState {
  searchedUser: IUser['_id'] | null;
  searchedPublications: IPublication['_id'][];
  // searchedActivities: IActivity['_id'][];
}

export interface ISelectSearchedUser extends ISelector<IUser['_id'] | null> {}
export interface ISelectSearchedPublications extends ISelector<IPublication['_id'][]> {}
// export interface ISelectSearchedActivities extends ISelector<IActivity['_id'][]> {}

export interface IProfilePageSelectors {
  selectSearchedUser: ISelectSearchedUser;
  selectSearchedPublications: ISelectSearchedPublications;
  // selectSearchedActivities: ISelectSearchedActivities;
}
