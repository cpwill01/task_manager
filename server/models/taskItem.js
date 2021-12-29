import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  team: String,
  pirority: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TaskItem = mongoose.model("TaskMessage", taskSchema);

export default TaskItem;
