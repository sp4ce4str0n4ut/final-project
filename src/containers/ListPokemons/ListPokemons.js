import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, loadPage } from '../../store/actions/actions';
import PokemonList from '../../components/Pokemon-list/pokemon-list';
import { POKEMONS_PER_PAGE } from '../../store/constants/constants'; 

const ListPokemons = () => {
  
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.pokemons);
  const page = useSelector(state => state.pokemons.page);
  const isLoading = useSelector(state => state.pokemons.isLoading);
  const errorMsg = useSelector(state => state.errorMsg);

  useEffect(() => {
    const fetchPokemons = async (page) => {
      await dispatch(getPokemons(page));
    }

    if (pokemons.length / POKEMONS_PER_PAGE === page) {
      fetchPokemons(page);
    }
    //eslint-disable-next-line
  }, [page, dispatch]);

  const onClickHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(loadPage());
  }, [dispatch]);

  const showPokemons = () => {
    if (pokemons) {
      return (
        <div>
            <PokemonList pokemons={pokemons} />
            <div className='load-more'>
              <button onClick={onClickHandler} className='load-more-button'>
                {isLoading ? 'Loading...' : 'Load more'}
              </button>
            </div>
        </div>
      );
    }

		if(errorMsg) {
			return <h1>Error: {errorMsg}</h1>;
		}

		return <h1>Unable to get data</h1>;
  }

  return (
    <>
      {showPokemons()}
    </>
  );
}

export default ListPokemons;
