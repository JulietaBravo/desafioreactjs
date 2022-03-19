import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "../componentes/ItemCount";
import { Link } from "react-router-dom";


function Item({ prod }) {
  return (
    <Link to={`detalleProducto/${prod.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img imagenProducto variant="top" src={prod.imagenProducto} />
        <Card.Body>
          <Card.Title nombreProducto> {prod.nombreProducto} </Card.Title>
          <Card.Text descripcionProducto>
            {" "}
            {prod.descripcionProducto}{" "}
          </Card.Text>
          <Card.Text stockProducto> {prod.stockProducto} </Card.Text>
          <Card.Text precioProducto> {prod.precioProducto} </Card.Text>
          <Card.Text> {prod.count} </Card.Text>
          <Button variant="primary">Descripción</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Item;
