import React, { FunctionComponent } from 'react';

import { ConfirmationDialog } from './ConfirmationDialog';
import { PublicationDialog } from './PublicationDialog';
import { PublicationViewDialog } from './PublicationViewDialog';

export const Dialogs: FunctionComponent = () => (
  <>
    <ConfirmationDialog />
    <PublicationDialog />
    <PublicationViewDialog />
  </>
);
