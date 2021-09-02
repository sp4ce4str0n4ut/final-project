import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from '../App-header/app-header';
import AppSidebar from '../App-sidebar/app-sidebar';
import ListPokemons from '../../containers/PokemonList/ListPokemons';
import ShowProfile from '../../containers/ShowProfile/ShowProfile';
import './app.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <AppSidebar />
        <AppHeader />
        <Switch>
          <Route exact path='/' component={ListPokemons} />
          <Route exact path='/pokemon-list?id=:id&name=:name' component={ShowProfile}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
