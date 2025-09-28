import { Router } from "express";
import {
  crearMascotaController,
  editarMascotaController,
  eliminarMascotaController,
  obtenerMascotaPorIdController,
  obtenerMascotasController,
} from "../controllers/mascotas.controllers.js";

const router = Router();


router.get("/", obtenerMascotasController);
router.get("/:id", obtenerMascotaPorIdController);
router.post("/", crearMascotaController);
router.put("/:id", editarMascotaController);
router.delete("/:id", eliminarMascotaController);

export default router;
