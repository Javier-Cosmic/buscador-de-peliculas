import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const API_KEY = "56c99e00";

export default class Buscador extends Component {
  state = {
    inputPelicula: "",
    redirect: false
  };

  handleChange = (e) => {
    this.setState({
      inputPelicula: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { inputPelicula } = this.state;

    /* 
      - Se hace una peticion con fetch a la url y con una promesa, se obtienen los datos como string
      los cuales con 'res', los transformamos a json primeramente.

      - Luego se hace otra promesa posteriormente para devolvernos los resultados json y guardalos como resultados
    */
   
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputPelicula}`)
      .then((res) => res.json())
      .then((results) => {
        const { Search } = results;
        //{, totalResult }

        // le pasamos Search como props
        this.props.onResultados(Search);

        this.setState({
          redirect: true
        })
        // console.log('1-',this.state.redirect)

        this.setState({
          redirect: false
        })
        // console.log('2', this.state.redirect)
      });

      e.target.reset();
  };

  render() {
    const { redirect } = this.state;

    return (
      <React.Fragment>
        {redirect
          ? <Redirect to={`${process.env.PUBLIC_URL}/`} />
          : null
        }

        <form onSubmit={this.handleSubmit}>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search a movie"
                onChange={this.handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-primary">Search</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
