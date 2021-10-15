import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="bienvenido" />
      <header className="App-header">        
        <p>
          Hola!!
        </p>        
      </header>
      
    </div>
  );
}

export default App;
