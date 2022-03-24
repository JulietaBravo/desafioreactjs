import miami from '../images/miami.jpg'
import madrid from '../images/madrid.jpg'
import barcelona from '../images/barcelona.jpg'
import puntacana from '../images/PuntaCana.jpg'
import rio from '../images/rio.jpg'
import bariloche from '../images/bariloche.jpg'
import mendoza from '../images/mendoza.jpg'

const productos = [
    {id: 1, nombreProducto: 'Miami', descripcionProducto: 'Paquete a Miami', imagenProducto: miami, categoria: 'Paquetes', precioProducto: '$327.000'},
    {id: 2, nombreProducto: 'Madrid', descripcionProducto: 'Paquete a Madrid',  imagenProducto: madrid, categoria:'Paquetes', precioProducto:'$410.000'},
    {id: 3, nombreProducto: 'Barcelona', descripcionProducto: 'Vuelo a Barcelona',  imagenProducto: barcelona, categoria:'Vuelos', precioProducto:'$99.000'},
    {id: 4, nombreProducto: 'Punta Cana', descripcionProducto: 'Paquete a Punta Cana',  imagenProducto: puntacana, categoria:'Paquetes', precioProducto:'$250.000'},
    {id: 5, nombreProducto: 'Rio de Janeiro', descripcionProducto: 'Vuelos a Rio de Janeiro',  imagenProducto: rio, categoria:'Vuelos', precioProducto:'$87.000'},
    {id: 6, nombreProducto: 'San Carlos de Bariloche', descripcionProducto: 'Vuelo a Bariloche',  imagenProducto: bariloche, categoria:'Vuelos', precioProducto:'$66.000'},
    {id: 7, nombreProducto: 'Mendoza', descripcionProducto: 'Paquete a Mendoza',  imagenProducto: mendoza, categoria:'Paquetes', precioProducto:'$130.000'}
]


export const gFetch = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    } else {
      reject("400 - not found");
    }
  })

  const producto = {id: '1', nombreProducto: 'Miami', descripcionProducto: 'Paquete a Miami', imagenProducto: miami, categoriaProducto: 'Paquetes', precioProducto: '$327.000'}
                  
  export const gFetchOne = new Promise((resolve, reject)=>{
    //acciones 
   let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(producto)                    
        }, 3000);
    } else {
        reject('400 - not found')        
    }
})

  