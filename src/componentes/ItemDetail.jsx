function ItemDetail({producto}) {
  return (
    <div>
        <img src={producto.imagenProducto} alt="imagen" />
        <p>{producto.nombreProducto}</p>
        <p>{producto.categoria}</p>
        <p>{producto.precioProducto}</p>
    </div>
  )
}

export default ItemDetail