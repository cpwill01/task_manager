import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";

import { getTasks } from "./actions/tasksAction";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
