import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { openDialog } from '../../../../../app/dialog/dialog.actions';
import { usePublicationStyle } from './style';
import { IPublicationProps } from './types';

export const Publication: FunctionComponent<IPublicationProps> = ({ publication }) => {
  const classes = usePublicationStyle();
  const dispatch = useDispatch();

  const openPublication = useCallback(() => {
    if (publication) {
      dispatch(
        openDialog('publicationViewDialog', {
          publicationId: publication._id,
        }),
      );
    }
  }, [dispatch, publication]);

  return (
    <img
      className={classes.img}
      onClick={openPublication}
      alt={publication.description}
      src={publication.pictures[0]}
    />
  );
};
