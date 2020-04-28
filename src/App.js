import React, { Fragment } from "react";
import "./assets/css/App.css";
import "bulma/css/bulma.css";
import MovieList from "./components/MovieList";
import Detail from "./components/Detail";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import BotonBack from "./components/BotonBack";

// switch: sirve para envolver rutas y entregar la que indica el path
// Route: permite indicar la ruta declarativa

class App extends React.Component {
  state = {
    results: []
  };

  // los datos que obtenemos de la prop, se lo pasamos como parametro a la funcion
  handleResultados = (resultados) => {
    this.setState({
      results: resultados,
    });
  };

  render() {
    const { results } = this.state;
    return (
      <Fragment>
        <Header metodo={this.handleResultados} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
                  <div>
                    {results ? (
                      <div className="contenedor-movie">
                        <MovieList movies={results} />
                      </div>
                    ) : (
                      <p className="resultados">Without results</p>
                    )}
                  </div>
            )}
          />

          {/* la ruta :id corresponde al nombre cuando llamamos a la props match.params */}
          <Route exact path={"/detalle/:movieid"} component={Detail} />

          <Route
            render={() => (
              <div className="error">
                <p className="resultados">¡Oops, the route does not exist!</p>
                <BotonBack />
              </div>
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
