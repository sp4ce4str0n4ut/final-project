import React from 'react';
import Pokemon from '../Pokemon/pokemon';
import './pokemon-list.css';

const PokemonList = ({pokemons}) => {
    return (
        <div className='Pokemon-list'>
            {pokemons && pokemons.map(element => <Pokemon name={element.name} id={element.id} key={`${element.id}-${element.name}`}/>)}
        </div>
    )
}

export default PokemonList;
