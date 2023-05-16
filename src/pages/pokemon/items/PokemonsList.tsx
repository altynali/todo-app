import { createStyles, makeStyles } from '@mui/styles'
import { PokemonItem } from './PokemonItem'
import { pokemonStateSelector } from '../../../redux/reducers/pokemon/pokemonReducer'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { Button } from '@mui/material'
import { PokemonActionCreators } from '../../../redux/reducers/pokemon/actions/actions'
import { POKEMON_COUNT } from '../../../components/shared/types'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '10px 0',
        },
    }),
)

export const PokemonList = () => {
    const styles = useStyles()
    const dispatch = useAppDispatch()

    const { pokemons, offcet } = useAppSelector(pokemonStateSelector)

    const handleLoadMore = () => {
        dispatch(PokemonActionCreators.fetchPokemons(`?limit=${POKEMON_COUNT}&offset=${offcet}`))
    }

    return (
        <div className={styles.root}>
            {pokemons?.map((pokemon, index) => (
                <PokemonItem pokemon={pokemon} key={pokemon.url + index} index={index} />
            ))}
            <Button variant="contained" onClick={handleLoadMore}>
                Load more
            </Button>
        </div>
    )
}
