import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../store/actions/actions';
import PokemonProfile from '../../components/Pokemon-profile/pokemon-profile';
import Loader from '../../components/Loader/loader';

const ShowProfile = props => {
    const {id} = props.match.params;
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon.pokemon);
    const pokemons = useSelector(state => state.pokemons.pokemons);
    const isLoading = useSelector(state => state.pokemon.isLoading);
    const errorMsg = useSelector(state => state.pokemon.errorMsg);

    useEffect(() => {
        dispatch(getPokemon(id));
    }, [id, dispatch]);

    try {
        if (pokemons.find(pokemon => pokemon.id === Number(id)).isCatched) {
            pokemon.isCatched = true;
            pokemon.timestamp = pokemons.find(pokemon => pokemon.id === Number(id)).timestamp;
        }
    } catch {
        pokemon.isCatched = false;
    }

    const showPokemon = () => {
        if(isLoading)
			return (
        <Loader />
      );

        if(errorMsg !== '')
			return <h1>Error: {errorMsg}</h1>

        if (pokemon)
        return (
            <div>
                <PokemonProfile pokemon={pokemon}/>
            </div>        
        );
    }

    return (
        <>
            {showPokemon()}
        </>
    );
}

export default ShowProfile;
