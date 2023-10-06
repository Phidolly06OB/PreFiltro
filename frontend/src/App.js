import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReadClientes from "./components/ReadClientes"
import Proveedores from './components/ReadProveedores';
import Empleados from './components/ReadEmpleados';
import Sucursales from './components/ReadSucursales';
import Productos from './components/ReadProductos';

import NewCliente from './components/clientesCU/newCliente';
import NewEmpleado from './components/empleadoCU/newEmpleado';
import NewProducto from './components/productoCU/newProducto';
import NewProveedor from './components/proveedorCU/newProveedor';
import NewSucursal from './components/sucursalCU/newSucursal';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='main'>
        <div>
          <Route exact path = '/Productos' component = {Productos}></Route>
        </div>
        <div>
          <Route exact path = '/' component = {ReadClientes}></Route>
        </div>
        <div>
          <Route exact path="/Proveedores" component = {Proveedores}></Route>  
        </div> 
        <div>
          <Route exact path="/Empleados" component = {Empleados}></Route>  
        </div> 
        <div>
          <Route exact path="/Sucursales" component = {Sucursales}></Route>  
        </div> 

        <div>
          <Route exact path="/newCliente" component = {NewCliente}></Route>  
        </div> 
        <div>
          <Route exact path="/newEmpleado" component = {NewEmpleado}></Route>  
        </div> 
        <div>
          <Route exact path="/newProducto" component = {NewProducto}></Route>  
        </div> 
        <div>
          <Route exact path="/newProveedor" component = {NewProveedor}></Route>  
        </div>
        <div>
          <Route exact path="/newSucursal" component = {NewSucursal}></Route>  
        </div>

      </div>
    </Router>
  )
}

export default App;
