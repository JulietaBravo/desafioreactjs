import React, { useEffect, useState } from "react";
import { gFetch, gFetchOne } from "../helpers/gFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "../componentes/ItemDetail";
import styles from "../css/styles.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});

  const { detalleId } = useParams();
  console.log(detalleId);

  /* useEffect(() => {
    gFetch
      .then((resp) =>
        setProducto(resp.find((item) => item.id === Number(detalleId)))
      )
      .catch((err) => console.log(err));
    //.finally(()=> setLoading(false))
  }, []); */

  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db,'Item', detalleId)
    getDoc(queryDoc)
    .then(resp=>setProducto({id: resp.id,...resp.data()}))
  },[])

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
