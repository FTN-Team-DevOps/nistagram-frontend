import { fork, all, call } from 'redux-saga/effects';
import { initialize } from './app.saga-services';

import { watchAuthSaga } from './auth/auth.saga-watchers';
import { watchDialogSaga } from './dialog/dialog.saga-watchers';
import { watchPageSaga } from './page/page.saga-watchers';

export function* appSagaWatcher() {
  yield all([watchAuthSaga, watchPageSaga, watchDialogSaga].map(fork));

  yield call(initialize);
}
