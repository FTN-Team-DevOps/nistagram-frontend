import { call, takeLatest } from 'redux-saga/effects';

import * as types from './profile.types';
import * as constants from './profile.constants';
import * as services from './profile.saga-services';

function* invokeSetupProfilePage(action: types.ISetupProfilePage) {
  yield call(services.setupProfilePage, action.payload);
}

function* invokeUpdateUser(action: types.IUpdateUser) {
  yield call(services.updateUser, action.payload.data, action.payload.picture);
}

function* invokeDeleteUser(action: types.IDeleteUser) {
  yield call(services.deleteUser, action.payload);
}

function* invokeCreatePublication(action: types.ICreatePublication) {
  yield call(services.createPublication, action.payload);
}

function* getUsers(action: types.IGetUsers) {
  yield call(services.getUsers);
}

export function* watchProfilePageSaga() {
  yield takeLatest(constants.SETUP_PROFILE_PAGE, invokeSetupProfilePage);
  yield takeLatest(constants.UPDATE_USER, invokeUpdateUser);
  yield takeLatest(constants.DELETE_USER, invokeDeleteUser); // turn off profile...
  yield takeLatest(constants.CREATE_PUBLICATION, invokeCreatePublication);
  yield takeLatest(constants.GET_USERS, getUsers);
}
