import Clientes from "../models/clientes.js";

const getClientes = async (req, res)=>{
    try {
        const cliente = await Clientes.find()

        res.json(cliente)
    } catch (error) {
        console.log(error);
    }
}

const getAlone = async (req, res) =>{
    try {
        const clienteOne = await Clientes.findOne({_id: req.params.id})

        res.json(clienteOne)
    } catch (error) {
        console.log(error);   
    }
}


const newCliente = async (req, res) =>{
    try {
        const nuevoCliente = await new Clientes(req.body)
        nuevoCliente.save();

        res.json(nuevoCliente)
    } catch (error) {
        console.log(error);
    }
}

const borrar = async (req, res) =>{
    try {
        await Clientes.deleteOne({_id:req.params.id})
        res.send()

    } catch (error) {
        console.log(error);
    }
}

const updClient = async (req, res) =>{
    try {
        const updCliente = await Clientes.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        );

        res.json(updCliente);
    } catch (error) {
        console.log(error);
    }
}

export {
    getClientes,
    getAlone,
    newCliente,
    borrar,
    updClient
}