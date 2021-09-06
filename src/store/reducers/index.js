import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import pokemonsReducer from './pokemonsReducer';

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemons: pokemonsReducer,    
});

export default rootReducer;
