import React, { Component } from 'react';
import { fetchTrendingMovies } from '../../../services/MoviesApi';
import s from './HomePage.module.css';
import MovieItem from '../MovieItem/MovieItem';
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
      <section className={s.section}>
        {this.state.movies.length > 0 && (
          <ul className={s.list}>
            {this.state.movies.map(movie => (
              <MovieItem movie={movie}></MovieItem>
            ))}
          </ul>
        )}
      </section>
    );
  }
}
