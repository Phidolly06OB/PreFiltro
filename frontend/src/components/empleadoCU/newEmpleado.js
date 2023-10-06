import axios from "axios";
import { useEffect, useState } from "react";
import {Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../assets/empleadosCU.css";

import Navbar from "../navbar";
import Footer from "../footer";



export default function NewEmpleado(){
    const [APIdata, setApiData] = useState([])

    
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [telefono, setTelefono] = useState("");
    const [documento, setDocumento] = useState("");
    const [cargo, setCargo] = useState("");
    const [id_Sucursal, setSucursal] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/sucursales").then((response) => {
          setApiData(response.data);
        });
      }, []);

    const postData = () => {
         axios.post("http://localhost:8000/empleados", {
           nombre,
           edad,
           telefono,
           documento,
           cargo,
           id_Sucursal,
         });
      };

    return(
        <>
      <Navbar />

      <h1>Nuevo Empleado</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            placeholder="Juan..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            type="number"
            placeholder="23"
          />
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="number"
            placeholder="12389....."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Cargo</Form.Label>
          <Form.Select 
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          >
            <option>Cargo...</option>
            <option value="Gerente">Gerente</option>
            <option  value="Asistente">Asistente</option>
            <option  value="Cajero">Cajero</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Documento</Form.Label>
          <Form.Control
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            type="number"
            placeholder="12389....."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Sucursales</Form.Label>
          <Form.Select value={id_Sucursal} onChange={(e) => setSucursal(e.target.value)}>
            <option>Seleccione una Sucursal</option>
            {APIdata.map((data) =>(
                <option key={data._id} value={data._id}>{data.nombre}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Link to="/Empleados">
        <Button onClick={postData} variant="primary" type="submit">
            Enviar
        </Button>
        </Link>

      </Form>

      <Footer />
    </>
    )
}