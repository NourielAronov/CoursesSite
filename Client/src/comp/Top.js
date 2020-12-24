import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"

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
}))

const Top = () => {
  const classes = useStyles()
  const [isConnect, setIsConnect] = useState(true)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const history = useHistory()

  const updateUserConnection = (event) => {
    setIsConnect(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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
            onClick={() => history.push("/")}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.navTitle}>
            נרשמים ונהנים
          </Typography>
          {isConnect && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => history.push("/profile")}>
                  פרופיל
                </MenuItem>
                <MenuItem onClick={() => history.push("/registered-courses")}>
                  קורסים שאעשה
                </MenuItem>
                <MenuItem onClick={() => history.push("/completed-courses")}>
                  קורסים שעשיתי
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Top
