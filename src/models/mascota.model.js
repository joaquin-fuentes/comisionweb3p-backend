import { Schema, model } from "mongoose";

const MascotaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El campo nombre es obligatorio"],
      trim: true,
    },
    especie: {
      type: String,
      required: [true, "El campo especie es obligatorio"],
      trim: true,
    },

    raza: {
      type: String,
      trim: true,
    },

    edad: {
      type: Number,
      trim: true,
    },

    vacunado: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const MascotaModel = model("mascotas", MascotaSchema);
