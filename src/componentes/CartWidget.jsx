import React from 'react'
import { faAlignCenter, faBorderNone, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from '../context/CartContext';
import styles from "../css/styles.css";



const CartWidget = () => {
  const { totalCantidad} = useCartContext()
  const cantidadTotal = totalCantidad();
  return (
    <div style={stylesCart}><FontAwesomeIcon icon={faCartShopping} />
    <div className='cantidadWidget'>{cantidadTotal} </div>
    </div>
  )
}

let stylesCart={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.5rem",
  textDecoration: "none",
}

export default CartWidget