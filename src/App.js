import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">        
        <p>
          Hola!!
        </p>        
      </header>
      <ItemListContainer greeting="bienvenido" />
      
    </div>
  );
}

export default App;
