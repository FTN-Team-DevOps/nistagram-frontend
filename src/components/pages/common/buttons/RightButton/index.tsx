import React, { FunctionComponent } from 'react';
import { IRightButtonProps } from './types';
import { Grid, Button } from '@material-ui/core';
import { useRightButtonStyles } from './styles';

export const RightButton: FunctionComponent<IRightButtonProps> = ({ label, handleClick, color }) => {
  const classes = useRightButtonStyles();

  return (
    <Grid container item justify="flex-end" className={classes.button}>
      <Button onClick={handleClick} variant="outlined" color={color}>
        {label}
      </Button>
    </Grid>
  );
};
