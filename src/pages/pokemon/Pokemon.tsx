import { Box, Button } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { PokemonList } from './items/PokemonsList'

const useStyles = makeStyles(() =>
    createStyles({
        root: { paddingTop: 20 },
    }),
)

export const Pokemon = () => {
    const styles = useStyles()

    return (
        <Box className={styles.root}>
            <PokemonList />
        </Box>
    )
}
