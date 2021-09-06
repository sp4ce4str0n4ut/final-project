import { POKEMONS_LOADING, GET_POKEMONS_SUCCESS, 
        GET_POKEMONS_FAILURE, INCREASE_PAGE_COUNT  } from "../constants/actionTypes";

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
        default:
            return state;
    }
}

export default pokemonsReducer;
