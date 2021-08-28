import { call, put } from 'redux-saga/effects';
import { apiRequest } from '../api/api.saga-services';
import { IUserCreate, IUserCredentials, IUserWithToken } from '../resource/user/user.types';

import * as api from '../api/request-config/auth.api';
import * as actions from './auth.actions';

import * as userService from '../resource/user/user.saga-service';

import { storeUser } from '../resource/user/user.actions';

function* logUserIn(userWithToken: IUserWithToken) {
  // order matters!
  yield put(actions.storeLoggedUser(userWithToken.user._id));
  yield put(actions.storeAccessToken(userWithToken.token));
  yield put(actions.storeRole(userWithToken.role));

  yield put(storeUser(userWithToken.user));
}

function* cacheLoggedUser(userWithToken: IUserWithToken) {
  yield call([localStorage, localStorage.setItem], 'logged_user', JSON.stringify(userWithToken.user));
  yield call([localStorage, localStorage.setItem], 'token', JSON.stringify(userWithToken.token));
  yield call([localStorage, localStorage.setItem], 'role', JSON.stringify(userWithToken.role));
}

export function* loadCachedUser() {
  const user = (yield call([localStorage, localStorage.getItem], 'logged_user')) as string | undefined;
  const token = (yield call([localStorage, localStorage.getItem], 'token')) as string | undefined;
  const role = (yield call([localStorage, localStorage.getItem], 'role')) as string | undefined;

  if (!user) {
    return;
  }

  try {
    yield call(logUserIn, {
      user: JSON.parse(user),
      token: token ? JSON.parse(token) : undefined,
      role: role ? JSON.parse(role) : undefined,
    } as IUserWithToken);
  } catch (e) {
    console.error(e);
  }
}

export function* register(userInfo: IUserCreate) {
  //, picture: File | null
  // const pictureUrl = yield call(fileService.saveImage, {file: picture, directory: 'users'});
  // yield call(userService.createUser, { ...userInfo, picture: pictureUrl });
  yield call(userService.createUser, userInfo);
}

export function* logIn(credentials: IUserCredentials) {
  const userWithToken = (yield call(apiRequest, api.loginApi(credentials))) as IUserWithToken;

  if (!userWithToken) {
    return;
  }
  yield call(logUserIn, userWithToken);
  yield call(cacheLoggedUser, userWithToken);
}

export function* logOut() {
  yield put(actions.clearLoggedUser());
  yield put(actions.clearAccessToken());
  yield put(actions.clearRole());

  yield call([localStorage, localStorage.removeItem], 'logged_user');
  yield call([localStorage, localStorage.removeItem], 'token');
  yield call([localStorage, localStorage.removeItem], 'role');
}
