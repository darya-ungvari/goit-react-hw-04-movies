import React, { Component } from 'react';
import { fetchMoviesByName } from '../../../services/MoviesApi';
import s from '../HomePage/HomePage.module.css';
import MovieItem from '../MovieItem/MovieItem';

export default class Movies extends Component {
  state = {
    movies: [],
    searchedMovie: '',
  };

  onInputChange = e => {
    this.setState({ searchedMovie: e.target.value.toLowerCase() });
  };

  onFormSubmit = e => {
    e.preventDefault();
    fetchMoviesByName(this.state.searchedMovie)
      .then(request => this.setState({ movies: request.results }))
      .then(() => console.log(this.state.movies));
  };

  render() {
    return (
      <div className={s.section}>
        <form className={s.form} onSubmit={this.onFormSubmit}>
          <input
            className={s.input}
            placeholder="Search films"
            type="text"
            onChange={this.onInputChange}
          ></input>
          <button className={s.button} type="submit">
            Find
          </button>
        </form>
        {this.state.movies.length > 0 && (
          <ul className={s.list}>
            {this.state.movies.map(movie => (
              <MovieItem movie={movie}></MovieItem>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
