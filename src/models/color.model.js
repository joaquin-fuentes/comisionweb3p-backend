import mongoose from "mongoose";

const { Schema } = mongoose;
const ColorSchema = new Schema({
  nombre: { type: String, required: true, trim: true },
  codigoHex: {
    type: String,
    required: true,
    trim: true,
  },
});
export const ColorModel = mongoose.model("colores", ColorSchema);
