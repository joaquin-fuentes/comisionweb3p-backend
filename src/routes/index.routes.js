import { Router } from "express";
import usuariosRoutes from "./usuarios.routes.js";
import tareasRoutes from "./tareas.routes.js";

const router = Router();

router.use("/usuarios", usuariosRoutes);
router.use("/tareas", tareasRoutes);

export default router;
