import { useState } from "react"; // acá importamos el hook, se usa use por convención
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PuntaCana from '../images/PuntaCana.jpg'

function ItemListContainer({nombreProducto, descripcionProducto, StockProducto, ImagenProducto}) {
  const [count, setCount] = useState(0); // return [0,1] . Se usa así por convencion

  const handleCount = () => {
    
    
    console.log(count);
    console.log(StockProducto);
    if (count<StockProducto) {
      setCount(count + 1);
      
    }
    else{
      setCount(StockProducto)
    }
  };

  const handleCountMin = () => {
    
    console.log(count);
    
    if(count>0){
      setCount(count - 1);
    }
    else{
      setCount(0)
    }
  }


  return (
    <>       
      <Card style={{ width: "18rem" }}>
        <Card.Img ImagenProducto variant="top" src={ImagenProducto} />  
        <Card.Body>
          <Card.Title nombreProducto> {nombreProducto} </Card.Title>
          <Card.Text descripcionProducto> {descripcionProducto} </Card.Text>
          <Card.Text StockProducto> {StockProducto} </Card.Text>
          <Card.Text> {count} </Card.Text>
          <Button variant="primary" onClick={handleCount}>Agregar al carrito</Button>
          <br></br>
          <br></br>
          <Button variant="primary" onClick={handleCountMin}>Quitar del carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemListContainer;
