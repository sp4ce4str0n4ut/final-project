import React from 'react';
import { Link } from 'react-router-dom';
import CatchPokemon from '../../containers/CatchPokemon/CatchPokemon';
import './pokemon.css';

const Pokemon = ({name, id }) => {

    return (
        <div className='pokemon-card'>
            <Link to={`/pokemon/${id}`}>
                {/* <p className='pokemon-card-id'>#{id}</p> */}
                <img src={`/assets/images/pokemons/${id}.png`} className='pokemon-card-img' alt={`${name} pokemon`}/>
                <div className='pokemon-card-name'>
                    <span>{name}</span>
                </div>
            </Link> 
            <CatchPokemon id={id}/>
        </div>
    );
}

export default Pokemon;
