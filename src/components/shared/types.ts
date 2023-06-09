export type TodoType = {
    name: string
    description: string
    time: string
    id: number
}

export type PokemonType = {
    name: string
    url: string
    sprites: any
}

export type PokemonReturnDataType = {
    results: PokemonType[] | null
}

export const POKEMON_COUNT = 20
