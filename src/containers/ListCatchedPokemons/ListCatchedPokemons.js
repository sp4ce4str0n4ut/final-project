import React from 'react';
import { useSelector } from 'react-redux';
import Pokemon from '../../components/pokemon-card/pokemon-card';

const ListCatchedPokemons = () => {
    let pokemonsCatched = [];
    const pokemons = useSelector(state => state.pokemons.pokemons);
    
    pokemonsCatched = pokemons.filter(pokemon => pokemon.isCatched);

    return pokemonsCatched.length === 0 ? (
      <div class="empty-message">
        <h2>Nothing here yet</h2>
        <img src="/assets/images/pikachu.png" alt="pikachu" />
      </div>
    ) : (
      <div className="pokemon-list">
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
