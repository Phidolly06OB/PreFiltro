import { Router } from "express";
import { borrar, getAlone, getProductos, newProducto, updProd } from "../controllers/Productos.controllers.js";
import { check } from "express-validator";
import validarDocumentos from "../middleware/validacionDocumentos.js";

const router = Router()

router.get('/', getProductos)

router.get('/:id', getAlone)

router.post('/',[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('cantidad', 'La cantidad es requerido y su valor debe de ser entero').not().isEmpty().isInt().isNumeric(),
    check('precioUnitario', 'El precio es requerido y su valor debe de ser entero').not().isEmpty().isInt().isNumeric(),
    check('id_Proveedor', 'El proveedor es requerido').not().isEmpty(),
    validarDocumentos
], newProducto)

router.delete('/:id', borrar)

router.patch('/:id', updProd)

export default router