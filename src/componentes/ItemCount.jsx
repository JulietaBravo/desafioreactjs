import { useState } from "react";
import styles from "../css/styles.css";
import ItemListContainer from "../Container/ItemListContainer";
import Intercambiabilidad from "./Itermcambiabilidad";
import Button from "react-bootstrap/esm/Button";


const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

const agregar = () => {
    onAdd(count)
  } 


  return (
    <div >
      <button onClick={restar} className="button"> - </button>
      <label> {count} </label>
      <button onClick={sumar} className="button"> + </button>
      <Button className="buttonAdd" onClick={agregar}>Agregar Al carrito</Button>
    </div>
  );
};

export default ItemCount;
