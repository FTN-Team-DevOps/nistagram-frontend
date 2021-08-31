import React, { useCallback } from 'react';
import { IPublicationDialogProps } from './types';
import { ConnectedDialog } from '../ConnectedDialog';
import { Button, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { closeDialog } from '../../../app/dialog/dialog.actions';
import { useSelectWithParams } from '../../../utils/selector.utils';
import { dialogSelectors } from '../../../app/dialog/dialog.selectors';
import { PublicationForm } from '../../pages/ProfilePage/PublicationForm';
import { IPublicationCreate } from '../../../app/resource/publication/publication.types';
export const PublicationDialog = () => {
  const dispatch = useDispatch();

  const props = useSelectWithParams(dialogSelectors.selectDialogProps, 'publicationDialog') as IPublicationDialogProps;

  const handleCancel = useCallback(() => {
    if (props?.onCancel) {
      props.onCancel();
    }
    dispatch(closeDialog('publicationDialog'));
  }, [dispatch, props]);

  const handleSubmit = useCallback(
    (data: IPublicationCreate) => {
      if (props?.onSubmit) {
        props.onSubmit(data);
      }
      handleCancel();
    },
    [handleCancel, props],
  );

  return (
    <ConnectedDialog dialogKey="publicationDialog" maxWidth="sm" fullWidth>
      <DialogTitle>{props?.title || 'Create Publication'}</DialogTitle>
      <DialogContent>
        <PublicationForm onSubmit={handleSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="submit" form="publication-form" color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </ConnectedDialog>
  );
};
