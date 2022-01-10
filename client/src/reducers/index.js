import { combineReducers } from "redux";

import tasksReducer from "./tasksReducer";
import authReducer from "./authReducer";

export default combineReducers({
  tasksReducer,
  authReducer,
});
