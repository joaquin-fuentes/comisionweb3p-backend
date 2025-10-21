import { Router } from "express";
import {
  actualizarProductoController,
  crearProductoController,
  eliminarProductoController,
  obtenerProductoPorIdController,
  obtenerProductosController,
} from "../controllers/productos.controller.js";
import { validacionesCrearProducto } from "../middlewares/validationProducts.middleware.js";

const router = Router();

router.get("/", obtenerProductosController);

router.get("/:id", obtenerProductoPorIdController);

router.post("/", validacionesCrearProducto, crearProductoController);

router.put("/:id", actualizarProductoController);

router.delete("/:id", eliminarProductoController);

export default router;
