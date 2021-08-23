import { makeStyles } from '@material-ui/core';

export const usePageLayoutStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh- 64px)',
  },
  content: {
    height: '100%',
    padding: theme.spacing(3),
    overflow: 'auto',
  },
}));
