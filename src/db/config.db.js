import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    mongoose.connect(URI);
    console.log("✅ Base de datos conectada");
  } catch (error) {
    console.error("❌ Error al conectar DB:", error);
  }
};
