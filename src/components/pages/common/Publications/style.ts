import { makeStyles } from '@material-ui/core';

export const usePublicationsStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    maxWidth: '1030px',
  },
  imageList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  },
}));
