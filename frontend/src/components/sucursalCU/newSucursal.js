import axios from "axios";
import { useState } from "react";
import {Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import '../../assets/sucursales.css'

import Navbar from "../navbar";
import Footer from "../footer";

export default function NewSucursal(){

    const [nombre, setNombre] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [contacto, setContacto] = useState("");

    const postData = () => {
        axios.post("http://localhost:8000/sucursales", {
          nombre,
          ubicacion,
          contacto
        });
     };

    return(
        <>
        <Navbar />
  
        <h1>Nueva Sucursal</h1>
  
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
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
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

  
  
          <Link to="/Sucursales">
            <Button onClick={postData} variant="primary" type="submit">
              Enviar
            </Button>
          </Link>
        </Form>
  
        <Footer />
      </>
    )
}