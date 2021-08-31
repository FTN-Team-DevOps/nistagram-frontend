import React from 'react';
import { useDispatch } from 'react-redux';
import { ConnectedDialog } from '../ConnectedDialog';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
// import { useSelectWithParams } from '../../../utils/selector.utils';
// import { dialogSelectors } from '../../../app/dialog/dialog.selectors';
// import { IUsersDialogProps } from './types';
import { closeDialog } from '../../../app/dialog/dialog.actions';
import { UsersSearch } from '../../pages/common/UsersSearch';

export const UsersDialog = () => {
  const dispatch = useDispatch();
  // const props = useSelectWithParams(dialogSelectors.selectDialogProps, 'usersDialog') as IUsersDialogProps;

  const handleClose = () => {
    dispatch(closeDialog('usersDialog'));
  };

  return (
    <ConnectedDialog dialogKey="usersDialog" maxWidth="sm" fullWidth>
      <DialogContent>
        <UsersSearch />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </ConnectedDialog>
  );
};
