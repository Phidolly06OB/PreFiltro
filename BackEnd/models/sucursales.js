import mongoose from "mongoose";

const sucursalSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    ubicacion:{
        type:String,
        required:true,
        trim:true
    },
    contacto:{
        type:Object,
        required:true,
        trim:true
    }
})

const Sucursal = mongoose.model('Sucursale', sucursalSchema)

export default Sucursal