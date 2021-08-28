import React from 'react';
import { useDispatch } from 'react-redux';
import { ConnectedDialog } from '../ConnectedDialog';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { useSelectWithParams } from '../../../utils/selector.utils';
import { dialogSelectors } from '../../../app/dialog/dialog.selectors';
import { IPublicationViewDialogProps } from './types';
import { PublicationView } from '../../pages/common/PublicationView';
import { closeDialog } from '../../../app/dialog/dialog.actions';

export const PublicationViewDialog = () => {
  const dispatch = useDispatch();
  const props = useSelectWithParams(
    dialogSelectors.selectDialogProps,
    'publicationViewDialog',
  ) as IPublicationViewDialogProps;

  const handleClose = () => {
    dispatch(closeDialog('publicationViewDialog'));
  };

  return (
    <ConnectedDialog dialogKey="publicationViewDialog" maxWidth="sm" fullWidth>
      <DialogContent>
        <PublicationView {...props} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </ConnectedDialog>
  );
};
