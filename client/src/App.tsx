import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { MuiThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import GlobalStyles from './components/GlobalStyles';
import { Grid, CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';


import NavBar from './components/Layout/Drawer';
import Routes from './routes';
import { CurrentUserProvider } from "./contexts/CurrentUserContext"
import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    marginTop: '49px',
    marginBottom: theme.spacing(0)
  },
}));


const App: React.FC<any> = (props: any) => {

  const classes = useStyles();

  const theme =
    createTheme({
      palette: {
        type: 'light',
        primary: {
          main: '#8ecae6',
        },
        secondary: {
          main: '#3f3356',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
      typography: {
        fontSize: 14,
        fontFamily: 'Young, Oxygen, "Roboto", "Helvetica", "Arial", sans-serif'
      },
      overrides: {
        // Style sheet name ⚛️
        MuiLink: {
          // Name of the rule
          root: {
            // Some CSS
            textDecoration: 'none',
          },
        },
      },
    });


  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        dense
        maxSnack={3}
      >
        <CurrentUserProvider>
          <Grid component="main" className={classes.root}>
            <GlobalStyles />
            <Router>
              <React.Fragment>
                <NavBar />
                <Switch>
                  {Routes.map(route => (
                    <Route
                      exact={true}
                      path={route.path}
                      key={route.name}
                      component={route.component} />
                  ))}
                  <Redirect from="*" to="/http-status/404" />
                </Switch>
              </React.Fragment>
            </Router>
          </Grid>
        </CurrentUserProvider>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;