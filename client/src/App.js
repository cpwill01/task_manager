import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Completed from "./views/Completed";
import Teams from "./views/Teams";

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
