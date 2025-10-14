import { Router } from "express";
import {
  agregarProductoAlCarritoController,
  eliminarProductoDelCarritoController,
} from "../controllers/carrito.controller.js";
import { validarAutenticacion } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/:id", validarAutenticacion, agregarProductoAlCarritoController);
router.delete(
  "/:id",
  validarAutenticacion,
  eliminarProductoDelCarritoController
);

export default router;
