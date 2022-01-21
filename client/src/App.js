import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Completed from "./views/Completed";
import Auth from "./views/Auth";
import { USER, GUEST } from "./constants/AuthLevels";
import AuthRoute from "./helpers/AuthRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute type={GUEST} />}>
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
        <Route element={<AuthRoute type={USER} />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
