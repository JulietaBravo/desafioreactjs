import Item from "./Item.jsx"
import gFetch from "../helpers/gFetch.js"

function ItemList({productos}) {
    return(
        <>
        {productos.map((producto) => <Item key={producto.id} producto={producto} /> )}
        </>
    )
    
}

export default ItemList