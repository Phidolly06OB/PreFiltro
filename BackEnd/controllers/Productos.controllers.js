import Productos from "../models/productos.js";

const getProductos = async (req, res)=>{
    try {
        const producto = await Productos.find()

        res.json(producto)
    } catch (error) {
        console.log(error);
    }
}

const getAlone = async (req, res) =>{
    try {
        const productoOne = await Productos.findOne({_id: req.params.id})

        res.json(productoOne)
    } catch (error) {
        console.log(error);   
    }
}


const newProducto = async (req, res) =>{
    try {
        const nuevoProducto = await new Productos(req.body)
        nuevoProducto.save();

        res.json(nuevoProducto)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Productos.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updProd = async (req, res) =>{
    try {
        const updProduc = await Productos.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updProduc);
    } catch (error) {
        console.log(error);
    }
}

export {
    getProductos,
    getAlone,
    newProducto,
    borrar,
    updProd
}