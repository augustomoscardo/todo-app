import mongoose, { model, Schema } from "mongoose";

interface Task {
  description: string;
  isCompleted: boolean;
}

const TaskSchema = new Schema<Task>(
  {
    description: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export default mongoose.models.Task || model<Task>("Task", TaskSchema);
