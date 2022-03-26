import { useState } from "react";
import styles from "../css/styles.css";

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

console.log(count);


  return (
    <div >
      <button onClick={restar} className="button"> - </button>
      <label> {count} </label>
      <button onClick={sumar} className="button"> + </button>
    </div>
  );
};

export default ItemCount;
