import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../../store/actions/actions';
import PokemonProfile from '../../components/pokemon-profile/pokemon-profile';
import Loader from '../../components/loader/loader';

const ShowProfile = ({ pokemon, pokemons, isLoading, errorMsg, getPokemon, match }) => {
  const {id} = match.params;

  useEffect(() => {
      getPokemon(id);
  }, [getPokemon, id]);

  try {
    if (pokemons.find((pokemon) => pokemon.id === Number(id)).isCatched) {
      pokemon.isCatched = true;
      pokemon.timestamp = pokemons.find((pokemon) => pokemon.id === Number(id)).timestamp;
    }
  } catch {
    pokemon.isCatched = false;
  }

    const showPokemon = () => {
      if (isLoading) return <Loader />;

      if (errorMsg !== "")
        return (
          <div className="error-message-wrap">
            <h1 className="error-message">{errorMsg}</h1>
          </div>
        );

      if (pokemon)
        return (
          <div>
            <PokemonProfile pokemon={pokemon} />
          </div>
        );
    };

    return <>{showPokemon()}</>;
}

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemon,
    pokemons: state.pokemons.pokemons,
    isLoading: state.pokemon.isLoading,
    errorMsg: state.pokemon.errorMsg,
  });

const mapDispatchToProps = {
    getPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowProfile);
