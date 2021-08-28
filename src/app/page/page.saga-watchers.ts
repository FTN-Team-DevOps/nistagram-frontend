import { all, fork } from 'redux-saga/effects';
import { watchHomePageSaga } from './home/home.saga-watchers';
import { watchProfilePageSaga } from './profile/profile.saga-watchers';
import { watchPublicationView } from './publication-view/publication-view.saga-watchers';

export function* watchPageSaga() {
  yield all([watchHomePageSaga, watchProfilePageSaga, watchPublicationView].map(fork));
}
