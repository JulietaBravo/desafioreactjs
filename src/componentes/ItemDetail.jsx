import ItemCount from "./ItemCount";
import styles from "../css/styles.css";
import Intercambiabilidad from "./Itermcambiabilidad";
import { createContext, useContext, useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';


const ItemDetail=({ producto }) => {
const [isCant, setIsCant] = useState(false)
  
  const {addToCart} = useCartContext()
  
  const onAdd = (cant) => {
    console.log(cant);
    addToCart( {...producto, cantidad: cant} )
    setIsCant(true)
  };


  return (
    <div className="containerCard">
      <img src={producto.imagenProducto} alt="imagen" className="imgItem" />
      <h1>{producto.nombreProducto}</h1>
      <h3>$ {producto.precioProducto}</h3>
      {isCant?
      <>
      <Link to='/'>
        <button className="buttonAdd">Seguir comprando</button>
      </Link>
      <Link to='/cart'>
        <button className="buttonAdd">Ir a Cart</button>
      </Link>
      </>
      :

      <ItemCount initial={1} stock={10} onAdd={ onAdd} /> }
    
    </div>
  );
}

export default ItemDetail;
