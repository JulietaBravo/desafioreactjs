import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "../componentes/ItemCount";
import { Link } from "react-router-dom";
import styles from "../css/styles.css";

function Item({ producto }) {
  return (
    
      <div className="itemIndividual">
        <Card style={{ width: "18rem" }}>
          <Card.Img imagenProducto variant="top" src={producto.imagenProducto} />
          <Card.Body>
            <Card.Title nombreProducto> {producto.nombreProducto} </Card.Title>
            <Card.Text descripcionProducto>
              {" "}
              {producto.descripcionProducto}{" "}
            </Card.Text>
            <Card.Text stockProducto> {producto.stockProducto} </Card.Text>
            <Card.Text precioProducto> {producto.precioProducto} </Card.Text>
            <Card.Text categoriaProducto> {producto.categoria} </Card.Text>
            <Card.Text> {producto.count} </Card.Text>
            <Link to={`detalleProducto/${producto.id}`}>
            <Button variant="primary">Detalle</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    
  );
}

export default Item;
