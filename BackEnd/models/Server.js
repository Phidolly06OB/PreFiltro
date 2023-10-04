import cors from 'cors';
import express from 'express'
import conectarDB from '../config/database.js';

import routerEmpleado from '../routes/empleados.routes.js'
import routerProducto from '../routes/producto.routes.js'
import routerProveedor from '../routes/proveedores.routes.js'
import routerSucursal from '../routes/sucursales.routes.js'
import routerCliente from '../routes/clientes.routes.js'

class Server{
    constructor(){
        this.app = express()
        this.mongoDB()
        this.port = process.env.PORT

        this.empleadopath = '/empleados' 
        this.productopath = '/productos' 
        this.proveedorpath = '/proveedores' 
        this.sucursalpath = '/sucursales' 
        this.clientepath = '/clientes' 

        this.middleware()
        this.routes()
    }

    async mongoDB(){
        await conectarDB()
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.empleadopath, routerEmpleado)
        this.app.use(this.productopath, routerProducto)
        this.app.use(this.proveedorpath, routerProveedor)
        this.app.use(this.sucursalpath, routerSucursal)
        this.app.use(this.clientepath, routerCliente)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`listen on port ${this.port}`);
        })
    }
}

export default Server