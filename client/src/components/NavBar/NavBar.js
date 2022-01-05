import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useStyles from "./NavBarStyles";

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton
          className={classes.navbarIcon}
          aria-label="menu"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.pageName} variant="h6">
          Task Manager
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
