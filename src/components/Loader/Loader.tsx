import { CircularProgress } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 10,
            height: '100vh',
        },
    }),
)

export const Loader = () => {
    const styles = useStyles()

    return (
        <div className={styles.root}>
            <CircularProgress />
        </div>
    )
}
