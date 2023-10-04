import { Router } from "express";
import { getSucursales, newSucursal, borrar, updSucursal } from "../controllers/Sucursales.controller.js";
import { check } from "express-validator";
import validarDocumentos from "../middleware/validacionDocumentos.js";
const router = Router()

router.get('/', getSucursales)

router.post('/',[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('ubicacion', 'La ubicacion es requerida').not().isEmpty(),
    check('contacto', 'El contacto es requerido').isObject().custom((value =>{
        if (!value.nombre) {
            throw new Error('El campo "nombre" es requerido en el objeto "user"');
          }
          if (!value.email) {
            throw new Error('El campo "email" es requerido en el objeto "user"');
          }
          if (!value.telefono) {
            throw new Error('El campo "telefono" es requerido en el objeto "user"');
          }
          return true;
    })),
    validarDocumentos
], newSucursal)

router.delete('/:id', borrar)

router.patch('/:id', updSucursal)

export default router