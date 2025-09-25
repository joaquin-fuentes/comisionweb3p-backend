import { Router } from "express";
import usuariosRoutes from "./usuarios.routes.js";
import mascotasRoutes from "./mascotas.routes.js";

const router = Router();

router.use("/usuarios", usuariosRoutes);
router.use("/mascotas", mascotasRoutes);

export default router;
