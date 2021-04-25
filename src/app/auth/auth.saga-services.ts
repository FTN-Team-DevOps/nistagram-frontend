import { call, put } from 'redux-saga/effects';
import { apiRequest } from '../api/api.saga-services';
import { IUserCreate, IUserCredentials, IUserWithToken } from '../resource/user/user.types';

import * as api from '../api/request-config/auth.api';
import * as actions from './auth.actions';

import * as userService from '../resource/user/user.saga-service';

import { storeUser } from '../resource/user/user.actions';

import { omit } from 'lodash';

function* logUserIn(user: IUserWithToken) {
  // order matters!
  yield put(actions.storeLoggedUser(user.id));
  yield put(actions.storeAccessToken(user.token));

  yield put(storeUser(omit(user, 'token')));
}

function* cacheLoggedUser(user: IUserWithToken) {
  yield call([localStorage, localStorage.setItem], 'logged_user', JSON.stringify(user));
}

export function* loadCachedUser() {
  const user = (yield call([localStorage, localStorage.getItem], 'logged_user')) as string | undefined;

  if (!user) {
    return;
  }

  try {
    yield call(logUserIn, JSON.parse(user));
  } catch (e) {
    console.error(e);
  }
}

export function* register(userInfo: IUserCreate, picture: File | null) {
  // const pictureUrl = yield call(fileService.saveImage, {file: picture, directory: 'users'});
  // yield call(userService.createUser, { ...userInfo, picture: pictureUrl });
  yield call(userService.createUser, userInfo);
}

export function* logIn(credentials: IUserCredentials) {
  const user = (yield call(apiRequest, api.loginApi(credentials))) as IUserWithToken;

  if (!user) {
    return;
  }

  yield call(logUserIn, user);
  yield call(cacheLoggedUser, user);
}

export function* logOut() {
  yield put(actions.clearLoggedUser());
  yield put(actions.clearAccessToken());

  yield call([localStorage, localStorage.removeItem], 'logged_user');
}
