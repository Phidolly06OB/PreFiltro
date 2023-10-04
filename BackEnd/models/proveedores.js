import mongoose from "mongoose";

const proveedorSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        tirm:true
    },
    producto:{
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

const Proveedores = mongoose.model('Provedore', proveedorSchema)

export default Proveedores