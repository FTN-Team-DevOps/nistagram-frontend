import { all, fork } from 'redux-saga/effects';
import { watchProfilePageSaga } from './profile/profile.saga-watchers';

export function* watchPageSaga() {
  yield all([watchProfilePageSaga].map(fork));
}
