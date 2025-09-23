import express from "express";
import routes from "./src/routes/index.routes.js";

const app = express();

// Middleware para json
app.use(express.json());

// Middleware para usar todas las rutas
app.use("/api", routes);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
