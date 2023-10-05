import "../assets/navbar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar(){
    return(
        <nav>
            <div className="divicion1">
                <h2>OBShop</h2>
            </div>
            <div className="divicion2">
                <Link to = '/'>Clientes</Link>
                <Link to = '/Productos'>Productos</Link>
                <Link to = '/Proveedores'>Proveedores</Link>
                <Link to = '/Empleados'>Empleados</Link>
                <Link to = '/Sucursales'>Sucursales</Link>
            </div>
        </nav>
    )
}