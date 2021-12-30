import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  team: String,
  priority: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TaskItem = mongoose.model("TaskItem", taskSchema);

export default TaskItem;
