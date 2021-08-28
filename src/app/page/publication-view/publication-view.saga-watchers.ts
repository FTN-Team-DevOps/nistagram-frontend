import { call, takeLatest } from 'redux-saga/effects';

import * as types from './publication-view.types';
import * as constants from './publication-view.constants';
import * as services from './publication-view.saga-services';

function* invokeSetupPublicationView(action: types.ISetupPublicationView) {
  yield call(services.setupPublicationView, action.payload);
}

function* invokeSaveActivity(action: types.ISaveActivity) {
  yield call(services.saveActivity, action.payload.data, action.payload.id);
}

export function* watchPublicationView() {
  yield takeLatest(constants.SETUP_PUBLICATION_VIEW, invokeSetupPublicationView);
  yield takeLatest(constants.SAVE_ACTIVITY, invokeSaveActivity);
}
