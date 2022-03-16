import puntaCana from '../images/PuntaCana.jpg'
import losAngeles from '../images/LosAngeles.jpg'

const productos = [
    {id: 1, nombreProducto: 'Punta Cana', descripciondelProducto: 'Paquete All Inclusive a Punta Cana', imagenProducto: puntaCana, categoriaProducto: 'Paquetes', precioProducto: '$327.000'},
    {id: 2, nombreProducto: 'Los Angeles', descripciondelProducto: 'Viajes a Los Ángeles',  imagenProducto: losAngeles, categoriaProducto:'Paquetes', precioProducto:'$410.000'}
]


const gFetch = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    } else {
      reject("400 - not found");
    }
  });

export default gFetch  