import { Router } from "express";
import {
  actualizarProductoController,
  crearProductoController,
  eliminarProductoController,
  obtenerProductoPorIdController,
  obtenerProductosController,
} from "../controllers/productos.controller.js";
import { body, param, validationResult } from "express-validator";
import { ProductosModel } from "../models/productos.model.js";

const router = Router();

// manejador de errores
const handleValidationErrors = (req, res, next) => {
  // 📥 Obtiene los errores que generaron los middlewares anteriores (body, param, etc.)
  const errors = validationResult(req);
  //  si existen errores devolver repsuesta de error al front y terminar la ejecucion
  if (!errors.isEmpty()) {
    console.log(errors);
    const formattedErrors = errors.array().map((err) => ({
      field: err.path || err.param, // el campo que falló
      message: err.msg, // el mensaje de error
      value: err.value, // el valor recibido
    }));
    // Devolver error
    return res.status(400).json({
      success: false,
      message: "Errores de validación",
      errors: formattedErrors,
      totalErrors: formattedErrors.length,
    });
  }
  //   si no hay errores dejo que pase la funcion siguiente
  next();
};
// crear validaciones
const validacionesCrearProducto = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres")
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage("El nombre solo puede contener letras, números y espacios")
    .trim(),
  //funcionQueManejeLosErrores
  handleValidationErrors,
];

router.get("/", obtenerProductosController);

router.get("/:id", obtenerProductoPorIdController);

// antes de crear un ProductosModel, llamar a nuestro middleware que valida los campos
router.post("/", validacionesCrearProducto, crearProductoController);

router.put("/:id", actualizarProductoController);

router.delete("/:id", eliminarProductoController);

export default router;
