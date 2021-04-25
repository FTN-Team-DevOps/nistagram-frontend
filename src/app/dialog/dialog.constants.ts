import { createActionConst } from '../../utils/action.utils';

const DIALOG_NAMESPACE = 'DIALOG';

export const OPEN_DIALOG = createActionConst(DIALOG_NAMESPACE, 'OPEN_DIALOG');
export const CLOSE_DIALOG = createActionConst(DIALOG_NAMESPACE, 'CLOSE_DIALOG');

export const SET_DIALOG_CLOSEABLE = createActionConst(DIALOG_NAMESPACE, 'SET_DIALOG_CLOSEABLE');
export const SET_DIALOG_NOT_CLOSEABLE = createActionConst(DIALOG_NAMESPACE, 'SET_DIALOG_NOT_CLOSEABLE');

export const STORE_IS_DIALOG_OPEN = createActionConst(DIALOG_NAMESPACE, 'STORE_IS_DIALOG_OPEN');
export const CLEAR_IS_DIALOG_OPEN = createActionConst(DIALOG_NAMESPACE, 'CLEAR_IS_DIALOG_OPEN');

export const STORE_IS_DIALOG_CLOSEABLE = createActionConst(DIALOG_NAMESPACE, 'STORE_IS_DIALOG_CLOSEABLE');
export const CLEAR_IS_DIALOG_CLOSEABLE = createActionConst(DIALOG_NAMESPACE, 'CLEAR_IS_DIALOG_CLOSEABLE');

export const STORE_DIALOG_PROPS = createActionConst(DIALOG_NAMESPACE, 'STORE_DIALOG_PROPS');
export const CLEAR_DIALOG_PROPS = createActionConst(DIALOG_NAMESPACE, 'CLEAR_DIALOG_PROPS');
