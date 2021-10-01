import React, { useState, useEffect, useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';
import { changeDocumentTitle } from '../../util/methods';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSnackbar } from 'notistack';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(0, 4),
    marginBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {

  changeDocumentTitle("AntiQ - Login");
  const history = useHistory();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const redirect = useCallback((where) => history.push(where)
    , [history]
  );

  const { isAuthenticated,
    isLoading, error,
    loginUser } = useCurrentUser();

  useEffect(() => {
    if (isAuthenticated) redirect('/');
  }, [isAuthenticated, redirect]);

  const performLogin = e => {
    e.preventDefault();
    loginUser({ email, password });
    if (error.error) {
      enqueueSnackbar('Could not sign-in.', {
        anchorOrigin: {
          horizontal: 'left',
          vertical: 'bottom'
        },
        variant: 'error'
      });
    }
  };

  const isEnabledToSubmit = email.length >= 4 && password.length >= 4;

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={12} component={Paper} elevation={4} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in to AntiQ
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={email}
                  onChange={({ target: { value } }) => setEmail(value)}
                  autoComplete="email"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  color="secondary"
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={({ target: { value } }) => setPassword(value)}
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={performLogin}
              disabled={!isEnabledToSubmit || isLoading}
              color="secondary"
              className={classes.submit}
            >
              {!isLoading
                ? "Sign in" : "Signing in..."
              }
            </Button>
            <Grid container>
              <Grid item xs={12} sm={8} md={12}>
                <Typography
                  style={{ color: "black", }}
                  onClick={() => setShowPassword(!showPassword)}
                  variant="body2">
                  {showPassword ? "Hide password" : "Show password"}
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}


export default SignIn
