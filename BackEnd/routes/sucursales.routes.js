import { Router } from "express";
import { getSucursales, newSucursal, borrar, updSucursal } from "../controllers/Sucursales.controller.js";
import { check } from "express-validator";
import validarDocumentos from "../middleware/validacionDocumentos.js";
const router = Router()

router.get('/', getSucursales)

router.post('/',[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('ubicacion', 'La ubicacion es requerida').not().isEmpty(),
    check('contacto', 'El contacto es requerido').not().isEmpty(),
    validarDocumentos
], newSucursal)

router.delete('/:id', borrar)

router.patch('/:id', updSucursal)

export default router