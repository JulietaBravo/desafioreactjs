import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import ItemCount from '../componentes/ItemCount'

function Item({prod}) {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img imagenProducto variant="top" src={prod.imagenProducto} />
    <Card.Body>
      <Card.Title nombreProducto> {prod.nombreProducto} </Card.Title>
      <Card.Text descripcionProducto> {prod.descripcionProducto} </Card.Text>
      <Card.Text stockProducto> {prod.stockProducto} </Card.Text>
      <Card.Text> {prod.count} </Card.Text>
      <Button variant="primary" onClick={prod.handleCount}>
        Agregar al carrito
      </Button>
      <br></br>
      <br></br>
      <Button variant="primary" onClick={prod.handleCountMin}>
        Quitar del carrito
      </Button>
    </Card.Body>
  </Card>

    
  )
}

export default Item
