import { useEffect, useState } from "react"; // acá importamos el hook, se usa use por convención
import ItemList from "../componentes/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {gFetch} from "../helpers/gFetch"
import Card from "react-bootstrap/Card";
import ItemCount from "../componentes/ItemCount";
import { useParams } from "react-router-dom";



function ItemListContainer() {
  const [bool, setBool] = useState(true)
  const [loading, setLoading] = useState(true)
  const [prods, setProds] = useState([])
  const {id} = useParams



  useEffect (() =>{

    if(id){
      gFetch
      .then(resp => setProds(resp.filter(prod=>prod.categoria === id)))
      .catch(err => console.log(err))
      .finally( ()=> setLoading (false))
    }
    else{
      gFetch
      .then(resp => setProds(resp))
      .catch(err => console.log(err))
      .finally( ()=> setLoading (false))
    }
     
  }, [id])

  const ItemCount = (() =>{
    const [count, setCount] = useState(0); // return [0,1] . Se usa así por convencion


    const handleCount = () => {
        if (count <10) {
          setCount(count + 1);
        } else {
          setCount(10);
        }
      };
    
      const handleCountMin = () => {
        if (count > 0) {
          setCount(count - 1);
        } else {
          setCount(0);
        }
      };

})

 console.log(id); 
  return (
    <>
     {       loading ? <h2>Cargando...</h2> 
                    :
                        <ItemList prods={prods} />
                }
    </>
  );

 }
export default ItemListContainer;
