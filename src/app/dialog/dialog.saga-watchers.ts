import { call, takeLatest } from 'redux-saga/effects';

import * as types from './dialog.types';
import * as constants from './dialog.constants';
import * as services from './dialog.saga-services';

function* invokeOpenDialog(action: types.IOpenDialog) {
  yield call(services.openDialog, action.payload.key, action.payload.props);
}

function* invokeCloseDialog(action: types.ICloseDialog) {
  yield call(services.closeDialog, action.payload);
}

function* invokeSetDialogCloseable(action: types.ISetDialogCloseable) {
  yield call(services.setDialogCloseable, action.payload);
}

function* invokeSetDialogNotCloseable(action: types.ISetDialogNotCloseable) {
  yield call(services.setDialogNotCloseable, action.payload);
}

export function* watchDialogSaga() {
  yield takeLatest(constants.OPEN_DIALOG, invokeOpenDialog);
  yield takeLatest(constants.CLOSE_DIALOG, invokeCloseDialog);
  yield takeLatest(constants.SET_DIALOG_CLOSEABLE, invokeSetDialogCloseable);
  yield takeLatest(constants.SET_DIALOG_NOT_CLOSEABLE, invokeSetDialogNotCloseable);
}
