import { makeStyles } from '@material-ui/core';

export const useCommentFormStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  textField: {
    width: '100%',
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttons: {
    marginLeft: '5px',
    marginTop: '5px',
  },
}));
