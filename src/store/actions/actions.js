import axios from "axios";
import { POKEMONS_LOADING, GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE, INCREASE_PAGE_COUNT,
        POKEMON_LOADING, GET_POKEMON_SUCCESS, GET_POKEMON_FAILURE, CATCH_POKEMON, 
        } from "../constants/actionTypes";
import { POKEMONS_PER_PAGE } from "../constants/constants";

export const getPokemons = (page) => async dispatch => {
    dispatch({
        type: POKEMONS_LOADING,
    });

    await axios.get(`http://localhost:3001/pokemons?_page=${page + 1}&_limit=${POKEMONS_PER_PAGE}`)
    .then(response => {
        dispatch({
            type: GET_POKEMONS_SUCCESS,
            payload: response,
        });
    })
    .catch(error => {
        dispatch({
            type: GET_POKEMONS_FAILURE,
            payload: error,
        })
    });
};

export const getPokemon = id => async dispatch => {
    dispatch({
        type: POKEMON_LOADING,
    });

    await axios.get(`http://localhost:3001/pokemons?id=${id}`)
    .then(response => {
        dispatch({
            type: GET_POKEMON_SUCCESS,
            payload: response,
        });
    })
    .catch(error => {
        dispatch({
            type: GET_POKEMON_FAILURE,
            payload: error,
        })
    });
};

export const loadPage = () => dispatch => {
    dispatch({
        type: INCREASE_PAGE_COUNT,
    });
};

export const catchPokemon = (id, date) => dispatch => {
    dispatch({
        type: CATCH_POKEMON,
        id: id,
        date: date,
    });
};
