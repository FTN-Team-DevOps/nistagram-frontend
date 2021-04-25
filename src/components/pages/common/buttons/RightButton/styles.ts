import { makeStyles } from '@material-ui/core';

export const useRightButtonStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexGrow: 1,
  },
}));
