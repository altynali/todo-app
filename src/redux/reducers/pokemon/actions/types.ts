import { PokemonType } from '../../../../components/shared/types'

export interface PokemonState {
    isLoading: boolean
    error: string
    pokemons: PokemonType[]
    pokemon: PokemonType | null
    offcet: number
}

export enum PokemonActionEnum {
    SET_POKEMONS = 'SET_POKEMONS',
    SET_POKEMON = 'SET_POKEMON',
}

export interface SetPokemonsAction {
    type: PokemonActionEnum.SET_POKEMONS
    payload: PokemonType[]
}

export interface SetPokemonAction {
    type: PokemonActionEnum.SET_POKEMON
    payload: PokemonType
}

export type PokemonAction = SetPokemonsAction | SetPokemonAction
