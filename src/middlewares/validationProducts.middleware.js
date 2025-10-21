import { handleValidationErrors } from "./validationErrors.middleware.js";
import { body, param } from "express-validator";

// crear validaciones
export const validacionesCrearProducto = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres")
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage("El nombre solo puede contener letras, números y espacios")
    .trim(),
  body("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isFloat({ min: 0 })
    .withMessage("Debe ingresar un número valido para el precio"),
  body("descripcion")
    .notEmpty()
    .withMessage("La descripcion es obligatorio")
    .isLength({ min: 10, max: 500 })
    .withMessage("Debe ingresar una descripcion entre 10 y 500 caracteres")
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage(
      "La descripción solo puede contener letras, números y espacios"
    ),
  handleValidationErrors,
];

export const validacionesEditarProducto = [
  param("id").isMongoId().withMessage("El ID del producto NO es válido"),
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre debe tener entre 2 y 100 caracteres")
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage("El nombre solo puede contener letras, números y espacios")
    .trim(),
  body("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isFloat({ min: 0 })
    .withMessage("Debe ingresar un número valido para el precio"),
  body("descripcion")
    .notEmpty()
    .withMessage("La descripcion es obligatorio")
    .isLength({ min: 10, max: 500 })
    .withMessage("Debe ingresar una descripcion entre 10 y 500 caracteres")
    .matches(/^[a-zA-Z0-9\s]+$/)
    .withMessage(
      "La descripción solo puede contener letras, números y espacios"
    ),
  handleValidationErrors,
];
