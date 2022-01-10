import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, Avatar, Button } from "@mui/material";

import useStyles from "./NavBarStyles";
import { LOGOUT } from "../../constants/ActionTypes";
import SideBar from "./SideBar/SideBar";

export default function NavBar({ titleText, isLoginPage }) {
  const [user, setUser] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    navigate("/auth");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.innerBar}>
        {isLoginPage ? (
          <>
            <Typography className={classes.pageName} variant="h6">
              {titleText}
            </Typography>
          </>
        ) : (
          <>
            <div className={classes.leftContainer}>
              <SideBar />
              <Typography className={classes.pageName} variant="h6">
                {titleText}
              </Typography>
            </div>
            <div className={classes.profileContainer}>
              <Avatar
                className={classes.avatarIcon}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
              <Button variant="contained" color="secondary" onClick={logout}>
                Logout
              </Button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
