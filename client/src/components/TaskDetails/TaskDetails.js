import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Paper,
  Toolbar,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";

import useCommonStyles from "../styles";
import { deleteTask, toggleCompleteTask } from "../../actions/TaskAction";

const TaskDetails = ({ selected, setSelected, setCurrentId, isCompleted }) => {
  const commonClasses = useCommonStyles();
  const dispatch = useDispatch();

  const handleEdit = () => {
    setCurrentId(selected._id);
  };

  const handleDelete = () => {
    dispatch(deleteTask(selected._id));
    setSelected([]);
  };

  const handleToggleComplete = () => {
    dispatch(toggleCompleteTask(selected._id));
    setCurrentId(null);
    setSelected([]);
  };

  return selected.length !== 0 ? (
    <Paper className={commonClasses.paper} elevation={2}>
      <Toolbar className={commonClasses.topBar}>
        {
          <Typography className={commonClasses.barTitle} id="taskDetailText">
            Task Details
          </Typography>
        }
      </Toolbar>
      <Card variant="outlined">
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} height={"100%"}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {selected.createdAt.slice(0, 10)}
              </Typography>
              <Typography variant="h5" component="div">
                {selected.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                created by {selected.name}
              </Typography>
              <Typography variant="body2">{selected.description}</Typography>
            </CardContent>
            <CardActions>
              {!isCompleted && (
                <Button size="small" variant="outlined" onClick={handleEdit}>
                  Edit this task
                </Button>
              )}
              <Button
                size="small"
                variant="outlined"
                color="success"
                onClick={handleToggleComplete}
              >
                {selected.isCompleted
                  ? "Mark as Incomplete"
                  : "Mark as Completed"}
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                onClick={handleDelete}
              >
                Delete task
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Paper>
  ) : (
    <Paper className={commonClasses.paper} elevation={2}>
      <Toolbar className={commonClasses.topBar}>
        {
          <Typography className={commonClasses.barTitle} id="taskDetailText">
            Task Details
          </Typography>
        }
      </Toolbar>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Select a task from the tasklist to show its details
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default TaskDetails;
