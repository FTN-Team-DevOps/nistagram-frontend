import { ISelectorWithParams } from '../common/common.types';
import * as constants from './dialog.constants';

import { IConfirmationDialogProps } from '../../components/dialogs/ConfirmationDialog/types';

export type IDialogKey = 'confirmation';

interface IDialogInstancePropsInternal {
  confirmation: IConfirmationDialogProps;
}

export type IDialogInstanceProps<TDialogKey extends IDialogKey = IDialogKey> = TDialogKey extends IDialogKey
  ? IDialogInstancePropsInternal[TDialogKey]
  : never;

export interface IDialogInstanceState<TDialogKey extends IDialogKey = IDialogKey> {
  isOpen: boolean;
  isCloseable: boolean;
  props: IDialogInstanceProps<TDialogKey> | null;
}

export interface IOpenDialog<TDialogKey extends IDialogKey = IDialogKey> {
  type: typeof constants.OPEN_DIALOG;
  payload: {
    key: TDialogKey;
    props: IDialogInstanceProps<TDialogKey> | null;
  };
}

export interface ICloseDialog {
  type: typeof constants.CLOSE_DIALOG;
  payload: IDialogKey;
}

export interface ISetDialogCloseable {
  type: typeof constants.SET_DIALOG_CLOSEABLE;
  payload: IDialogKey;
}

export interface ISetDialogNotCloseable {
  type: typeof constants.SET_DIALOG_NOT_CLOSEABLE;
  payload: IDialogKey;
}

export interface IStoreIsDialogOpen {
  type: typeof constants.STORE_IS_DIALOG_OPEN;
  payload: IDialogKey;
}

export interface IClearIsDialogOpen {
  type: typeof constants.CLEAR_IS_DIALOG_OPEN;
  payload: IDialogKey;
}

export interface IStoreIsDialogCloseable {
  type: typeof constants.STORE_IS_DIALOG_CLOSEABLE;
  payload: IDialogKey;
}

export interface IClearIsDialogCloseable {
  type: typeof constants.CLEAR_IS_DIALOG_CLOSEABLE;
  payload: IDialogKey;
}

export interface IStoreDialogProps {
  type: typeof constants.STORE_DIALOG_PROPS;
  payload: {
    key: IDialogKey;
    props: IDialogInstanceProps | null;
  };
}

export interface IClearDialogProps {
  type: typeof constants.CLEAR_DIALOG_PROPS;
  payload: IDialogKey;
}

export type IDialogAction =
  | IStoreIsDialogOpen
  | IClearIsDialogOpen
  | IStoreIsDialogCloseable
  | IClearIsDialogCloseable
  | IStoreDialogProps
  | IClearDialogProps;

export type IDialogState = {
  [key in IDialogKey]: IDialogInstanceState;
};

export interface ISelectIsDialogOpen extends ISelectorWithParams<IDialogKey, boolean> {}
export interface ISelectIsDialogCloseable extends ISelectorWithParams<IDialogKey, boolean> {}
export interface ISelectDialogProps extends ISelectorWithParams<IDialogKey, IDialogInstanceProps | null> {}

export interface IDialogSelectors {
  selectIsDialogOpen: ISelectIsDialogOpen;
  selectIsDialogCloseable: ISelectIsDialogCloseable;
  selectDialogProps: ISelectDialogProps;
}
