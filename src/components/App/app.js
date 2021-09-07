import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import AppSidebar from '../app-sidebar/app-sidebar';
import ListPokemons from '../../containers/ListPokemons/ListPokemons';
import ListCatchedPokemons from '../../containers/ListCatchedPokemons/ListCatchedPokemons';
import ShowProfile from '../../containers/ShowProfile/ShowProfile';
import './app.scss';

const App = () => {

  return (
    <Router>
      <div className='app'>
        <AppHeader />
        <AppSidebar />
        <Switch>
          <Route path={'/'} exact render={() => <ListPokemons />} />
          <Route path={'/catched'} exact render={() => <ListCatchedPokemons />} />
          <Route path={`/pokemon/:id`} component={ShowProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
