import React, { useEffect, useState } from 'react'
import {gFetch, gFetchOne } from '../helpers/gFetch'
import { useParams } from 'react-router-dom'
import ItemDetail from '../componentes/ItemDetail'
import styles from '../css/styles.css'


function ItemDetailContainer() {

    const [producto, setProducto] = useState ({})

    const {detalleId} = useParams()
    console.log(detalleId);

     useEffect(()=>{
        gFetch
        .then(resp => setProducto(resp.find((item)=>item.id===Number(detalleId))))
        .catch(err => console.log(err))
        //.finally(()=> setLoading(false))
    }, []) 
 
  
    return (
    <div>
        <ItemDetail producto={producto}/> 
        </div>
  )
}

export default ItemDetailContainer