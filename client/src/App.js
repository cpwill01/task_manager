import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Completed from "./views/Completed";
import Teams from "./views/Teams";
import Auth from "./views/Auth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
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
            path="/auth"
            element={
              <>
                <NavBar titleText="Welcome to the task manager" isLoginPage />
                <Auth />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
