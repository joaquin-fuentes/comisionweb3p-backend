import express from "express";
import cors from "cors";
import routes from "./src/routes/index.routes.js";
import { connectDB } from "./src/db/config.db.js";
// import dotenv from "dotenv";
// dotenv.config();

const app = express();
const PORT = 3000;

connectDB();
// Middleware para json
app.use(cors());

app.use(express.json());
// Middleware para usar todas las rutas
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
