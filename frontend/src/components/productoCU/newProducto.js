import axios from "axios";
import { useState, useEffect } from "react";
import {Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import '../../assets/productos.css'

import Navbar from "../navbar";
import Footer from "../footer";

export default function NewProducto(){
    const [APIdata, setApiData] = useState([])
    
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [precioUnitario, setPrecio] = useState("");
    const [id_Proveedor, setProveedor] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/proveedores").then((response) => {
          setApiData(response.data);
        });
      }, []);

      const postData = () => {
        axios.post("http://localhost:8000/productos", {
          nombre,
          cantidad,
          precioUnitario,
          id_Proveedor
        });
     };


    return(
        <>
      <Navbar />

      <h1>Nuevo Producto</h1>

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
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            type="number"
            placeholder="1113"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio Unitario</Form.Label>
          <Form.Control
            value={precioUnitario}
            onChange={(e) => setPrecio(e.target.value)}
            type="number"
            placeholder="80000"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Sucursales</Form.Label>
          <Form.Select value={id_Proveedor} onChange={(e) => setProveedor(e.target.value)}>
            <option>Seleccione un Proveedor</option>
            {APIdata.map((data) =>(
                <option key={data._id} value={data._id}>{data.nombre}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Link to="/Productos">
          <Button onClick={postData} variant="primary" type="submit">
            Enviar
          </Button>
        </Link>
      </Form>

      <Footer />
    </>
    )
}