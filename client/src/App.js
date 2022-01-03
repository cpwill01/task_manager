import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
