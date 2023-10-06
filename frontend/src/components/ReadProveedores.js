import axios from "axios";
import React, { useState, useEffect } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

import "../assets/proveedores.css";

import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Proveedores() {
  const [APIdata, setApiData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/proveedores").then((response) => {
      setApiData(response.data);
    });
  }, []);

  const getData = () => {
    axios.get(`http://localhost:8000/proveedores`).then((getData) => {
      setApiData(getData.data);
    });
  };

  const borrar = (id) => {
    axios.delete(`http://localhost:8000/proveedores/${id}`).then(() => {
      getData();
    });
  };

  return (
    <>
      <Navbar />

      <div className="contenido">
        <h1>Proveedores</h1>

        <Link className="botonPD" to="/newProveedor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user-plus"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
            </svg>
            Agregar Proveedor
        </Link>

        <div className="fondoContenido">
          <Table hover responsive variant="dark">
            <thead>
              <tr>
                <th class="col-md-1">
                  <div className="cardMio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-id"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                      <path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path d="M15 8l2 0" />
                      <path d="M15 12l2 0" />
                      <path d="M7 16l10 0" />
                    </svg>
                    ID
                  </div>
                </th>
                <th class="col-md-1">
                  <div className="cardMio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-baguette"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5.628 11.283l5.644 -5.637c2.665 -2.663 5.924 -3.747 8.663 -1.205l.188 .181a2.987 2.987 0 0 1 0 4.228l-11.287 11.274a3 3 0 0 1 -4.089 .135l-.143 -.135c-2.728 -2.724 -1.704 -6.117 1.024 -8.841z" />
                      <path d="M9.5 7.5l1.5 3.5" />
                      <path d="M6.5 10.5l1.5 3.5" />
                      <path d="M12.5 4.5l1.5 3.5" />
                    </svg>
                    NOMBRE
                  </div>
                </th>
                <th class="col-md-1">
                  <div className="cardMio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-package"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                      <path d="M12 12l8 -4.5" />
                      <path d="M12 12l0 9" />
                      <path d="M12 12l-8 -4.5" />
                      <path d="M16 5.25l-8 4.5" />
                    </svg>
                    PRODUCTO
                  </div>
                </th>
                <th class="col-md-1">
                  <div className="cardMio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-phone"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    CONTACTO
                  </div>
                </th>
                <th class="col-md-1">
                  <div class="cardMio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-menu-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6l16 0" />
                      <path d="M4 12l16 0" />
                      <path d="M4 18l16 0" />
                    </svg>
                    OPTIONS
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {APIdata.map((data) => (
                <tr>
                  <td>{data._id}</td>
                  <td>{data.nombre}</td>
                  <td>{data.producto}</td>
                  <td>{data.contacto}</td>
                  <td>
                    <button
                      class="btn btn-danger"
                      onClick={() => borrar(data._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class=" icon icon-tabler icon-tabler-trash "
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Footer />
    </>
  );
}
