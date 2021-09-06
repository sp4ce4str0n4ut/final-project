import { POKEMON_LOADING, GET_POKEMON_SUCCESS, 
    GET_POKEMON_FAILURE } from "../constants/actionTypes";

const initialState = {
pokemon: {},
isLoading: false,
isCatched: false,
errorMsg: '',
};

const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case POKEMON_LOADING:
            return {
                ...state,
                isLoading: true,
                errorMsg: '',
            };
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemon: action.payload.data.shift(),
                errorMsg: '',
            };
        case GET_POKEMON_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMsg: 'Something went wrong, can\'t load pokemon from server',
            }
        default:
            return state;
    }
}

export default pokemonReducer;
