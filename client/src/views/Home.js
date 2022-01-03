import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList/TaskList";
import Form from "../components/Form/Form";
import { Grid } from "@mui/material";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import { useDispatch } from "react-redux";

import { getTasks } from "../actions/TaskAction";

const Home = () => {
  const [currentId, setCurrentId] = React.useState(null);
  const [selected, setSelected] = React.useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [currentId, dispatch]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4} height={"100%"}>
        <Form
          currentId={currentId}
          setCurrentId={setCurrentId}
          setSelected={setSelected}
        />
      </Grid>
      <Grid item xs={12} md={8} height={"100%"}>
        <TaskList selected={selected} setSelected={setSelected} />
      </Grid>
      <Grid item xs={12} height={"100%"}>
        <TaskDetails
          selected={selected}
          setSelected={setSelected}
          setCurrentId={setCurrentId}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
