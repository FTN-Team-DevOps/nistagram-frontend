import { call, takeLatest } from 'redux-saga/effects';

import * as types from './home.types';
import * as constants from './home.constants';
import * as services from './home.saga-services';

function* invokeSetupHomePage(action: types.ISetupHomePage) {
  yield call(services.setupHomePage);
}

export function* watchHomePageSaga() {
  yield takeLatest(constants.SETUP_HOME_PAGE, invokeSetupHomePage);
}
