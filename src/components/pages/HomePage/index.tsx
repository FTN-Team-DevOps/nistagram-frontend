import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { openDialog } from '../../../app/dialog/dialog.actions';

import { Button } from '@material-ui/core';
import { PageLayout } from '../common/PageLayout';

export const HomePage: FunctionComponent = () => {
  const dispatch = useDispatch();

  const openConfirmation = useCallback(() => {
    dispatch(
      openDialog('confirmation', {
        title: 'Hello world!',
        message: 'Look at console!',
        onDeny: () => {
          console.log('Deny action');
        },
        onConfirm: () => {
          console.log('Confirm action');
        },
      }),
    );
  }, [dispatch]);
  return (
    <PageLayout>
      <h1>Hello World, this is Nistagrammm!</h1>

      <Button onClick={openConfirmation}> Click me</Button>
    </PageLayout>
  );
};
