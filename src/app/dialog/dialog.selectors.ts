import * as types from './dialog.types';

export const dialogSelectors: types.IDialogSelectors = {
  selectIsDialogOpen: (state, dialogKey) => state.dialog[dialogKey].isOpen,
  selectIsDialogCloseable: (state, dialogKey) => state.dialog[dialogKey].isCloseable,
  selectDialogProps: (state, dialogKey) => state.dialog[dialogKey].props,
};
