import axios from "axios";
import { useState } from "react";
import {Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../assets/clientesCU.css";

import Navbar from "../navbar";
import Footer from "../footer";

export default function NewCliente() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [documento, setDocumento] = useState("");
  const [direccionResidencia, setDireccion] = useState("");
  //const navigate = useNavigate();

  const postData = () => {
    axios.post("http://localhost:8000/clientes", {
      nombre,
      edad,
      documento,
      direccionResidencia,
    });
  };

  return (
    <>
      <Navbar />

      <h1>Nuevo Cliente</h1>

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
          <Form.Label>Documento</Form.Label>
          <Form.Control
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            type="number"
            placeholder="12389....."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Direccion de recidencia</Form.Label>
          <Form.Control
            value={direccionResidencia}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            placeholder="cra 23a #56-34"
          />
        </Form.Group>
        <Link to="/">
          <Button onClick={postData} variant="primary" type="submit">
            Enviar
          </Button>
        </Link>
      </Form>

      <Footer />
    </>
  );
}
