import express from "express";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleCompleteTask,
} from "../controllers/tasks.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, createTask);
router.patch("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);
router.patch("/:id/toggleCompleteTask", auth, toggleCompleteTask);

export default router;
