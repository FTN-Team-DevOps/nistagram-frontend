import { makeStyles } from '@material-ui/core';

export const useCommentStyle = makeStyles((theme) => ({
  comment: {},
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
  },
  img: {
    width: '25px',
    height: '25px',
    borderRadius: '50px',
  },
  name: {
    marginLeft: '5px',
  },
  text: {
    marginTop: '5px',
    marginBottom: '5px',
  },
}));
