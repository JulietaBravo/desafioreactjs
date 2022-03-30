import { useCartContext } from "../context/CartContext";

function Cart() {


    const { cartList, vaciarCarrito} = useCartContext()
    return(
        <div>
            { cartList.map(producto => <li key={producto.id}>
            nombre:  {producto.nombreProducto}
            <br />
            precio: {producto.precioProducto}
             </li>)} 

             <button className= "buttonAdd" onClick={vaciarCarrito }>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;