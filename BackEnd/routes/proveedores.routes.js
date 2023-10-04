import { Router } from "express";
import { borrar, getAlone, getProveedores, newProveedor, updProveedores} from "../controllers/Proveedores.cotrollers.js";
import { check } from "express-validator";
import validarDocumentos from "../middleware/validacionDocumentos.js";

const router = Router()

router.get('/', getProveedores)

router.get('/:id', getAlone)

router.post('/',[
    check('nombre', 'El nombre del Proveedor es requerido').not().isEmpty(),
    check('producto', 'El nombre del producto es requerido').not().isEmpty(),
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
], newProveedor)

router.delete('/:id', borrar)

router.patch('/:id', updProveedores)

export default router