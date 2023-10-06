import axios from "axios";
import React, { useState, useEffect } from "react";

import Footer from "./footer";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

import "../assets/productos.css"
import { Table } from "react-bootstrap";

export default function Productos() {
  const [APIdata, setApiData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/productos").then((response) => {
      setApiData(response.data);
    });
  }, []);

  const getData = () => {
    axios.get(`http://localhost:8000/productos`).then((getData) => {
      setApiData(getData.data);
    });
  };

  const borrar = (id) => {
    axios.delete(`http://localhost:8000/productos/${id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
      <Navbar />

      <div className="contenido">
        <h1>Productos</h1>

        <Link className="botonP" to="/newProducto">
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
            Agregar Producto
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
                      class="icon icon-tabler icon-tabler-user"
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
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    NOMBRE
                  </div>
                </th>
                <th class="col-md-1">
                  <div className="cardMio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-abacus"
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
                      <path d="M5 3v18" />
                      <path d="M19 21v-18" />
                      <path d="M5 7h14" />
                      <path d="M5 15h14" />
                      <path d="M8 13v4" />
                      <path d="M11 13v4" />
                      <path d="M16 13v4" />
                      <path d="M14 5v4" />
                      <path d="M11 5v4" />
                      <path d="M8 5v4" />
                      <path d="M3 21h18" />
                    </svg>
                    CANTIDAD
                  </div>
                </th>
                <th class="col-md-1">
                  <div className="cardMio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-cashapp"
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
                      <path d="M17.1 8.648a.568 .568 0 0 1 -.761 .011a5.682 5.682 0 0 0 -3.659 -1.34c-1.102 0 -2.205 .363 -2.205 1.374c0 1.023 1.182 1.364 2.546 1.875c2.386 .796 4.363 1.796 4.363 4.137c0 2.545 -1.977 4.295 -5.204 4.488l-.295 1.364a.557 .557 0 0 1 -.546 .443h-2.034l-.102 -.011a.568 .568 0 0 1 -.432 -.67l.318 -1.444a7.432 7.432 0 0 1 -3.273 -1.784v-.011a.545 .545 0 0 1 0 -.773l1.137 -1.102c.214 -.2 .547 -.2 .761 0a5.495 5.495 0 0 0 3.852 1.5c1.478 0 2.466 -.625 2.466 -1.614c0 -.989 -1 -1.25 -2.886 -1.954c-2 -.716 -3.898 -1.728 -3.898 -4.091c0 -2.75 2.284 -4.091 4.989 -4.216l.284 -1.398a.545 .545 0 0 1 .545 -.432h2.023l.114 .012a.544 .544 0 0 1 .42 .647l-.307 1.557a8.528 8.528 0 0 1 2.818 1.58l.023 .022c.216 .228 .216 .569 0 .773l-1.057 1.057z" />
                    </svg>
                    PRECIO U.
                  </div>
                </th>
                <th class="col-md-1">
                  <div className="cardMio">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-id-badge-2"
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
                      <path d="M7 12h3v4h-3z" />
                      <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6" />
                      <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                      <path d="M14 16h2" />
                      <path d="M14 12h4" />
                    </svg>
                    ID_PROVEEDOR
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
                {APIdata.map((data) =>(
                  <tr>
                    <td>{data._id}</td>
                  <td>{data.nombre}</td>
                  <td>{data.cantidad}</td>
                  <td>{data.precioUnitario}</td>
                  <td>{data.id_Proveedor}</td>
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
    </div>
  );
}
