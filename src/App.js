import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import {CategoryContainer} from './components/CategoryContainer';
import {ListCategoryContainer} from './components/ListCategoryContainer';
import {Productos} from './components/Productos';
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
                  Tienda Virtual de Productos Veganos
                </p>
              </div>
            </header>
          </Route>
          <Route exact path="/list">
            <ItemListContainer />
          </Route>
          <Route exact path="/categorias">
              <CategoryContainer />
          </Route>
          <Route exact path="/contacto">
            <h2>Seccion Contacto</h2>
          </Route>
          <Route exact path="/login">
            <h2>Seccion Login</h2>
          </Route>
          <Route exact path="/item/:itemIde">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/categorias/:catIde">
            <ListCategoryContainer items={Productos} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
