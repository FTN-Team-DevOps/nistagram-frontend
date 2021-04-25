import * as types from './dialog.types';
import * as constants from './dialog.constants';

export const openDialog = <TDialogKey extends types.IDialogKey>(
  dialogKey: TDialogKey,
  props: types.IDialogInstanceProps<TDialogKey> | null = null,
): types.IOpenDialog<TDialogKey> => ({
  type: constants.OPEN_DIALOG,
  payload: {
    key: dialogKey,
    props,
  },
});

export const closeDialog = (dialogKey: types.IDialogKey): types.ICloseDialog => ({
  type: constants.CLOSE_DIALOG,
  payload: dialogKey,
});

export const setDialogCloseable = (dialogKey: types.IDialogKey): types.ISetDialogCloseable => ({
  type: constants.SET_DIALOG_CLOSEABLE,
  payload: dialogKey,
});

export const setDialogNotCloseable = (dialogKey: types.IDialogKey): types.ISetDialogNotCloseable => ({
  type: constants.SET_DIALOG_NOT_CLOSEABLE,
  payload: dialogKey,
});

export const storeIsDialogOpen = (dialogKey: types.IDialogKey): types.IStoreIsDialogOpen => ({
  type: constants.STORE_IS_DIALOG_OPEN,
  payload: dialogKey,
});

export const clearIsDialogOpen = (dialogKey: types.IDialogKey): types.IClearIsDialogOpen => ({
  type: constants.CLEAR_IS_DIALOG_OPEN,
  payload: dialogKey,
});

export const storeIsDialogCloseable = (dialogKey: types.IDialogKey): types.IStoreIsDialogCloseable => ({
  type: constants.STORE_IS_DIALOG_CLOSEABLE,
  payload: dialogKey,
});

export const clearIsDialogCloseable = (dialogKey: types.IDialogKey): types.IClearIsDialogCloseable => ({
  type: constants.CLEAR_IS_DIALOG_CLOSEABLE,
  payload: dialogKey,
});

export const storeDialogProps = (
  dialogKey: types.IDialogKey,
  props: types.IDialogInstanceProps | null = null,
): types.IStoreDialogProps => ({
  type: constants.STORE_DIALOG_PROPS,
  payload: {
    key: dialogKey,
    props,
  },
});

export const clearDialogProps = (dialogKey: types.IDialogKey): types.IClearDialogProps => ({
  type: constants.CLEAR_DIALOG_PROPS,
  payload: dialogKey,
});
