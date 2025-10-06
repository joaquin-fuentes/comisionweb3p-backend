import { Schema, model } from "mongoose";
const PeliculaSchema = new Schema(
  {
    titulo: {
      type: String,
      required: [true, "el campo titulo es obligatorio"],
      unique: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: [true, "se necesita una descripcion"],
      trim: true,
      minlength: [5, "La descripción debe tener al menos 5 caracteres"],
    },
    director: {
      type: String,
      trim: true,
      default: "Anónimo/sin director",
    },
    fechaDeLanzamiento: {
      type: Number,
      required: [true, "se necesita una fecha de lanzamiento"],
      trim: true,
      min: [1888, "La fecha de lanzamiento debe ser mayor o igual a 1888"],
    },
    duracion: {
      type: Number,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);
export const PeliculaModel = model("peliculas", PeliculaSchema);
