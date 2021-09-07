import { POKEMONS_LOADING, GET_POKEMONS_SUCCESS, 
        GET_POKEMONS_FAILURE, INCREASE_PAGE_COUNT, CATCH_POKEMON  } from "../constants/actionTypes";

const initialState = {
    pokemons: [],
    page: 0,
    isLoading: false,
    errorMsg: '',
};

const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POKEMONS_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMsg: '',
            };
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemons: [...state.pokemons, ...action.payload.data],
                errorMsg: '',
            };
        case GET_POKEMONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'Something went wrong, can\'t load pokemons from server',
            };
        case INCREASE_PAGE_COUNT:
            return {
                ...state,
                page: state.page + 1,
            }
        case CATCH_POKEMON:
            const updatedPokemons = state.pokemons.map((pokemon) => {
                if (pokemon.id === action.id) {
                    return {...pokemon, isCatched: true, timestamp: action.date};
                } else {
                    return {...pokemon};
                }
            })
            return {
                ...state,
                pokemons: updatedPokemons,
            }
        default:
            return state;
    }
}

export default pokemonsReducer;
