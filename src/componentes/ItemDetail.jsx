import ItemCount from "./ItemCount";
import styles from "../css/styles.css";
import Intercambiabilidad from "./Itermcambiabilidad";

function ItemDetail({ producto }) {
  const onAdd = (cant) => {
    console.log(cant);
  };
  return (
    <div className="containerCard">
      <img src={producto.imagenProducto} alt="imagen" className="imgItem" />
      <h1>{producto.nombreProducto}</h1>
      <h3>{producto.precioProducto}</h3>

      <ItemCount initial={1} stock={10} />
      <Intercambiabilidad/>
    </div>
  );
}

export default ItemDetail;
