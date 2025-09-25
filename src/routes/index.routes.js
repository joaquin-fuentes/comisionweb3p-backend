import { Router } from "express";
import usuariosRoutes from "./usuarios.routes.js";
import coloresRoutes from "./colores.routes.js";

const router = Router();

router.use("/usuarios", usuariosRoutes);
router.use("/colores", coloresRoutes);

export default router;
