import { Schema, model } from "mongoose";

const TareaSchema = new Schema(
  {
    descripcion: {
      type: String,
      required: [true, "El campo descripcion es obligatorio"],
      unique: true,
      trim: true,
    },
    pendiente: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const TareaModel = model("tareas", TareaSchema);
