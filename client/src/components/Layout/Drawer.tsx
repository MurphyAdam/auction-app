import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import AccountPopover from './AccountPopover';
import { Link as RouterLink } from 'react-router-dom';
import { Keyable } from "../../types";

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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (e: React.ChangeEvent<HTMLButtonElement>) => setMobileMoreAnchorEl(e.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);


  const isAuthenticated = true;

  const currentUser: Keyable = {};

  const mobileMenuId = 'primary-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>

      <MenuItem key="Home">
        <Button
          aria-label="Home"
          component={RouterLink}
          to="/"
          color="inherit"
          className={classes.AppBarButton}>
          Home
        </Button>
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
            <Button
              key="Contact"
              color="secondary"
              className={classes.AppBarButton}>
              Majdi
            </Button>
            <AccountPopover />
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default PrimaryAppBar;