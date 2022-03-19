function ItemDetail({producto}) {
  return (
    <div>
        <img src={producto.imagenProducto} alt="imagen" />
        <p>{producto.nombreProducto}</p>
        <p>{producto.categoriaProducto}</p>
        <p>{producto.precioProducto}</p>
    </div>
  )
}

export default ItemDetail