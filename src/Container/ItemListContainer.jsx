import { useEffect, useState } from "react"; // acá importamos el hook, se usa use por convención
import ItemList from "../componentes/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { gFetch } from "../helpers/gFetch";
import Card from "react-bootstrap/Card";
import ItemCount from "../componentes/ItemCount";
import { useParams } from "react-router-dom";
import styles from "../css/styles.css";
import React from "react";

import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"

function ItemListContainer() {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [prod, setProd] = useState([]);
  const { id } = useParams();

  /* useEffect(() => {
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
  }, [id]); */

  /* useEffect(()=>{
    const db = getFirestore

    const queryDoc = doc(db, 'items', 'ire68xiOt0qo9wHdXX3n')
    getDoc(queryDoc)  
    .then(resp => setProd( {id: resp.id, ...resp.data()} ))
  }, [id]) */

  useEffect(()=>{
    const db = getFirestore ()
    const queryCollection = !id 
    ? 
        collection(db, 'Item' )
    :  
        query( collection(db, 'Item' ), 
            where('categoria','==', id) 
            //orderBy("title", "desc")                                   
        )
    getDocs(queryCollection)
    .then(resp => setProductos( resp.docs.map(producto =>({id: producto.id, ...producto.data()}))))
    .catch(err => console.log(err))
    .finally(()=> setLoading (false))
   }, [id])

    return (
    <>
      <div className="itemListContainer">
        {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
      </div>
    </>
  );
}

export default ItemListContainer; 
