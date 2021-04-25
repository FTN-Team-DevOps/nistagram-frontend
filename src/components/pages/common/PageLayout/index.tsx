import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';

import { TopMenu } from '../TopMenu';
import { Dialogs } from '../../../dialogs';

import { usePageLayoutStyles } from './styles';

export const PageLayout: FunctionComponent = ({ children }) => {
  const classes = usePageLayoutStyles();

  return (
    <>
      <TopMenu />

      <Grid container className={classes.root}>
        <Grid container item md={1} xl={2}></Grid>
        <Grid item md={10} xl={8} className={classes.content}>
          {children}
        </Grid>
        <Grid container item md={1} xl={2}></Grid>
      </Grid>
      <Dialogs />
    </>
  );
};
