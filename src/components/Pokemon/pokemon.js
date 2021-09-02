import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

const Pokemon = ({name, id}) => {

    return (
        <div className='pokemon-card'>
            <Link to={{
                pathname: `/pokemon-list?id=${id}&name=${name}`,
                state: {
                    name: name,
                    id: id
                },
                }}
            >
                <p className='pokemon-card-id'>#{id}</p>
                <img src={`/assets/images/pokemons/${id}.png`} className='pokemon-card-img' alt={`${name} pokemon`}/>
                <div className='pokemon-card-name'>
                    <span>{name}</span>
                </div>
                <button className='pokemon-card-button' onClick={() => console.log('CATCH!')}>
                    CATCH
                </button>
            </Link>  
        </div>
    );
}

export default Pokemon;
