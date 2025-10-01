import { Router } from "express";
import {
  crearUsuarioController,
  editarUsuarioController,
  eliminarUsuarioController,
  loginUsuarioController,
  obtenerUsuarioPorIdController,
  obtenerUsuariosController,
  registrarUsuarioController,
} from "../controllers/usuarios.controllers.js";

const router = Router();

// OBTENER USUARIOS
router.get("/", obtenerUsuariosController);

// OBTENER 1 SOLO USUARIO POR ID
router.get("/:id", obtenerUsuarioPorIdController);

router.post("/registro", registrarUsuarioController);
router.post("/login", loginUsuarioController);

// CREAR UN USUARIO
router.post("/", crearUsuarioController);

// EDITAR UN USUARIO
router.put("/:id", editarUsuarioController);

// ELIMINAR UN USUARIO
router.delete("/:id", eliminarUsuarioController);

// REGISTROS

export default router;
