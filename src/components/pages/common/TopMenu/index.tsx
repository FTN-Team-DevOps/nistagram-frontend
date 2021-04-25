import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';

import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Button } from '@material-ui/core';

// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeIcon from '@material-ui/icons/Home';

import { useTopMenuStyles } from './styles';
import { openDialog } from '../../../../app/dialog/dialog.actions';

export const TopMenu: FunctionComponent = () => {
  const dispatch = useDispatch();

  const classes = useTopMenuStyles();

  const { pathname } = useLocation();
  const showFilledHome = useMemo(() => pathname === '/', [pathname]);

  const openConfirmation = useCallback(() => {
    dispatch(
      openDialog('confirmation', {
        title: 'Hello world!',
        message: 'Look at console!',
        onDeny: () => {
          console.log('Deny action');
        },
        onConfirm: () => {
          console.log('Confirm action');
        },
      }),
    );
  }, [dispatch]);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow} />

          <Typography className={classes.title} variant="h6" noWrap>
            Nistagram
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton>
              {showFilledHome ? (
                <HomeIcon
                  style={{
                    color: 'white',
                  }}
                />
              ) : (
                <HomeOutlinedIcon />
              )}
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge color="secondary">
                {/*  badgeContent={4} */}
                <MailIcon />
              </Badge>
            </IconButton>
            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
          <Button onClick={openConfirmation}> Click me</Button>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </div>
  );
};
