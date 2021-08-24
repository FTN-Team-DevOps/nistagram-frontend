import { call, put, select } from 'redux-saga/effects';
import { IUser, IUserUpdate } from '../../resource/user/user.types';

import * as userResourceService from '../../resource/user/user.saga-service';
import * as publicationResourceService from '../../resource/publication/publication.saga-service';

import * as actions from './profile.actions';

import { selectWithParams } from '../../../utils/selector.utils';
import { userSelectors } from '../../resource/user/user.selectors';
import { IPublication, IPublicationCreate } from '../../resource/publication/publication.types';
import { profilePageSelectors } from './profile.selectors';

export function* setupProfilePage(userId: IUser['_id']) {
  const searchedUsers = (yield call(userResourceService.searchUsers, { _id: userId })) as IUser['_id'];

  yield put(
    searchedUsers && searchedUsers[0] ? actions.storeSearchedUser(searchedUsers[0]) : actions.clearSearchedUser(),
  );

  // search publications with userId
  // search actions for favorite publications
}

export function* updateUser(userInfo: IUserUpdate, picture: File | null) {
  const oldUser = (yield selectWithParams(userSelectors.selectResourceById, userInfo._id)) as IUser;
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

export function* deleteUser(userId: IUser['_id']) {
  yield call(userResourceService.deleteUser, userId);
  yield put(actions.clearSearchedUser());
}

export function* createPublication(data: IPublicationCreate) {
  const newPublicationId = (yield call(publicationResourceService.createPublication, data)) as
    | IPublication['_id']
    | null;
  if (!newPublicationId) {
    return;
  }
  const publicationIds = (yield select(profilePageSelectors.selectSearchedPublications)) as IPublication['_id'][];
  yield put(actions.storeSearchedPublications([...publicationIds, newPublicationId]));
}
