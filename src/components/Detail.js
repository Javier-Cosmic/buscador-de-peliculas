import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import BotonBack from "../components/BotonBack";
import Loading from "../components/Loading"
import Rating from '@material-ui/lab/Rating';

const API_KEY = "56c99e00";

export default class Detail extends Component {
  static propTypes = {
    // contiene todo los parametros de la url
    match: PropTypes.shape({
      params: PropTypes.object, //aqui obtenemos la id
      isExact: PropTypes.bool, //booleano que indica si la ruta es exacta a la que se esperaba
      path: PropTypes.string, //patron de las rutas
      url: PropTypes.string, // la url que hace match con la ruta
    }),
  };

  constructor(props) {
    super(props);

    this.state = {
      movieDetail: {},
      loading: false,
    };
  }

  fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((resultsMovie) => {
        // console.log(resultsMovie);
        this.setState({
          movieDetail: resultsMovie,
          loading: true,
        });
      });
  }

  componentDidMount() {
    // console.log(this.props);
    const { movieid } = this.props.match.params; // se rescata de la url

    this.fetchMovie({ id: movieid });
  }

  valorRating(metascore){
    
    const puntuacion = parseInt(metascore)
    const operacion = puntuacion / 20

    return operacion
  }
  
  render() {
    const {
      Title,
      Poster,
      Actors,
      Metascore,
      Plot,
      imdbID,
      Runtime,
      Awards,
      Released
    } = this.state.movieDetail;    

    return (
      <Fragment>
        {this.state.loading
          ?<div className="columnas-center card">
          
          {imdbID ? (
            <Fragment>
              <div className="columns">
                <div className="column is-3">
                  <img className="poster" src={Poster} alt={Title} />
                </div>
                <div className="column is-9">
                    <h1 className="title is-3 movie">{Title}</h1>
                    <p className="subtitle is-6">
                       {Plot}
                    </p>
                    <h3 className="subtitle is-6">
                      <strong>Actors:</strong> {Actors}
                    </h3>
                    <h3 className="subtitle is-6 runtime">
                      <strong>Runtime:</strong> {Runtime}
                    </h3>
                    <h3 className="subtitle is-6">
                      <strong>Awards:</strong> {Awards}
                    </h3>
                    {Metascore === 'N/A'
                      ? <h3 className="subtitle is-6"><strong>Metascore: </strong>N/A</h3>
                      : <Fragment>
                          <span className="subtitle is-6"><strong>Metascore</strong></span>
                          <div className="metascore">
                          <Rating name="read-only" value={this.valorRating(Metascore)} readOnly />
                          </div>
                        </Fragment> 
                    }
                    <h3 className='subtitle is-6 date-released'><strong>Released:</strong> {Released}</h3> 
                </div>
              </div>
              <div className="is-one-third">
                <BotonBack />
              </div>
            </Fragment>
          ) : (
            "The movie ID does not exist."
          )}
        </div>
        : <Loading />
        }
      </Fragment>
    );
  }
}
