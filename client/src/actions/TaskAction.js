import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  TOGGLE_COMPLETE,
} from "../constants/ActionTypes";
import * as api from "../api";

// Action Creators
export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(id, task);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const toggleCompleteTask = (id) => async (dispatch) => {
  try {
    const { data } = await api.toggleCompleteTask(id);
    dispatch({ type: TOGGLE_COMPLETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
