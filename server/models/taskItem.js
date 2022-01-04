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
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const TaskItem = mongoose.model("TaskItem", taskSchema);

export default TaskItem;
