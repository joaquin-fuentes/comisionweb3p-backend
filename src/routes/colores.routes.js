import { Router } from "express";
import {
  crearColorController,
  editarColorController,
  eliminarColorController,
  obtenerColoresController,
  obtenerColorPorIdController,
} from "../controllers/colores.controllers.js";

const router = Router();

// OBTENER COLOR
router.get("/", obtenerColoresController);
//OBTENER COLOR POR ID
router.get("/:id", obtenerColorPorIdController);
//  CREAR COLOR
router.post("/", crearColorController);
export default router;
// EDITAR COLOR
router.put("/:id", editarColorController);
// ELIMINAR COLOR
router.delete("/:id", eliminarColorController);