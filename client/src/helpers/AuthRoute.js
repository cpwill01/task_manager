import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GUEST, USER } from "../constants/AuthLevels";

const AuthRoute = ({ type }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  switch (type) {
    case GUEST:
      return user ? <Navigate replace to="/" /> : <Outlet />;
    case USER:
      return user ? <Outlet /> : <Navigate replace to="/auth" />;
    default:
      return <Navigate replace to="/" />;
  }
};

export default AuthRoute;
