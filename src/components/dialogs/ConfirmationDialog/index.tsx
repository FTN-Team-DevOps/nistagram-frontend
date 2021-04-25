import React, { useCallback } from 'react';
import { IConfirmationDialogProps } from './types';
import { ConnectedDialog } from '../ConnectedDialog';
import { Button, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { closeDialog } from '../../../app/dialog/dialog.actions';
import { useSelectWithParams } from '../../../utils/selector.utils';
import { dialogSelectors } from '../../../app/dialog/dialog.selectors';

export const ConfirmationDialog = () => {
  const dispatch = useDispatch();

  const props = useSelectWithParams(dialogSelectors.selectDialogProps, 'confirmation') as IConfirmationDialogProps;

  const handleDeny = useCallback(() => {
    if (props?.onDeny) {
      props.onDeny();
    }
    dispatch(closeDialog('confirmation'));
  }, [dispatch, props]);

  const handleConfirm = useCallback(() => {
    if (props?.onConfirm) {
      props.onConfirm();
    }
    dispatch(closeDialog('confirmation'));
  }, [dispatch, props]);

  return (
    <ConnectedDialog dialogKey="confirmation" maxWidth="sm" fullWidth>
      <DialogTitle>{props?.title || 'Are you sure?'}</DialogTitle>
      <DialogContent>
        {props?.message || 'Please confirm your action, but be noted that it can not be reverted. Are you sure?'}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeny}>No</Button>
        <Button color="primary" variant="contained" onClick={handleConfirm}>
          Yes
        </Button>
      </DialogActions>
    </ConnectedDialog>
  );
};
