import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchTasks = () => API.get("/tasks");
export const createTask = (newTask) => API.post("/tasks", newTask);
export const updateTask = (id, updatedTask) =>
  API.patch(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const toggleCompleteTask = (id) =>
  API.patch(`/tasks/${id}/toggleCompleteTask`);

export const signIn = (formData) => API.post("/users/signIn", formData);
export const signUp = (formData) => API.post("/users/signUp", formData);
