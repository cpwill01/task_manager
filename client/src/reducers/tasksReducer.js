import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  TOGGLE_COMPLETE,
} from "../constants/actionTypes";

export default (tasks = [], action) => {
  switch (action.type) {
    case UPDATE:
    case TOGGLE_COMPLETE:
      return tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tasks, action.payload];
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload);
    default:
      return tasks;
  }
};
