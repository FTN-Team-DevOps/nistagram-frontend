import React, { FunctionComponent } from 'react';

import { ConfirmationDialog } from './ConfirmationDialog';
import { PublicationDialog } from './PublicationDialog';
import { PublicationViewDialog } from './PublicationViewDialog';
import { UsersDialog } from './UsersDialog';

export const Dialogs: FunctionComponent = () => (
  <>
    <ConfirmationDialog />
    <PublicationDialog />
    <PublicationViewDialog />
    <UsersDialog />
  </>
);
