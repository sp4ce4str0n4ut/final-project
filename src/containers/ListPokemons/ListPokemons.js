import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { getPokemons, loadPage } from '../../store/actions/actions';
import PokemonList from '../../components/Pokemon-list/pokemon-list';
import { POKEMONS_PER_PAGE } from '../../store/constants/constants';

const ListPokemons = ({getPokemons, loadPage, pokemons, page, isLoading, errorMsg}) => {

    useEffect(() => {
    const fetchPokemons = async (page) => {
      await getPokemons(page);
    }

    if (pokemons.length / POKEMONS_PER_PAGE === page) {
      fetchPokemons(page);
    }
    //eslint-disable-next-line
  }, [page, getPokemons]);
  
  const onClickHandler = useCallback((e) => {
    e.preventDefault();
    loadPage();
  }, [loadPage]);

  const showPokemons = () => {
    if (errorMsg !== "") {
      return <h1>Error: {errorMsg}</h1>;
    }

    if (pokemons) {
      return (
        <div>
          <PokemonList pokemons={pokemons} />
          <div className="load-more">
            <button onClick={onClickHandler} className="load-more-button">
              {isLoading ? "Loading..." : "Load more"}
            </button>
          </div>
        </div>
      );
    }

    return <h1>Unable to get data</h1>;
  };

  return <>{showPokemons()}</>;
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
  page: state.pokemons.page,
  isLoading: state.pokemons.isLoading,
  errorMsg: state.pokemons.errorMsg,
});

const mapDispatchToProps = {
  getPokemons,
  loadPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPokemons);
