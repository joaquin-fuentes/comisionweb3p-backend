import { Router } from "express";
import {
  crearColorController,
  editarColorController,
  eliminarColorController,
  obtenerColoresController,
  obtenerColorPorIdController,
} from "../controllers/colores.controller.js";

const router = Router();

router.get("/", obtenerColoresController);

router.get("/:id", obtenerColorPorIdController);

router.post("/", crearColorController);

router.put("/:id", editarColorController);

router.delete("/:id", eliminarColorController);

export default router;
