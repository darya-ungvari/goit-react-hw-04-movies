import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/components/HomePage/HomePage';
import Movies from './views/components/Movies/Movies';
import NotFound from './views/components/NotFound/NotFound';
import MovieDetailsPage from './views/components/MovieDetailsPage/MovieDetailsPage';
const App = () => (
  <>
    <ul className="Nav">
      <li className="link">
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="link">
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={Movies} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
