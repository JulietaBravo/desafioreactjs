import Item from "./Item.jsx"
import gFetch from "../helpers/gFetch.js"

function ItemList({prods}) {
    return(
        <>
        {prods.map((prods) => <Item prod={prods} /> )}
        </>
    )
    
}

export default ItemList