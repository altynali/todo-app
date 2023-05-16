import { POKEMON_COUNT } from '../../../components/shared/types'
import { RootState } from '../../rootReducer'
import { PokemonAction, PokemonActionEnum, PokemonState } from './actions/types'

const initialState: PokemonState = {
    isLoading: false,
    error: '',
    pokemons: [],
    pokemon: null,
    offcet: 0,
}

export default function pokemonReducer(state = initialState, action: PokemonAction): PokemonState {
    switch (action.type) {
        case PokemonActionEnum.SET_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload],
                isLoading: false,
                offcet: state.offcet + POKEMON_COUNT,
            }
        case PokemonActionEnum.SET_POKEMON:
            return { ...state, pokemon: action.payload, isLoading: false }
        default:
            return state
    }
}

export const pokemonStateSelector = (state: RootState) => state.pokemon
