import { createStyles, makeStyles } from '@mui/styles'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { pokemonStateSelector } from '../../../redux/reducers/pokemon/pokemonReducer'
import { MyCard } from '../../../components/shared/MyCard'
import { useEffect } from 'react'
import { requestsApi } from '../../../services/api'
import { PokemonActionCreators } from '../../../redux/reducers/pokemon/actions/actions'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 10,
        },
    }),
)

export const PokemonDetailDetailPage = () => {
    const styles = useStyles()
    const dispatch = useAppDispatch()

    const { pokemon } = useAppSelector(pokemonStateSelector)
    // useEffect(() => {
    //     dispatch(PokemonActionCreators.fetchPokemon(location.pathname))
    // }, [])

    return (
        <div className={styles.root}>
            <MyCard name={pokemon?.name as string} image={pokemon?.sprites?.other?.dream_world?.front_default}></MyCard>
        </div>
    )
}
