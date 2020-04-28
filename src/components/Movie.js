import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

export default class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    titulo: PropTypes.string,
    año: PropTypes.string,
    poster: PropTypes.string,
  };

  render() {
    const {id, titulo, año, poster } = this.props;

    return (
      <Link to={`/movie/${id}`} >
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={poster}
              alt={titulo}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
                <p className="title is-4">{titulo}</p>
                <p className="subtitle is-6">{año}</p>
            </div>
          </div>
        </div>
        </div>
      </Link>
    );
  }
}
