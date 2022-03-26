import { useEffect, useState } from "react"; // acá importamos el hook, se usa use por convención
import ItemList from "../componentes/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { gFetch } from "../helpers/gFetch";
import Card from "react-bootstrap/Card";
import ItemCount from "../componentes/ItemCount";
import { useParams } from "react-router-dom";
import styles from "../css/styles.css";

function ItemListContainer() {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      gFetch
        .then((resp) =>
          setProductos(resp.filter((producto) => producto.categoria === id))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  console.log(id);
  return (
    <>
      <div className="itemListContainer">
        {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
      </div>
    </>
  );
}
export default ItemListContainer;
