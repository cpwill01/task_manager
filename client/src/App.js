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
                <NavBar />
                <Home />
              </>
            }
          />
          <Route
            path="/completed"
            element={
              <>
                <NavBar />
                <Completed />
              </>
            }
          />
          <Route
            path="/teams"
            element={
              <>
                <NavBar />
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
