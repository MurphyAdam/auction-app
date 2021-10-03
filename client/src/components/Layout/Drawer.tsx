import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountPopover from './AccountPopover';
import { Link as RouterLink } from 'react-router-dom';
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: 17,
    textTransform: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  AppBarButton: {
    color: theme.palette.secondary.main,
    textTransform: 'none',
    fontWeight: 'bold',
  },
}));

const PrimaryAppBar: React.FC<any> = (props: any) => {

  const classes = useStyles();
  const { isAuthenticated, currentUser } = useCurrentUser();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (e: any) => setMobileMoreAnchorEl(e.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      PaperProps={{
        style: {
          minWidth: 200,
        },
      }}
      onClose={handleMobileMenuClose}>
      <MenuItem key="mobile-products" component={RouterLink}
        to="/">
        Products
      </MenuItem>
      <MenuItem key="mobile-settings" component={RouterLink}
        to="/settings">
        Settings
      </MenuItem>
    </Menu >
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h4" noWrap>
            <Button
              component={RouterLink}
              color="secondary"
              variant="text"
              className={classes.title}
              to="/">
              AntiQ
              </Button>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isAuthenticated
              ?
              (
                <>
                  <Button
                    key="username-settings"
                    color="secondary"
                    component={RouterLink}
                    to="/settings"
                    className={classes.AppBarButton}>
                    {currentUser.username}
                  </Button>
                  <AccountPopover />
                </>
              ) :
              (
                <Button
                  key="Sign-in"
                  color="secondary"
                  component={RouterLink}
                  to="/auth/signin"
                  className={classes.AppBarButton}>
                  Sign-in
                </Button>
              )
            }
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              key="show-more"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default PrimaryAppBar;