import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema(
  {
    idUsuario: { type: String, required: true },
    productos: { type: Array, default: [] },
    precioTotal: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const CarritoModel = mongoose.model("carrito", carritoSchema);
