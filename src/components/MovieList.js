import React, { Component } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

export default class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  };

  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((movie, i) => {
          return (
            <div key={i} className="movie-list-item">
              <Movie
                id={movie.imdbID}
                titulo={movie.Title}
                año={movie.Year}
                poster={movie.Poster}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
