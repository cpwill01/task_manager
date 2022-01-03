import React from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
  Toolbar,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";

import useCommonStyles from "../styles";
import { deleteTask } from "../../actions/TaskAction";

const TaskDetails = ({ selected, setSelected, setCurrentId }) => {
  const commonClasses = useCommonStyles();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(selected._id));
    setSelected([]);
  };
  return selected.length !== 0 ? (
    <Box sx={{ minWidth: 275 }}>
      <Toolbar className={commonClasses.topBar}>
        {
          <Typography className={commonClasses.barTitle} id="taskDetailText">
            Task Details
          </Typography>
        }
      </Toolbar>
      <Card variant="outlined">
        <Grid container spacing={0}>
          <Grid item xs={12} md={5} height={"100%"}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {selected.createdAt}
              </Typography>
              <Typography variant="h5" component="div">
                {selected.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                created by {selected.creator}
              </Typography>
              <Typography variant="body2">{selected.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  setCurrentId(selected._id);
                }}
              >
                Edit this task
              </Button>
              <Button size="small" variant="outlined" color="success">
                Mark as Completed
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
          <Grid item xs={12} md={7} height={"100%"}>
            <CardContent>
              <Typography variant="h6" component="div">
                Comments
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                These are some comments by commentor.
              </Typography>
              <TextField></TextField>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Post comment
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Box>
  ) : (
    <Box sx={{ minWidth: 275 }}>
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
    </Box>
  );
};

export default TaskDetails;
