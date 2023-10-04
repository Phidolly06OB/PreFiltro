import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true,
        trim:true
    },
    cantidad:{
        type:Number,
        required:true,
        trim:true
    },
    precioUnitario:{
        type:Number,
        required:true,
        trim:true
    },
    id_Proveedor:{
        type: mongoose.Schema.ObjectId,
        required:true,
        trim:true
    }
})

const Productos = mongoose.model('Producto', productoSchema)

export default Productos