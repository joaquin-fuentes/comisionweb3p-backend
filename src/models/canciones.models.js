import { Schema, model } from "mongoose";

const CancionesSchema = new Schema(
  {
    titulo: { type: String, required: true, trim: true },
    artista: { type: String, required: true, trim: true },
    anioLanzamiento: { type: Number, required: true },
    duracion: { type: Number, requerid: true },
    genero: { type: String, requerid: true },
    categoría: { type: String, required: true },
    idioma: { type: String, required: true },
  },
  { timestamps: true }
);

export const CancionesModel = model("canciones", CancionesSchema);
