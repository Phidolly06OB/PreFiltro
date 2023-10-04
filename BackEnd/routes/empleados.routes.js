import { Router } from "express";
import validarDocumentos from "../middleware/validacionDocumentos.js";
import { check } from "express-validator";
import { borrar, getAlone, getEmpleados, newEmpleado, updEmpl } from "../controllers/Empleados.controllers.js";



const router = Router()

router.get('/', getEmpleados)

router.get('/:id', getAlone)

router.post('/',[
    check('nombre', "El nombre es requerido").not().isEmpty(),
    check('edad', "La edad es requerido").not().isEmpty(),
    check('telefono', "El telefono es requerido").not().isEmpty(),
    check('documento', "El documento es requerido").not().isEmpty(),
    check('cargo', "El cargo es requerido").not().isEmpty(),
    check('id_Sucursal', "La sucursal es requerida").not().isEmpty(),
    validarDocumentos
], newEmpleado)

router.delete('/:id', borrar)

router.patch('/:id', updEmpl)

export default router