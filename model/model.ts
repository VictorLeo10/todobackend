import mongoose from "mongoose";

interface iTodo {
  task: string;
  description: string;
  status: boolean;
  started: string;
  ended: string;
}

interface todoInterface extends iTodo, mongoose.Document {}

const todoSchema = new mongoose.Schema(
  {
    task: String,
    description: String,
    status: Boolean,
    started: String,
    ended: String,
  },
  { timestamps: true }
);

export default mongoose.model<todoInterface>("taskdb", todoSchema);
