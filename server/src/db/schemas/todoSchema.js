import { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    isEditMode: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default todoSchema;
