import { Reducer } from 'redux';

import * as types from './dialog.types';
import * as constants from './dialog.constants';

const closeableState: types.IDialogInstanceState = {
  isOpen: false,
  isCloseable: true,
  props: null,
};
// const nonCloseableState: types.IDialogInstanceState = {
//   isOpen: false,
//   isCloseable: false,
//   props: null,
// };

const initialState: types.IDialogState = {
  confirmation: closeableState,
  publicationDialog: closeableState,
  publicationViewDialog: closeableState,
};

// exception to the rule, because of dynamic keys on state, it was easier to bundle everything into one reducer
// in general don't do this, create reducers per property
export const dialogReducer: Reducer<types.IDialogState, types.IDialogAction> = (state = initialState, action) => {
  if (action.type === constants.STORE_IS_DIALOG_OPEN) {
    const key = (action as types.IStoreIsDialogOpen).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        isOpen: true,
      },
    };
  } else if (action.type === constants.CLEAR_IS_DIALOG_OPEN) {
    const key = (action as types.IClearIsDialogOpen).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        isOpen: false,
      },
    };
  } else if (action.type === constants.STORE_IS_DIALOG_CLOSEABLE) {
    const key = (action as types.IStoreIsDialogCloseable).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        isCloseable: true,
      },
    };
  } else if (action.type === constants.CLEAR_IS_DIALOG_CLOSEABLE) {
    const key = (action as types.IClearIsDialogCloseable).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        isCloseable: false,
      },
    };
  } else if (action.type === constants.STORE_DIALOG_PROPS) {
    const key = (action as types.IStoreDialogProps).payload.key;
    const props = (action as types.IStoreDialogProps).payload.props;

    return {
      ...state,
      [key]: {
        ...state[key],
        props: props,
      },
    };
  } else if (action.type === constants.CLEAR_DIALOG_PROPS) {
    const key = (action as types.IClearDialogProps).payload;

    return {
      ...state,
      [key]: {
        ...state[key],
        props: null,
      },
    };
  }

  return state;
};
