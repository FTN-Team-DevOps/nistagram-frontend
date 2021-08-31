import { makeStyles } from '@material-ui/core';

export const useLoginPageStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
  },
  paper: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  paperRegister: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  paperRegisterContent: {
    overflowY: 'auto',
    height: '70vh',
  },
  button: {
    fontSize: theme.spacing(2.5),
    marginTop: theme.spacing(4),
    height: theme.spacing(8),
  },
  headerHolder: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(6),
  },
  headerRegisterHolder: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  header: {
    width: '100%',
    textAlign: 'center',
  },
  linkHolder: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
  },
  link: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2),
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
  },
  loading: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
