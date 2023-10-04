import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true,
        trim: true
    },
    edad:{
        type:String,
        required:true,
        trim:true
    },
    telefono:{
        type:String,
        required: true,
        trim:true
    },
    documento:{
        type:String,
        required:true,
        trim:true
    },
    cargo:{
        type:String,
        required:true,
        enum:["Cajero", "Gerente", "Asistente"]
    },
    id_Sucursal:{
        type:mongoose.Schema.ObjectId,
        required: true,
        trim: true
    }
})

const Empleados = mongoose.model('Empleado', empleadoSchema)

export default Empleados