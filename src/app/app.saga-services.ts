import { call } from 'redux-saga/effects';

import { loadCachedUser } from './auth/auth.saga-services';

export function* initialize() {
  yield call(loadCachedUser);
}
