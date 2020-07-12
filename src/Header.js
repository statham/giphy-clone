// @flow
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: 'inherit',
    boxShadow: 'none',
  },
  toolbar: {
    height: '70px',
    padding: '0',
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} className="App-logo" alt="logo" width={50}/>
        <Typography variant="h5">GIPHY CLONE</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;