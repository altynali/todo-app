import { Box } from '@mui/material'
import { Form } from './Form'
import { createStyles, makeStyles } from '@mui/styles'
import { TodoList } from './todos/TodoList'

const useStyles = makeStyles(() =>
    createStyles({
        root: { paddingTop: 20 },
    }),
)

export const Dashboard = () => {
    const styles = useStyles()

    return (
        <Box className={styles.root}>
            <Form />
            <TodoList />
        </Box>
    )
}
