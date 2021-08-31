import { Grid } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { publicationSelectors } from '../../../../app/resource/publication/publication.selectors';
import { useSelectWithParams } from '../../../../utils/selector.utils';
import { Publication } from './Publication';
import { usePublicationsStyle } from './style';
import { IPublicationsProps } from './types';

export const Publications: FunctionComponent<IPublicationsProps> = ({ publicationIds }) => {
  const classes = usePublicationsStyle();
  const publications = useSelectWithParams(publicationSelectors.selectResourcesById, publicationIds);

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container>
        {publications.map(
          (publication) =>
            publication && (
              <Grid className={classes.imageList} key={`publication-${publication._id}`} item md={4} xs={6}>
                <Publication publication={publication} />
              </Grid>
            ),
        )}
      </Grid>
    </div>
  );
};
