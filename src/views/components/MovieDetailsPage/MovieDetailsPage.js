import { Component } from 'react';
import { fetchMovieDetails, POSTER_URL } from '../../../services/MoviesApi';
import s from './MovieDetailsPage.module.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    fetchMovieDetails(this.props.match.params.movieId)
      .then(request => this.setState({ movie: request }))
      .then(() => console.log(this.state.movie));
  }
  render() {
    const movie = this.state.movie;
    return (
      <>
        {this.state.movie && (
          <>
            <section className={s.section}>
              {/* <h1>Movies Details Page{this.props.match.params.movieId}</h1> */}
              <div className={s.card}>
                <img
                  className={s.poster}
                  width="400px"
                  src={`${POSTER_URL}${movie.poster_path}`}
                  alt={movie.title}
                ></img>
              </div>
              <div>
                <p className={s.name}>Raiting: {movie.vote_average}</p>
                <span className={s.name}>Overview: </span>
                <span>{movie.overview}</span>
                <p className={s.name}>Genres:</p>

                <ul>
                  {movie.genres.map(genre => (
                    <li className={s.genreName} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        )}
        {!this.state.movie && <span>Loading...</span>}
        <ul className={s.navLinks}>
          <li className={s.item}>
            <NavLink
              to={`${this.props.match.url}/cast`}
              className="NavLink"
              activeClassName="NavLinkActive"
            >
              Cast
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to={`${this.props.match.url}/reviews`}
              className="NavLink"
              activeClassName="NavLinkActive"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast}></Route>
          <Route path="/movies/:movieId/reviews" component={Reviews}></Route>
        </Switch>
      </>
    );
  }
}
