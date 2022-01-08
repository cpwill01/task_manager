import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList/TaskList";
import TaskForm from "../components/TaskForm/TaskForm";
import { Grid } from "@mui/material";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { getTasks } from "../actions/TaskAction";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const [selected, setSelected] = useState([]);
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [currentId, dispatch]);

  return (
    <Grid
      container
      spacing={"2rem"}
      mt={"-5.25rem"}
      className={classes.fullGrid}
    >
      <Grid item xs={12} md={4} height={"100%"} className={classes.gridItem}>
        <TaskForm
          currentId={currentId}
          setCurrentId={setCurrentId}
          setSelected={setSelected}
        />
      </Grid>
      <Grid item xs={12} md={8} height={"100%"} className={classes.gridItem}>
        <TaskList isCompleted={false} setSelected={setSelected} />
      </Grid>
      <Grid item xs={12} height={"100%"} className={classes.gridItem}>
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
