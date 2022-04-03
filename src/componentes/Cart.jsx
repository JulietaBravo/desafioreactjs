import { useCartContext } from "../context/CartContext";
import styles from "../css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, vaciarCarrito, deleteItem, totalCarrito, totalCantidad } =
    useCartContext();
  const totalCompra = totalCarrito();
  const cantidad = totalCantidad();
  return (
    <div>
      {cartList.map((producto) => (
        <li key={producto.id} className="listCart">
          <ul>
            Cantidad
            <div> {producto.cantidad} </div>
          </ul>
          <ul>
            <img src={producto.imagenProducto} className="imgCart" alt="" />
          </ul>
          <ul>
            Producto
            <div>{producto.nombreProducto}</div>
          </ul>
          <ul>
            Precio
            <div> $ {producto.precioProducto}</div>
          </ul>
          <ul>
            Subtotal
            <div>$ {producto.cantidad * producto.precioProducto}</div>
          </ul>
          <ul>
            <Button>
              {" "}
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={() => deleteItem(producto.id)}
              />{" "}
            </Button>
          </ul>
          <br />
        </li>
      ))}

      {cantidad ? (
        <>
          <div>Total: ${totalCompra} </div>
          <br />
          <br />
          <button className="buttonAdd" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
          <button className="buttonAdd">Confirmar Compra</button>
        </>
      ) : (
        <>
          El carrito está vacío
          <br />
          <br />
          <Link to="/">
            <Button> Comprar</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
