import {NavLink,Link} from 'react-router-dom'
import {useState} from 'react'
import  Button  from "react-bootstrap/Button";
import styles from "../css/styles.css";


const InputCount= ()=> {
    return (

        <>
        <Link to='/cart' >
            <Button className="buttonAdd" >Finalizar Compra</Button>
        </Link>
        <Link to='/'>
            <Button className="buttonAdd" >Continuar comprando</Button>
        </Link>
        </>
    )
}

const ButtonCount= ({handleInter})=> {
    return <Button className="buttonAdd" onClick={handleInter}>Agregar Al carrito</Button>
}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>   
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad