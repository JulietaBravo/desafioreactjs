//import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './Container/ItemListContainer';
import puntaCana from './images/PuntaCana.jpg'
import losAngeles from './images/LosAngeles.jpg'
import ItemCount from './componentes/ItemCount';
import ItemList from './componentes/ItemList';
import Item from './componentes/Item';
import ItemDetailContainer from './Container/ItemDetailContainer';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'


function App() {
 
  return (

    <BrowserRouter>
    <div className="App">
    <NavBar/>

    <Routes>

      <Route
        path="/"
        element={
          <ItemListContainer/>

        }
      />
        <Route
        path="/categoria/:id"
        element={
          <ItemListContainer/>

        }
      />
         <Route
        path="/detalleProducto/:detalleId"
        element={
          <ItemDetailContainer/>

        }
      />
      </Routes>    
        
    </div>
    </BrowserRouter>
  );
}

export default App;
