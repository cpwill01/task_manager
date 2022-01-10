import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, IconButton } from "@mui/material";

import SideBarData from "./SideBarData";
import useStyles from "./SideBarStyles";

export default function SideBar() {
  const [sideBar, setSideBar] = useState(false);
  const classes = useStyles();

  const showSideBar = () => setSideBar(!sideBar);
  return (
    <>
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
              className={classes.closeNavBarIcon}
              aria-label="closeMenu"
              onClick={showSideBar}
            >
              <CloseIcon />
            </IconButton>
          </li>
          {SideBarData.map((item, index) => (
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
    </>
  );
}
