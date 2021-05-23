import React, { Component } from 'react';
import { fetchTrendingMovies, POSTER_URL } from '../../../services/MoviesApi';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchTrendingMovies()
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
