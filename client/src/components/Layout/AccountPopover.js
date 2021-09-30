import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  ButtonBase,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  popover: {
    width: "240px",
    borderRadius: "1rem",
    padding: theme.spacing(1, 0),
    boxShadow: "rgb(0 0 0 / 31%) 0px 0px 1px 0px, rgb(0 0 0 / 25%) 0px 5px 8px -2px"
  },
  popoverElement: {
    padding: '0.5rem',
  },
  itemIcon: {
    paddingRight: "1.4rem", 
    minWidth: "auto"
  },
  buttonTextTrans: {
    textTransform: 'none',
  }
}));

const AccountPopover = (props) => {
  const anchorRef = useRef(null);
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const user = {username: "Majdi"};

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpen}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <Avatar
          sx={{
            height: 32,
            width: 32
          }}
        />
      </Box>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom'
        }}
        getContentAnchorEl={null}
        keepMounted
        onClose={handleClose}
        open={open}
        classes={{paper: classes.popover}}
      >
        <Box sx={{ p: 2 }} className={classes.popoverElement}>
          <Typography
            color="textPrimary"
            variant="subtitle2"
          >
            {user.username}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ mt: 2 }} className={classes.popoverElement}>
        <MenuItem
            component={RouterLink}
            to="/settings"
          >
            <ListItemIcon className={classes.itemIcon} >
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={(
                <Typography
                  color="textPrimary"
                  variant="subtitle2"
                >
                  Settings
                </Typography>
              )}
            />
          </MenuItem>
        </Box>
      </Popover>
    </>
  );
};

export default AccountPopover;
