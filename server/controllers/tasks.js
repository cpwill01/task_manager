import mongoose from "mongoose";
import TaskItem from "../models/taskItem.js";

export const getTasks = async (req, res) => {
  try {
    const taskItems = await TaskItem.find();
    res.status(200).json(taskItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;
  const newTask = new TaskItem(task);

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No such task found.");
  }

  const updatedTask = { ...task, _id: id };

  await TaskItem.findByIdAndUpdate(id, updatedTask, { new: true });

  res.json(updatedTask);
};
