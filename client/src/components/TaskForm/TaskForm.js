import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Toolbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useFormStyles from "./TaskFormStyles";
import useCommonStyles from "../styles";
import { createTask, updateTask } from "../../actions/TaskAction";

const TaskForm = ({ currentId, setCurrentId, setSelected }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "",
    createdAt: "",
  });
  const formClasses = useFormStyles();
  const commonClasses = useCommonStyles();
  const task = useSelector((state) =>
    currentId ? state.tasksReducer.find((t) => t._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (task) {
      setTaskData(task);
    }
  }, [task]);

  const clear = () => {
    setCurrentId(null);
    setTaskData({
      title: "",
      description: "",
      priority: "",
      createdAt: "",
    });
  };

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updateTask(currentId, { ...taskData, name: user?.result?.name })
      );
      setSelected([]);
    } else {
      taskData.createdAt = new Date();
      dispatch(createTask({ ...taskData, name: user?.result?.name }));
    }
    clear();
  };

  return (
    <Paper className={commonClasses.paper} elevation={2}>
      <Toolbar className={commonClasses.topBar}>
        <Typography className={commonClasses.barTitle} id="formTitleText">
          {currentId ? "Updating " : "Add "}a task
        </Typography>
      </Toolbar>
      <Paper className={formClasses.paper} elevation={0}>
        <form
          name="taskForm"
          autoComplete="off"
          noValidate
          className={`${formClasses.root}, ${formClasses.form}`}
          onSubmit={handleSubmit}
          height="100%"
        >
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            required
            value={taskData.title}
            onChange={handleChange}
          />
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            value={taskData.description}
            onChange={handleChange}
          />
          <FormControl required variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              name="priority"
              value={taskData.priority}
              label="Priority"
              onChange={handleChange}
            >
              <MenuItem value={"Low"}>Low</MenuItem>
              <MenuItem value={"Medium"}>Medium</MenuItem>
              <MenuItem value={"High"}>High</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            size="large"
            shape={"square"}
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Paper>
  );
};

export default TaskForm;
