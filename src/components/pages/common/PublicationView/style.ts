import { makeStyles } from '@material-ui/core';

export const usePublicationViewStyle = makeStyles((theme) => ({
  imageWrapper: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  img: {
    height: '100%',
  },
  left: {
    width: '20px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    width: '20px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activitiyIconsWrapper: {
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIcon: {
    cursor: 'pointer',
    margin: '0px 5px',
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  icon: {
    cursor: 'pointer',
  },
  descriptionWrapper: {
    margin: '10px 0px',
    padding: '0px 30px',
  },
}));
