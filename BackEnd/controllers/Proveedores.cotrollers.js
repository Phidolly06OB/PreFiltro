import Proveedores from "../models/proveedores.js";

const getProveedores = async (req, res)=>{
    try {
        const proveedor = await Proveedores.find()

        res.json(proveedor)
    } catch (error) {
        console.log(error);
    }
}

const getAlone = async (req, res) =>{
    try {
        const proveedorOne = await Proveedores.findOne({_id: req.params.id})

        res.json(proveedorOne)
    } catch (error) {
        console.log(error);   
    }
}


const newProveedor = async (req, res) =>{
    try {
        const nuevoProveedor = await new Proveedores(req.body)
        nuevoProveedor.save();

        res.json(nuevoProveedor)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Proveedores.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updProveedores = async (req, res) =>{
    try {
        const updateProveedor = await Proveedores.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updateProveedor);
    } catch (error) {
        console.log(error);
    }
}

export {
    getProveedores,
    getAlone,
    newProveedor,
    borrar,
    updProveedores
}