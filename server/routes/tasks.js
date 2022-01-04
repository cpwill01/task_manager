import express from "express";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleCompleteTask,
} from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggleCompleteTask", toggleCompleteTask);

export default router;
