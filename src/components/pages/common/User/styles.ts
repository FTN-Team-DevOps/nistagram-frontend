import { makeStyles } from '@material-ui/core';

export const useUserStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
    cursor: 'pointer',
  },
  img: {
    width: '25px',
    height: '25px',
    borderRadius: '50px',
  },
  name: {
    marginLeft: '5px',
  },
}));
