import React, { FunctionComponent, useCallback, useMemo } from 'react';

import { useHistory, useLocation } from 'react-router';

import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge } from '@material-ui/core';

// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeIcon from '@material-ui/icons/Home';

import { useTopMenuStyles } from './styles';
import { useSelect } from '../../../../utils/selector.utils';
import { authSelectors } from '../../../../app/auth/auth.selectors';
import { logOut } from '../../../../app/auth/auth.actions';
import { useDispatch } from 'react-redux';

export const TopMenu: FunctionComponent = () => {
  const classes = useTopMenuStyles();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const showFilledHome = useMemo(() => pathname === '/', [pathname]);

  const history = useHistory();

  const currentUserId = useSelect(authSelectors.selectLoggedUser);
  const handleOpenProfile = useCallback(() => {
    if (currentUserId) {
      history.push(`/profile/${currentUserId}`);
    } else {
      history.push(`/login`);
    }
  }, [currentUserId, history]);

  const handleLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  const handleHomeClick = useCallback(() => {
    history.push(`/`);
  }, [history]);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow} />

          <Typography className={classes.title} variant="h6" noWrap onClick={handleHomeClick}>
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
            <IconButton onClick={handleHomeClick}>
              {showFilledHome ? (
                <HomeIcon
                  style={{
                    color: 'white',
                  }}
                />
              ) : (
                <HomeOutlinedIcon
                  style={{
                    color: 'white',
                  }}
                />
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
              aria-label="Current User Account"
              // aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleOpenProfile}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            {currentUserId && (
              <IconButton
                edge="end"
                aria-label="Current User Account"
                // aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleLogOut}
                color="inherit"
              >
                <ExitToAppIcon />
              </IconButton>
            )}
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
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </div>
  );
};
