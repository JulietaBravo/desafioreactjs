import { useCartContext } from "../context/CartContext";
import styles from "../css/styles.css";

function Cart() {


    const { cartList, vaciarCarrito} = useCartContext()
    return(
        <div>
            { cartList.map(producto => <li key={producto.id} className="listCart">
                <ul>
                    Cantidad
                    <div> {producto.cantidad} </div>
                </ul>
                <ul>
                    <img src={producto.imagenProducto} className="imgCart"alt="" />
                </ul>
                <ul>
                    Producto
                    <div>
                        {producto.nombreProducto}
                    </div>
                </ul>
                <ul>
                    Precio
                    <div> $ {producto.precioProducto}</div>
                </ul>
                <ul>
                    Subtotal 
                    <div>
                       $ {producto.cantidad*producto.precioProducto}
                    </div>
                </ul>
            <br />
             </li>)} 

             <button className= "buttonAdd" onClick={vaciarCarrito }>Vaciar Carrito</button>
        </div>
    )
}

export default Cart;