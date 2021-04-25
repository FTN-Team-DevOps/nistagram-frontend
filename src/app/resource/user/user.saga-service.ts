import { all, call, put } from '@redux-saga/core/effects';
import { apiRequest } from '../../api/api.saga-services';

import * as api from '../../api/request-config/user.api';

import * as actions from './user.actions';

import { IUser, IUserCreate, IUserSearchParams, IUserUpdate } from './user.types';

export function* storeUser(user: IUser) {
  yield put(actions.storeUser(user));
  return user.id;
}

export function* clearUser(userId: IUser['id']) {
  yield put(actions.clearUser(userId));
}

export function* searchUsers(searchParams?: IUserSearchParams) {
  const users = (yield call(apiRequest, api.searchUsersApi(searchParams))) as IUser[];

  if (!users) {
    return;
  }

  const userIds = (yield all(users.map((user) => call(storeUser, user)))) as IUser['id'][];
  return userIds;
}

export function* createUser(userInfo: IUserCreate) {
  const user = (yield call(apiRequest, api.createUserApi(userInfo))) as IUser;

  if (!user) {
    return;
  }

  const userId = (yield call(storeUser, user)) as IUser['id'];
  return userId;
}

export function* updateUser(userInfo: IUserUpdate) {
  const user = (yield call(apiRequest, api.updateUserApi(userInfo))) as IUser;

  if (!user) {
    return;
  }

  const userId = (yield call(storeUser, user)) as IUser['id'];
  return userId;
}

export function* deleteUser(userId: IUser['id']) {
  yield call(apiRequest, api.deleteUserApi(userId));
  yield call(clearUser, userId);
  return userId;
}
