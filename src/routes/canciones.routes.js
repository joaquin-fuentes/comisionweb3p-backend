import { Router } from "express";
import { crearCancionController, obtenerCancionesController, obtenerCancionesPorIdController } from "../controllers/canciones.controller.js";


const router = Router()

router.post("/", crearCancionController)

router.get("/", obtenerCancionesController)

router.get("/:id", obtenerCancionesPorIdController)

export default router;