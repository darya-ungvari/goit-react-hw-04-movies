import { Component } from 'react';
import { fetchMovieCast, POSTER_URL } from '../../../services/MoviesApi';
import s from './Cast.module.css';

export default class Cast extends Component {
  state = {
    casts: { cast: [] },
  };
  componentDidMount() {
    fetchMovieCast(this.props.match.params.movieId)
      .then(request => this.setState({ casts: request }))
      .then(() => console.log(this.state.casts));
  }
  render() {
    const casts = this.state.casts;
    // {cast: [], crew: [], id: null}
    return (
      <>
        <ul className={s.castList}>
          {casts.cast.map(cast => (
            <li className={s.item}>
              <p className={s.name}>{cast.character}</p>

              <img
                src={`${POSTER_URL}${cast.profile_path}`}
                alt={cast.character}
                width="150px"
              ></img>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
