import { makeStyles } from '@material-ui/core';

export const useProfilePageStyle = makeStyles((theme) => ({
  headerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0',
    margin: '0',
  },
  textWrapper: {
    marginLeft: '10px',
  },
  nickname: {
    fontSize: '40px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: '0',
    margin: '0',
  },
  name: {
    fontSize: '40px',
    fontStyle: 'italic',
    fontWeight: 'normal',
    padding: '0',
    margin: '0',
  },
  biography: {
    padding: '0px',
    marginTop: '10px',
    fontSize: '30px',
    marginLeft: '20px',
  },

  photoWrapper: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
  profilePhoto: {
    width: '180px',
    height: '180px',
    borderRadius: '180px',
    padding: '0',
    margin: '0',
  },
  editButton: { width: '100%', marginTop: '10px' },
}));
