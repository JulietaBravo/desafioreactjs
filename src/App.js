import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './Container/ItemListContainer';


function App() {
 
  return (
    <div className="App">
     
      <NavBar/>
      <ItemListContainer saludo='Hola soy ItemListContainer'/>
      
    </div>
  );
}

export default App;
