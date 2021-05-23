import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/components/HomeView/HomePage';
import Movies from './views/components/Movies/Movies';
import NotFound from './views/components/NotFound/NotFound';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
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
      <Route exact path="/" component={HomeView} />
      <Route path="/movies" component={Movies} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
