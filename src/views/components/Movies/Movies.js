import React, { Component } from 'react';
import { fetchMoviesByName, POSTER_URL } from '../../../services/MoviesApi';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMoviesByName()
      .then(request => this.setState({ movies: request.results }))
      .then(() => console.log(this.state.movies));
  }
  render() {
    return (
      <>
        {this.state.movies.length > 0 && (
          <ul>
            {this.state.movies.map(movie => (
              <li key={movie.id}>
                <h2>{movie.title}</h2>
                <img
                  src={`${POSTER_URL}${movie.backdrop_path}`}
                  alt={movie.title}
                ></img>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}