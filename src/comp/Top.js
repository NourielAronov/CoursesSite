import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { routes } from "./router";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  loginButton: {
    marginLeft: 5,
  },
  navTitle: {
    flexGrow: 1,
  },
}));

function Top(props) {
  const classes = useStyles();
  const [isConnect, setIsConnect] = useState(true);
  const [page, setPage] = useState(routes[0].name);

  const handleCallToRouter = (event, page) => {
    setPage(page);
  };

  const updateUserConnection = (event) => {
    setIsConnect(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={isConnect} onChange={updateUserConnection} />
          }
          label={isConnect ? "התנתק" : "התחבר"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.loginButton}
            color="inherit"
            aria-label="open sideBar"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.navTitle}>
            נרשמים ונהנים
          </Typography>
          <Paper square>
            <Tabs
              value={page}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleCallToRouter}
              aria-label="menu"
              centered
            >
              {routes.map((route) => (
                <Tab
                  key={route.name}
                  value={route.name}
                  label={route.label}
                  to={route.path}
                />
              ))}
            </Tabs>
          </Paper>
          {isConnect && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Top;
