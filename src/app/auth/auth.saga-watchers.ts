import { call, takeLatest } from 'redux-saga/effects';

import * as types from './auth.types';
import * as constants from './auth.constants';
import * as services from './auth.saga-services';

// function* invokeRegister(action: types.IRegister) {
//   yield call(services.register, action.payload.data, action.payload.picture);
// }
function* invokeRegister(action: types.IRegister) {
  yield call(services.register, action.payload);
}

function* invokeLogin(action: types.ILogin) {
  yield call(services.logIn, action.payload);
}

function* invokeLogout(action: types.ILogout) {
  yield call(services.logOut);
}

export function* watchAuthSaga() {
  yield takeLatest(constants.REGISTER, invokeRegister);
  yield takeLatest(constants.LOGIN, invokeLogin);
  yield takeLatest(constants.LOGOUT, invokeLogout);
}
