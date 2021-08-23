import React, { FunctionComponent, useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useSelectWithParams } from '../../../utils/selector.utils';
import { apiSelectors } from '../../../app/api/api.selectors';

import { Link } from 'react-router-dom';
import { logIn, register } from '../../../app/auth/auth.actions';
import { IUserCreate, IUserCredentials } from '../../../app/resource/user/user.types';
import { LoginForm } from './LoginForm';

import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { useLoginPageStyles } from './styles';
import { UserForm } from '../ProfilePage/UserForm';

export const LoginPage: FunctionComponent = () => {
  const classes = useLoginPageStyles();
  const dispatch = useDispatch();

  const [isLogin, setLogin] = useState(true);
  const handleChangeForm = useCallback(() => setLogin(!isLogin), [isLogin, setLogin]);
  const login = useCallback(
    (data: IUserCredentials) => {
      dispatch(logIn(data));
    },
    [dispatch],
  );

  // const handleRegister = useCallback(
  //   (data: IUserCreate, picture: File | null) => {
  //     dispatch(register(data, picture));
  //   },
  //   [dispatch],
  // );

  const registerInProgress = useSelectWithParams(apiSelectors.selectApiInProgress, 'createUser');
  const registerError = useSelectWithParams(apiSelectors.selectApiError, 'createUser');
  const registerClicked = useRef<boolean>(false);

  const handleRegister = useCallback(
    (data: IUserCreate) => {
      dispatch(register(data));
      registerClicked.current = true;
    },
    [dispatch],
  );

  useEffect(() => {
    if (registerError) {
      registerClicked.current = false;
    }
    if (registerClicked.current && !registerInProgress) {
      setLogin(true);
    }
  }, [registerError, registerInProgress]);

  const isLoading = useSelectWithParams(apiSelectors.selectApiInProgress, 'login');
  return (
    <Grid className={classes.root} container direction="row" justify="center" alignItems="center">
      <Grid item xs={10} sm={6} lg={4}>
        {isLogin && (
          <div className={classes.headerHolder}>
            <Typography variant="h2" className={classes.header}>
              Welcome
            </Typography>
          </div>
        )}
        <Paper className={isLogin ? classes.paper : classes.paperRegister} elevation={20}>
          <Grid container>
            <Grid item xs={1} />
            {isLogin ? (
              <Grid item xs={10}>
                <LoginForm onSubmit={login} />
                <Button
                  type="submit"
                  form="login-form"
                  color="primary"
                  variant="contained"
                  fullWidth
                  className={classes.button}
                  disabled={isLoading}
                >
                  Login
                </Button>
                <div className={classes.linkHolder}>
                  <Link to="#" className={classes.link} onClick={handleChangeForm}>
                    Create an account
                  </Link>
                  <Link to="/" className={classes.link} onClick={handleChangeForm}>
                    Continue without login
                  </Link>
                </div>
              </Grid>
            ) : (
              <Grid item xs={10}>
                <div className={classes.paperRegisterContent}>
                  {registerInProgress ? (
                    <div className={classes.loading}> Loading...</div>
                  ) : (
                    <UserForm onSubmit={handleRegister} />
                  )}
                </div>
                <Button
                  type="submit"
                  form="user-form"
                  color="primary"
                  variant="contained"
                  fullWidth
                  className={classes.button}
                  disabled={isLoading}
                >
                  Register
                </Button>
                <div className={classes.linkHolder}>
                  <Link to="#" className={classes.link} onClick={handleChangeForm}>
                    I have an account
                  </Link>
                  <Link to="/" className={classes.link} onClick={handleChangeForm}>
                    Continue without login
                  </Link>
                </div>
              </Grid>
            )}
            <Grid item xs={1} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
