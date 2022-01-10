import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Completed from "./views/Completed";
import Teams from "./views/Teams";
import Auth from "./views/Auth";

const App = () => {
  function PrivateRoute() {
    const user = JSON.parse(localStorage.getItem("profile"));
    return user ? <Outlet /> : <Navigate replace to="/auth" />;
  }
  function GuestRoute() {
    const user = JSON.parse(localStorage.getItem("profile"));
    return user ? <Navigate replace to="/" /> : <Outlet />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route
            path="/auth"
            element={
              <>
                <NavBar titleText="Welcome to the task manager" isLoginPage />
                <Auth />
              </>
            }
          />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route
            path="/"
            element={
              <>
                <NavBar titleText="Ongoing Tasks" />
                <Home />
              </>
            }
          />
          <Route
            path="/completed"
            element={
              <>
                <NavBar titleText="Completed Tasks" />
                <Completed />
              </>
            }
          />
          <Route
            path="/teams"
            element={
              <>
                <NavBar titleText="Teams" />
                <Teams />
              </>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
