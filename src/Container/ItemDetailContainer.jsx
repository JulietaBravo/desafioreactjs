import React, { useEffect, useState } from 'react'
import {gFetch, gFetchOne } from '../helpers/gFetch'
import { useParams } from 'react-router-dom'
import ItemDetail from '../componentes/ItemDetail'



function ItemDetailContainer() {

    const [producto, setProducto] = useState ({})

    const {detalleId} = useParams()
    console.log(detalleId);

     useEffect(()=>{
        gFetchOne
        .then(prod => setProducto(prod))
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