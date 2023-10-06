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
    check('contacto', 'El contacto es requerido').not().isEmpty(),
    validarDocumentos
], newProveedor)

router.delete('/:id', borrar)

router.patch('/:id', updProveedores)

export default router