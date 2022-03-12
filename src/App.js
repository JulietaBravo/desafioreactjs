//import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './Container/ItemListContainer';
import puntaCana from './images/PuntaCana.jpg'
import losAngeles from './images/LosAngeles.jpg'


function App() {
 
  return (
    <div className="App">
     
      <NavBar/>
      <ItemListContainer 
      ImagenProducto={puntaCana}
      nombreProducto='Punta Cana'
      descripcionProducto='Paquete All Inclusive a Punta Cana'
      StockProducto={20}/>
      
      <ItemListContainer
      ImagenProducto={losAngeles} 
      nombreProducto='Los Ángeles'
      descripcionProducto='Viajes a Los Ángeles'
      StockProducto={5} />
      
    </div>
  );
}

export default App;
