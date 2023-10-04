import Empleados from "../models/empleados.js";

const getEmpleados = async (req, res)=>{
    try {
        const empleado = await Empleados.find()

        res.json(empleado)
    } catch (error) {
        console.log(error);
    }
}

const getAlone = async (req, res) =>{
    try {
        const empleadoOne = await Empleados.findOne({_id: req.params.id})

        res.json(empleadoOne)
    } catch (error) {
        console.log(error);   
    }
}


const newEmpleado = async (req, res) =>{
    try {
        const nuevoEmpleado = await new Empleados(req.body)
        nuevoEmpleado.save();

        res.json(nuevoEmpleado)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Empleados.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updEmpl = async (req, res) =>{
    try {
        const updEmpleado = await Empleados.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updEmpleado);
    } catch (error) {
        console.log(error);
    }
}

export {
    getEmpleados,
    getAlone,
    newEmpleado,
    borrar,
    updEmpl
}