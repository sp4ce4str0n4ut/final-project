import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonList from '../../components/Pokemon-list/pokemon-list';

const ListPokemons = () => {
    const POKEMONS_PER_PAGE = 20;
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const getPokemons = () => {
        setIsLoading(true);
        
        axios.get(`http://localhost:3001/pokemons?_page=${page}&_limit=${POKEMONS_PER_PAGE}`)
          .then((response) => {
            setPokemons((pokemons) => [...pokemons, ...response.data]);
          })
          .catch(error => console.log(error))
          .finally(() => setIsLoading(false));
      }
  
      getPokemons();
    }, [page]);
  
    const loadPage = () => {
      setPage((page) => page + 1);
    }

    return (
        <div>
            <PokemonList pokemons={pokemons} />
            <div className='load-more'>
              <button onClick={loadPage} className='load-more-button'>
                {isLoading ? 'Loading...' : 'Load more'}
              </button>
            </div>
        </div>
    );
}

export default ListPokemons;
