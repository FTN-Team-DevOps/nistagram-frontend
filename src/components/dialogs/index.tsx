import React, { FunctionComponent } from 'react';

import { ConfirmationDialog } from './ConfirmationDialog';
import { PublicationDialog } from './PublicationDialog';

export const Dialogs: FunctionComponent = () => (
  <>
    <ConfirmationDialog />
    <PublicationDialog />
  </>
);
