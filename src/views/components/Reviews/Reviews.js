import { Component } from 'react';
import { POSTER_URL, fetchMovieReviews } from '../../../services/MoviesApi';
import s from './Reviews.module.css';

export default class Reviews extends Component {
  state = { reviews: { results: [] } };
  componentDidMount() {
    fetchMovieReviews(this.props.match.params.movieId)
      .then(request => this.setState({ reviews: request }))
      .then(() => console.log(this.state.reviews));
  }
  render() {
    const reviews = this.state.reviews;
    return (
      <>
        <ul className={s.reviewList}>
          {reviews.results.map(review => (
            <li className={s.item}>
              <p className={s.review}>
                <span className={s.name}>{review.author}</span>
                {review.content}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
