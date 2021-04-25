import { makeStyles } from '@material-ui/core';

export const useDocumentInputClasses = makeStyles((theme) => ({
  logo: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '120px',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
      '& $tooltip': {
        display: 'block',
      },
      '& $previewImage': {
        opacity: '0.2',
      },
      '& $logoNotSetIcon': {
        opacity: '0.2',
      },
    },
  },
  previewImage: {},
  logoNotSetIcon: {
    fontSize: '9em',
    fill: '#3f50b5',
    transition: '.3s',
  },
  tooltip: {
    position: 'absolute',
    top: '75%',
    display: 'none',
    fontSize: '10px',
    background: theme.palette.grey[300],
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5),
    transition: '.3s',
  },
}));
