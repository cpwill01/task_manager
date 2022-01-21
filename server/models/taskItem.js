import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  name: { type: String, required: true },
  creator: { type: String, required: true },
  team: { type: String, default: "Just Me" },
  priority: { type: String, required: true },
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
