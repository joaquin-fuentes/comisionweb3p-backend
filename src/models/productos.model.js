import { Schema, model } from "mongoose";
const ProductoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
    },
    urlImagen: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ProductosModel = model("productos", ProductoSchema);
