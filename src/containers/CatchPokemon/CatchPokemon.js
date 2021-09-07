import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon } from '../../store/actions/actions';
import { CURRENT_DATE } from '../../store/constants/constants';

const getDate = date => { 
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  const hour = new Intl.DateTimeFormat('en', { hour: '2-digit', hour12: false }).format(date);
  const minute = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(date);

  return `${day}/${month}/${year} ${hour}:${minute < 10 ? `0${minute}` : minute}`;
}

const CatchPokemon = ({id}) => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons.pokemons);
    const catchedFlag = pokemons.find(pokemon => pokemon.id === id).isCatched;

    const onClickHandler = useCallback(event => {
        event.preventDefault();
        const date = new Date(CURRENT_DATE + event.timeStamp);

        dispatch(catchPokemon(id, getDate(date)));
      }, [dispatch, id]);

    if (catchedFlag) {
      return (
        <button className="pokemon-card-button-catched" disabled>
          CATCHED!
        </button>
      );
    }

    return (
      <button className="pokemon-card-button" onClick={onClickHandler}>
        CATCH
      </button>
    );
}

export default CatchPokemon;
