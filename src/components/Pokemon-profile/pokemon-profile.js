import React from 'react';
import { useHistory } from 'react-router-dom';
import './pokemon-profile.css';

const PokemonProfile = ({pokemon : {id, name, isCatched, timestamp}}) => {
    const history = useHistory();

    return (
      <div className="pokemon-profile-wrap">
        <div className="pokemon-profile">
          <div className="pokemon-profile-main">
            <button
              onClick={() => history.goBack()}
              className="pokemon-profile-button"
            >
              Go back
            </button>
            <img
              src={`/assets/images/pokemons/${id}.png`}
              className="pokemon-profile-img"
              alt={`${name} pokemon`}
            />
          </div>
          <div className="pokemon-profile-info">
            <div className="pokemon-profile-id">
              <h3>ID</h3>
              <p>{id}</p>
            </div>
            <div className="pokemon-profile-name">
              <h3>NAME</h3>
              <p>{name}</p>
            </div>
            <div className="pokemon-profile-status">
              <h3>STATUS</h3>
              {isCatched ? (
                <>
                  <p>Catched!</p>
                  <p>{timestamp}</p>
                </>
              ) : (
                <p>Not catched</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default PokemonProfile;
