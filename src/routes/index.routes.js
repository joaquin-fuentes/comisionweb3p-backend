import { Router } from "express";
import usuariosRoutes from "./usuarios.routes.js";
import tareasRoutes from "./tareas.routes.js";
import mascotasRoutes from "./mascotas.routes.js";
import cancionesRoutes from "./canciones.routes.js"

const router = Router();

router.use("/usuarios", usuariosRoutes);
router.use("/tareas", tareasRoutes);
router.use("/mascotas", mascotasRoutes);
router.use("/canciones", cancionesRoutes)

export default router;
