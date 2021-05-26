import { Link } from 'react-router-dom';
import { POSTER_URL } from '../../../services/MoviesApi';
import s from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
  return (
    <>
      <li key={movie.id} className={s.item}>
        <Link to={`movies/${movie.id}`}>
          <img
            className={s.image}
            width="354px"
            height="531px"
            src={`${POSTER_URL}${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <p className={s.title}>{movie.title}</p>
        </Link>
      </li>
    </>
  );
};

export default MovieItem;
