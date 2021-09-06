import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from '../App-header/app-header';
import AppSidebar from '../App-sidebar/app-sidebar';
import ListPokemons from '../../containers/ListPokemons/ListPokemons';
import ShowProfile from '../../containers/ShowProfile/ShowProfile';
import './app.css';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <AppHeader />
        <AppSidebar />
        <Switch>
          <Route path={'/'} exact render={() => <ListPokemons />} />
          <Route path={`/pokemon/:id`} component={ShowProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
