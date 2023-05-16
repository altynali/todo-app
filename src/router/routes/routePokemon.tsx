import { IRoute } from './routePublic'
import { Pokemon } from '../../pages/pokemon/Pokemon'
import { PokemonType } from '../../components/shared/types'
import { PokemonDetailDetailPage } from '../../pages/pokemon/items/PokemonDetailItemPage'

export const createEachPokemonRoute = (pokemons: PokemonType[]) => {
    const pokemonRoutes: IRoute[] = []

    pokemons.forEach(({ name }) => pokemonRoutes.push({ path: `/${name}`, element: PokemonDetailDetailPage }))

    return pokemonRoutes
}

export const routePokemon: IRoute[] = [{ path: '/pokemon', element: Pokemon }]
