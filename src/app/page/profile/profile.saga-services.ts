import { call, put } from 'redux-saga/effects';
import { IUser, IUserUpdate } from '../../resource/user/user.types';

import * as userResourceService from '../../resource/user/user.saga-service';
import * as actions from './profile.actions';

import { selectWithParams } from '../../../utils/selector.utils';
import { userSelectors } from '../../resource/user/user.selectors';

export function* setupProfilePage(userId: IUser['id']) {
  const searchedUsers = (yield call(userResourceService.searchUsers, { id: userId })) as IUser['id'];

  yield put(
    searchedUsers && searchedUsers[0] ? actions.storeSearchedUser(searchedUsers[0]) : actions.clearSearchedUser(),
  );

  // search publications with userId
  // search actions for favorite publications
}

export function* updateUser(userInfo: IUserUpdate, picture: File | null) {
  const oldUser = (yield selectWithParams(userSelectors.selectResourceById, userInfo.id)) as IUser;
  const pictureUrl = oldUser.picture;
  // if (picture) {
  //   pictureUrl = yield call(fileService.updateImage, {
  //     file: picture,
  //     directory: 'users',
  //     oldUrl: oldUser.picture,
  //   });
  // }

  yield call(userResourceService.updateUser, { ...userInfo, picture: pictureUrl });
}

export function* deleteUser(userId: IUser['id']) {
  yield call(userResourceService.deleteUser, userId);
  yield put(actions.clearSearchedUser());
}
