import { Router } from "express";
import { borrar, getAlone, getClientes, newCliente, updClient } from "../controllers/clientes.controllers.js";
import { check } from "express-validator";
import validarDocumentos from "../middleware/validacionDocumentos.js";

const router = Router()

router.get('/', [
    check('')
],getClientes)

router.get('/:id', getAlone)

router.post('/',[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('edad', 'La edad es requerido').not().isEmpty().isInt(),
    check('documento', 'El document es requerido y no debe de llevar puntos').not().isEmpty().isInt(),
    check('direccionResidencia', 'El lugar de recidencia es requerido').not().isEmpty(),
    validarDocumentos
], newCliente)

router.delete('/:id', borrar)

router.patch('/:id', updClient)

export default router