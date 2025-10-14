import { Router } from "express";
import usuariosRoutes from "./usuarios.routes.js";
import coloresRoutes from "./colores.routes.js";
import tareasRoutes from "./tareas.routes.js";
import mascotasRoutes from "./mascotas.routes.js";
import cancionesRoutes from "./canciones.routes.js";
import productosRoutes from "./productos.routes.js";
import carritoRoutes from "./carrito.routes.js";

const router = Router();

router.use("/usuarios", usuariosRoutes);
router.use("/colores", coloresRoutes);
router.use("/tareas", tareasRoutes);
router.use("/mascotas", mascotasRoutes);
router.use("/canciones", cancionesRoutes);
router.use("/productos", productosRoutes);
router.use("/carrito", carritoRoutes);

export default router;
