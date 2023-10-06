import "../assets/navbar.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navbare(){
    return(
        <Navbar className="x-19" expand="xl" >
        
          <Navbar.Brand className="division1" >OBShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto divicion2">
                  <Link to = '/'>Clientes</Link>
                  <Link to = '/Productos'>Productos</Link>
                  <Link to = '/Proveedores'>Proveedores</Link>
                  <Link to = '/Empleados'>Empleados</Link>
                  <Link to = '/Sucursales'>Sucursales</Link>
             
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>

        // <nav>
        //     <div className="divicion1">
        //         <h2>OBShop</h2>
        //     </div>
        //     <div className="divicion2">
        //         <Link to = '/'>Clientes</Link>
        //         <Link to = '/Productos'>Productos</Link>
        //         <Link to = '/Proveedores'>Proveedores</Link>
        //         <Link to = '/Empleados'>Empleados</Link>
        //         <Link to = '/Sucursales'>Sucursales</Link>
        //     </div>
        // </nav>
    )
}