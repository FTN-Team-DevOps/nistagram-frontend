import { ISelector } from '../../common/common.types';
import { IUser, IUserUpdate } from '../../resource/user/user.types';

import * as constants from './profile.constants';

// Current user id or user id from path
export interface ISetupProfilePage {
  type: typeof constants.SETUP_PROFILE_PAGE;
  payload: IUser['id'];
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
  payload: IUser['id'];
}

export interface IStoreSearchedUser {
  type: typeof constants.STORE_SEARCHED_USER;
  payload: IUser['id'];
}

export interface IClearSearchedUser {
  type: typeof constants.CLEAR_SEARCHED_USER;
}

export type IProfilePageAction = IStoreSearchedUser | IClearSearchedUser;
// | IStoreSearchedActivities
// | ICLearSearchedActivities
// | IStoreSearchedPublications
// | IClearSearchedPublications;

export interface IProfilePageState {
  searchedUser: IUser['id'] | null;
  // searchedActivities: IActivity['id'][];
  // searchedPublications: IPublication['id'][];
}

export interface ISelectSearchedUser extends ISelector<IUser['id'] | null> {}
// export interface ISelectSearchedPublications extends ISelector<IPublication['id'][]> {}
// export interface ISelectSearchedActivities extends ISelector<IActivity['id'][]> {}

export interface IProfilePageSelectors {
  selectSearchedUser: ISelectSearchedUser;
  // selectSearchedPublications: ISelectSearchedPublications;
  // selectSearchedActivities: ISelectSearchedActivities;
}
