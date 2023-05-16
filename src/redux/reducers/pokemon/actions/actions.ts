import { AxiosError } from 'axios'
import { PokemonActionEnum } from './types'
import { AppDispatch } from '../../../store'
import { PokemonReturnDataType, PokemonType } from '../../../../components/shared/types'
import { requestsApi } from '../../../../services/api'
import { AppActionCreators } from '../../app/actions/actions'

export const PokemonActionCreators = {
    setPokemons: (pokemons: PokemonType[] | null) => ({
        type: PokemonActionEnum.SET_POKEMONS,
        payload: pokemons,
    }),
    setPokemon: (pokemon: PokemonType | null) => ({
        type: PokemonActionEnum.SET_POKEMON,
        payload: pokemon,
    }),
    fetchPokemons: (url: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setIsLoading(true))
            const data: PokemonReturnDataType = await requestsApi.get(url)

            dispatch(PokemonActionCreators.setPokemons(data.results))
        } catch (err: unknown) {
            const error = err as AxiosError
            dispatch(AppActionCreators.setError(error))
        }
        return dispatch(AppActionCreators.setIsLoading(false))
    },
    fetchPokemon: (url: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AppActionCreators.setIsLoading(true))
            const data: PokemonType = await requestsApi.get(url)

            dispatch(PokemonActionCreators.setPokemon(data))
        } catch (err: unknown) {
            const error = err as AxiosError
            dispatch(AppActionCreators.setError(error))
        }
        return dispatch(AppActionCreators.setIsLoading(false))
    },
}
