import { call, put } from 'redux-saga/effects';

import * as types from './dialog.types';
import * as actions from './dialog.actions';

export function* openDialog(dialogKey: types.IDialogKey, props: types.IDialogInstanceProps | null) {
  yield put(actions.storeIsDialogOpen(dialogKey));
  yield put(actions.storeDialogProps(dialogKey, props));
}

export function* closeDialog(dialogKey: types.IDialogKey) {
  yield put(actions.clearIsDialogOpen(dialogKey));

  yield call(() => new Promise((res) => setTimeout(res, 200)));
  yield put(actions.clearDialogProps(dialogKey));
}

export function* setDialogCloseable(dialogKey: types.IDialogKey) {
  yield put(actions.storeIsDialogCloseable(dialogKey));
}

export function* setDialogNotCloseable(dialogKey: types.IDialogKey) {
  yield put(actions.clearIsDialogCloseable(dialogKey));
}
