//import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './Container/ItemListContainer';
import puntaCana from './images/PuntaCana.jpg'
import losAngeles from './images/LosAngeles.jpg'
import ItemCount from './componentes/ItemCount';
import ItemList from './componentes/ItemList';
import Item from './componentes/Item';


function App() {
 
  return (
    <div className="App">
     
      <NavBar/>
      <ItemListContainer>
      <ItemList>
      <Item/>
      </ItemList>
        
      </ItemListContainer>
        
        
      
      
      
    </div>
  );
}

export default App;
