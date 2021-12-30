import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch } from "react-redux";

import useStyles from "./FormStyles";
import { createTask } from "../../actions/TaskAction";

const Form = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    creator: "",
    team: "",
    priority: "",
    createdAt: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTask(taskData));
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form}, ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Add a task</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={taskData.creator}
          onChange={(e) =>
            setTaskData({ ...taskData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={taskData.description}
          onChange={(e) =>
            setTaskData({ ...taskData, description: e.target.value })
          }
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="team-label">Team</InputLabel>
          <Select
            labelId="team-label"
            name="team"
            value={taskData.team}
            label="Team"
            onChange={(e) => setTaskData({ ...taskData, team: e.target.value })}
          >
            <MenuItem value={"Just Me"}>Just Me</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            labelId="priority-label"
            name="priority"
            value={taskData.priority}
            label="Priority"
            onChange={(e) =>
              setTaskData({ ...taskData, priority: e.target.value })
            }
          >
            <MenuItem value={"Low"}>Low</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"High"}>High</MenuItem>
          </Select>
        </FormControl>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
