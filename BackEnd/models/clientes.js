import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    edad:{
        type:Number,
        required:true,
        trim:true
    },
    documento:{
        type:Number,
        required:true,
        trim:true
    },
    direccionResidencia:{
        type:String,
        required:true,
        trim:true
    }
})

const Clientes = mongoose.model('cliente', clienteSchema)

export default Clientes