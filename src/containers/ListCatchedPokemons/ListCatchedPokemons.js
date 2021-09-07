import React from 'react';
import { useSelector } from 'react-redux';
import Pokemon from '../../components/Pokemon/pokemon';

const ListCatchedPokemons = () => {
    let pokemonsCatched = [];
    const pokemons = useSelector(state => state.pokemons.pokemons);
    
    pokemonsCatched = pokemons.filter(pokemon => pokemon.isCatched);

    return pokemonsCatched.length === 0 ? (
      <h1>Nothing here yet</h1>
    ) : (
      <div className="Pokemon-list">
        {pokemonsCatched &&
          pokemonsCatched.map((element) => (
            <Pokemon
              name={element.name}
              id={element.id}
              key={`${element.id}-${element.name}`}
            />
          ))}
      </div>
    );
}

export default ListCatchedPokemons;
