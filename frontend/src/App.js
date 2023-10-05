import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReadClientes from "./components/ReadClientes"
import Proveedores from './components/ReadProveedores';
import Empleados from './components/ReadEmpleados';
import Sucursales from './components/ReadSucursales';
import Productos from './components/ReadProductos';
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
          <Route path="/Proveedores" component = {Proveedores}></Route>  
        </div> 
        <div>
          <Route path="/Empleados" component = {Empleados}></Route>  
        </div> 
        <div>
          <Route path="/Sucursales" component = {Sucursales}></Route>  
        </div> 

      </div>
    </Router>
  )
}

export default App;
