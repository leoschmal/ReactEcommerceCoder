import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <div className="contenedorHeader">
                <p className="titulo">
                  Bienvenido a la Tienda Virtual de Productos Veganos
                </p>
              </div>
            </header>
          </Route>
          <Route exact path="/categoria">
            <ItemListContainer greeting="bienvenido" />
          </Route>
          <Route exact path="/item/:itemIde">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
