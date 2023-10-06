import axios from "axios";
import { useState } from "react";
import {Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import '../../assets/proveedores.css'

import Navbar from "../navbar";
import Footer from "../footer";

export default function NewProveedor(){

    const [nombre, setNombre] = useState("");
    const [producto, setProducto] = useState("");
    const [contacto, setContacto] = useState("");

    const postData = () => {
        axios.post("http://localhost:8000/proveedores", {
          nombre,
          producto,
          contacto
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Producto</Form.Label>
            <Form.Control
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              type="text"
              placeholder="Juan..."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contacto</Form.Label>
            <Form.Control
              value={contacto}
              onChange={(e) => setContacto(e.target.value)}
              type="email"
              placeholder="Juan@gmail.com"
            />
          </Form.Group>

  
  
          <Link to="/Proveedores">
            <Button onClick={postData} variant="primary" type="submit">
              Enviar
            </Button>
          </Link>
        </Form>
  
        <Footer />
      </>
    )
}