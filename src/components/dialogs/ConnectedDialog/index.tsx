import React, { FunctionComponent, useMemo } from 'react';
import { Dialog, DialogProps } from '@material-ui/core';

import { IDialogKey } from '../../../app/dialog/dialog.types';
import { dialogSelectors } from '../../../app/dialog/dialog.selectors';
import { useSelectWithParams } from '../../../utils/selector.utils';

import { omit } from 'lodash';

export const ConnectedDialog: FunctionComponent<Omit<DialogProps, 'open'> & { dialogKey: IDialogKey }> = (props) => {
  const isOpen = useSelectWithParams(dialogSelectors.selectIsDialogOpen, props.dialogKey);
  const isCloseable = useSelectWithParams(dialogSelectors.selectIsDialogCloseable, props.dialogKey);

  const dialogProps = useMemo(() => omit(!isCloseable ? omit(props, 'handleClose') : props, 'dialogKey'), [
    isCloseable,
    props,
  ]);

  return (
    <Dialog open={isOpen} {...dialogProps}>
      {props.children}
    </Dialog>
  );
};
