import React from 'react';
import Pokemon from '../pokemon-card/pokemon-card';
import './pokemon-list.scss';

const PokemonList = ({pokemons}) => {
    return (
        <div className='pokemon-list'>
            {pokemons && pokemons.map(element => <Pokemon name={element.name} id={element.id} key={`${element.id}-${element.name}`}/>)}
        </div>
    )
}

export default PokemonList;
