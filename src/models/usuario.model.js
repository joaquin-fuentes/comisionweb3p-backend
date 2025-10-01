import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema(
  {
    nombreUsuario: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    emailUsuario: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Ingrese un email válido",
      ],
    },
    rolUsuario: {
      type: String,
      enum: ["usuario", "admin"],
      default: "usuario",
    },
    contrasenia: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const UsuarioModel = model("usuarios", UsuarioSchema);
