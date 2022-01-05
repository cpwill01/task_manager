import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./NavBarStyles";
import { Link } from "react-router-dom";

import NavMenuData from "./NavMenuData";

export default function ButtonAppBar({ titleText }) {
  const [sideBar, setSideBar] = useState(false);
  const classes = useStyles();

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton
          className={classes.navBarIcon}
          aria-label="menu"
          color="inherit"
          onClick={showSideBar}
        >
          <MenuIcon />
        </IconButton>
        <nav className={sideBar ? classes.navMenuActive : classes.navMenu}>
          <ul className={classes.navMenuItems}>
            <li>
              <IconButton
                className={classes.claseNavBarIcon}
                aria-label="closeMenu"
                onClick={showSideBar}
              >
                <CloseIcon />
              </IconButton>
            </li>
            {NavMenuData.map((item, index) => (
              <li key={index} className={classes.navText}>
                <Link to={item.path} onClick={showSideBar}>
                  <Typography className={classes.pageName} variant="h6">
                    {item.icon} {item.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Typography className={classes.pageName} variant="h6">
          {titleText}
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
