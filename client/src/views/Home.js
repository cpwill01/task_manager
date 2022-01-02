import React from "react";
import TaskList from "../components/TaskList/TaskList";
import Form from "../components/Form/Form";
import { Grid } from "@mui/material";

const Home = () => {
  const [selected, setSelected] = React.useState([]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4}>
        <Form />
      </Grid>
      <Grid item xs={12} md={8}>
        <TaskList selected={selected} setSelected={setSelected} />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Home;
