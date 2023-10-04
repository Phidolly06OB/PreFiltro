import Sucursal from "../models/sucursales.js";

const getSucursales = async (req, res)=>{
    try {
        const sucursal = await Sucursal.find()

        res.json(sucursal)
    } catch (error) {
        console.log(error);
    }
}

const getAlone = async (req, res) =>{
    try {
        const sucursalOne = await Sucursal.findOne({_id: req.params.id})

        res.json(sucursalOne)
    } catch (error) {
        console.log(error);   
    }
}


const newSucursal = async (req, res) =>{
    try {
        const nuevaSucursal = await new Sucursal(req.body)
        nuevaSucursal.save();

        res.json(nuevaSucursal)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Sucursal.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updSucursal = async (req, res) =>{
    try {
        const updateSucur = await Sucursal.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updateSucur);
    } catch (error) {
        console.log(error);
    }
}

export {
    getSucursales,
    getAlone,
    newSucursal,
    borrar,
    updSucursal
}