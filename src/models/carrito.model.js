import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema(
  {
    idUsuario: { type: String, required: true },
    productos: { type: Array, default: [] },
  },
  { timestamps: true }
);

export const CarritoModel = mongoose.model("carrito", carritoSchema);
