import React, { FC } from 'react'
import { Button, Card } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { PokemonType } from '../../../components/shared/types'
import { useNavigate } from 'react-router-dom'
import { PokemonActionCreators } from '../../../redux/reducers/pokemon/actions/actions'
import { useAppDispatch } from '../../../redux/store'

export type PokemonItemProps = {
    pokemon: PokemonType
    index: number
}

const useStyles = makeStyles(() =>
    createStyles({
        root: { width: '30%', marginBottom: 10, display: 'flex', justifyContent: 'space-between' },
    }),
)

export const PokemonItem: FC<PokemonItemProps> = ({ pokemon, index }) => {
    const styles = useStyles()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { name } = pokemon

    const redirectToPokemon = () => {
        dispatch(PokemonActionCreators.fetchPokemon(name))

        navigate(`/${name}`)
    }

    return (
        <Card className={styles.root}>
            {index + 1}. Name: {name}
            <Button variant="contained" onClick={redirectToPokemon}>
                Details
            </Button>
        </Card>
    )
}
